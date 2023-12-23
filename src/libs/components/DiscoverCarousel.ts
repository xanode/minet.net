type Selector = {
    button: HTMLButtonElement;
    card: HTMLDivElement;
}

export class DiscoverCarousel extends HTMLElement {
    selectors: Array<Selector>;

    constructor() {
        super();

        // Both buttons and cards has the same data-name attribute
        // So we can use it to link them together
        // We query the button and cards that has the same data-name
        // then we store them in an array
        this.selectors = Array.from(this.querySelectorAll("button")).map((button) => {
            const name = button.dataset.target;
            const card = this.querySelector(`[data-name="${name}"]`)! as HTMLDivElement;

            return {button: button, card: card};
        });
    }

    connectedCallback() {
        // We set the first button as selected and the others as not selected
        this.selectors.forEach((selector, index) => {
            //selector.button.setAttribute("aria-selected", index === 0 ? "true" : "false");
            selector.card.setAttribute("aria-hidden", index === 0 ? "false" : "true");
        });

        // We add a click event listener on each button
        this.selectors.forEach((selector) => {
            selector.button.addEventListener("click", () => {
                this.handleClick(selector);
            });
        });

    }

    handleClick(selector: Selector) {
        // We set the clicked button as selected and the others as not selected
        this.selectors.forEach((selector) => {
            selector.button.removeAttribute("aria-current");
            selector.card.setAttribute("aria-hidden", "true");
        });

        selector.button.setAttribute("aria-current", "page");
        selector.card.setAttribute("aria-hidden", "false");
    }
}