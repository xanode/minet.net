export class MobileSidebar extends HTMLDivElement {
    button: HTMLButtonElement;
    nav: HTMLDivElement;
    isOpen: boolean = false;

    constructor() {
        super();

        this.button = this.querySelector<HTMLButtonElement>("button")!;
        this.nav = this.querySelector<HTMLDivElement>("div")!;
    }

    connectedCallback() {
        this.button.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick() {
        this.isOpen = !this.isOpen;
        this.button.setAttribute("aria-selected", this.isOpen.toString());
        this.nav.setAttribute("aria-expanded", this.isOpen.toString());
    }

    disconnectedCallback() {
        this.button.removeEventListener("click", this.handleClick.bind(this));
    }
}