export class SearchButton extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener('click', () => document.dispatchEvent(new CustomEvent('search', { bubbles: true })));
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('search', { bubbles: true }));
            }
        });
    }
}