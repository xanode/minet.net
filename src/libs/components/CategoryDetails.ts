/**
 * A custom element to toggle the visibility of a list of tutorials.
 */
export class CategoryDetails extends HTMLDivElement {
    button: HTMLButtonElement; // The button to toggle the visibility of the list
    open: boolean = false; // Whether the list is visible or not
    list: HTMLUListElement; // The list of tutorials

    constructor() {
        super();
        this.button = this.querySelector<HTMLButtonElement>('button')!;
        if (this.button.getAttribute('aria-expanded') === 'true') this.open = true;
        this.list = this.querySelector<HTMLUListElement>('ul')!;
    }

    /**
     * Called when the element is added to the DOM.
     * Add the event listener to the button.
     * 
     * @returns {void}
     */
    connectedCallback() {
        this.button.addEventListener('click', this.toggle.bind(this));
    }

    /**
     * Called when the button is clicked.
     * Toggle the visibility of the list.
     * 
     * @returns {void}
     */
    toggle() {
        this.open = !this.open;
        this.button.setAttribute('aria-expanded', this.open.toString());
        this.list.setAttribute('aria-expanded', this.open.toString());
    }
}