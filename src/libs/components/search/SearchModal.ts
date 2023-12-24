import lunr from 'lunr';
import type { CollectionEntry } from 'astro:content';

type Document = {
    title: CollectionEntry<'tutoriels'>['data']['title'];
    slug: CollectionEntry<'tutoriels'>['slug'];
    body: CollectionEntry<'tutoriels'>['body'];
};

export class SearchModal extends HTMLDivElement {
    documents: any | null = null;
    index: lunr.Index | null = null;
    input: HTMLInputElement;
    overlay: HTMLDivElement;
    reset: HTMLButtonElement;
    resultList: HTMLUListElement
    subtitle: HTMLSpanElement;
    i18n: Record<string, string>;
    lang: string;

    constructor() {
        super();
        
        /** Get elements */
        this.input = this.querySelector('input') as HTMLInputElement;
        this.overlay = this.querySelector('[data-name="overlay"]') as HTMLDivElement;
        this.reset = this.querySelector('button') as HTMLButtonElement;
        this.resultList = this.querySelector('ul') as HTMLUListElement;
        this.subtitle = this.querySelector('[data-name="subtitle"]') as HTMLSpanElement;

        /** Get i18n */
        this.i18n = JSON.parse(this.dataset.i18n!);
        this.lang = this.dataset.lang!;
    }

    connectedCallback() {
        this.style.display = 'none';
        this.reset.style.display = 'none';
        this.subtitle.textContent = this.i18n['tutorials.search.modal.min-length'];

        /** Events that open the modal */
        document.addEventListener('search', this.openModal.bind(this));

        /** Event related to search */
        this.input.addEventListener('input', this.handleSearch.bind(this));
        this.reset.addEventListener('click', this.handleReset.bind(this));

        /** Events that close the modal */
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') this.closeModal();
        });
        this.overlay.addEventListener('click', this.closeModal.bind(this));
    }

    openModal() {
        this.style.display = 'block';
        setTimeout(() => this.style.opacity = '1');
        this.loadSearch();
        this.input.focus();
    }

    async loadSearch() {
        if (this.index) return;

        // Update the subtitle to indicate that the search is loading
        this.subtitle.textContent = this.i18n['tutorials.search.modal.loading'];

        // Fetch the search.json data and initialize the lunr index
        const response = await fetch(`/${this.lang}/search.json`);
        this.documents = await response.json();

        const self = this;

        // Create the lunr index
        this.index = lunr(function () {
            // We assume that search.json is an array of objects with the attributes title, body and slug
            this.field('title');
            this.field('body');
            this.ref('slug');
            // Add documents to the index
            self.documents.forEach((doc: Document) => {
                this.add(doc);
            }, this);
        });

        // Update the subtitle to indicate that searching can start
        this.subtitle.textContent = this.i18n['tutorials.search.modal.min-length'];
    }

    handleReset() {
        this.input.value = '';
        this.reset.style.display = 'none';
        this.subtitle.textContent = this.i18n['tutorials.search.modal.min-length'];
    }

    handleSearch() {
        if (!this.index) return;

        const query = this.input.value;

        // Reset the subtitle and results
        this.subtitle.textContent = '';
        this.reset.style.display = query.length > 0 ? 'block' : 'none';
        // Clear previous search results
        this.clearResults();

        if (query.length < 3) {
            this.subtitle.textContent = this.i18n['tutorials.search.modal.min-length'];
            return;
        }

        this.subtitle.textContent = this.i18n['tutorials.search.modal.searching'];

        // Perform the search and display results
        const searchResults = this.index.search(query);
        this.displayResults(searchResults);
    }

    clearResults() {
        // Clear the results list
        this.resultList.innerHTML = '';
    }

    displayResults(searchResults: lunr.Index.Result[]) {
        searchResults.forEach(result => {
            const doc: Document = this.documents.find((doc: Document) => doc.slug === result.ref);
            const [lang, ...slug] = doc.slug.split('/');
            if (doc) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a class="flex items-center text-sm px-4 rounded-lg hover:bg-neutral-900 whitespace-normal transition-colors h-18" href="/${lang}/tutoriels/${slug}/">
                        <div class="flex items-center">
                            <span class="flex items-center justify-center mr-3">
                                <svg class="w-5 h-5 mt-[1px] fill-none text-neutral-400 stroke-current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path></svg>
                            </span>
                            <span>
                                <div class="text-base text-neutral-200 text-ellipsis line-clamp-1" name="title">
                                </div>
                                <div class="my-2 pl-2 border-l-4 border-neutral-800 text-neutral-400 text-ellipsis line-clamp-1" name="body">
                                </div>
                            </span>
                        </div>
                    </a>
                `;
                listItem.querySelector('[name="title"]')!.textContent = doc.title;
                listItem.querySelector('[name="body"]')!.textContent = doc.body;

                // Update content in listItem using doc data
                this.resultList.appendChild(listItem);
            }
        });
        this.subtitle.textContent = `${searchResults.length} ${this.i18n['tutorials.search.modal.results']}`;
    }

    closeModal() {
        this.style.display = 'none';
        this.style.opacity = '0';
    }
}