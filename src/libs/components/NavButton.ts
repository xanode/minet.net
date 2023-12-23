export class NavButton extends HTMLButtonElement {
    expanded: boolean;
    menu: HTMLElement;

    constructor() {
        super();
        this.expanded = false;
        this.menu = document.querySelector('#phone-menu')!;
    }

    connectedCallback() {
        this.setAttribute('aria-expanded', this.expanded.toString());
        this.addEventListener('click', this.handleClick);
    }

    handleClick() {
        this.expanded = !this.expanded;
        this.setAttribute('aria-expanded', this.expanded.toString());
        this.menu.setAttribute('aria-hidden', (!this.expanded).toString());
    }
}