import { debounce } from "@libs/utils";

export class AnimatedButton extends HTMLAnchorElement {
    rect: DOMRect;
    radialGradient: HTMLDivElement | null;
    viaPercent: number = 0;

    constructor() {
        super();

        this.rect = this.getBoundingClientRect();

        this.radialGradient = this.querySelector("div"); // Representing the first div element in the sub tree so this is the good one

        this.addEventListener("mousemove", this.handleMouseHover.bind(this));
        this.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
        this.addEventListener("mouseleave", this.handleMouseLeave.bind(this));

        // Debounce the handleMouseHover function with a delay of 50ms
        this.handleMouseHover = debounce(this.handleMouseHover, 50);
    }

    handleMouseHover(event: MouseEvent) {
        this.style.setProperty("--y", `${(event.clientY - this.rect.top)}px`);
        this.style.setProperty("--x", `${(event.clientX - this.rect.left)}px`);
    }

    handleMouseEnter() {
        this.radialGradient!.style.setProperty("--circle-radius", "2.5em");
    }

    handleMouseLeave() {
        this.radialGradient!.style.setProperty("--circle-radius", "0em");
    }
}