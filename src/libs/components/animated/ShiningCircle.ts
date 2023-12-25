export class ShiningCircle extends HTMLDivElement {
    moveSpeed: number = 0.9; // Speed of position animation
    snapTreshold: number = 0.005; // Minimum difference for animation to snap to target
    isMobileDevice: boolean; // Whether the device is a mobile device or not
    rect: DOMRect | undefined = undefined; // The bounding rectangle of the element
    boundingElement: HTMLElement; // The element to use as a bounding box for the animation
    animationTargets:{ x: number; y: number; shouldAnimate: boolean; }; // Store animation targets and current state
    currentState: { x: number; y: number; isAnimating: boolean; };
    bounding: HTMLElement | null; // The bounding element
    shines: NodeListOf<HTMLElement> | null; // The shine elements

    constructor() {
        super();

        this.isMobileDevice = /Mobi/i.test(navigator.userAgent);
        this.boundingElement = this; // The element itself is the bounding box
        this.animationTargets = {
            x: 0, // Target X position
            y: 0, // Target Y position
            shouldAnimate: false, // Flag to check if animation should happen
        };
        this.currentState = {
            x: 0, // Current X position
            y: 0, // Current Y position
            isAnimating: false, // Flag to check if animation is currently in progress
        };
        this.bounding = this.querySelector('[data-target="shining-circle.bounding"]');
        this.shines = this.querySelectorAll('[data-target="shining-circle.shine"]');
        if (!this.shines || this.shines.length === 0) {
            throw new Error('ShiningCircle: No shines found, you have probably misconfigured the component.');
        }
    }

    connectedCallback() {
        if (this.isConnected && !this.isMobileDevice && !(this.getRootNode() instanceof ShadowRoot)) {
            this.boundingElement = this.bounding || this;
            this.rect = this.boundingElement.getBoundingClientRect();
            this.addEventListener('mousemove', this.handleMouseMove.bind(this));
            this.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        }
    }

    handleMouseMove(event: MouseEvent) {
        if (!this.animationTargets.shouldAnimate) {
            this.rect = this.boundingElement.getBoundingClientRect();
        }

        this.animationTargets = {
            x: this.shines ? this.rect!.width - (event.clientX - this.rect!.x) - this.shines[0].offsetWidth / 2 : 0,
            y: this.shines ? this.rect!.height - (event.clientY - this.rect!.y) - this.shines[0].offsetHeight / 2 : 0,
            shouldAnimate: true,
        };

        if (!this.currentState.isAnimating) {
            this.currentState.isAnimating = true;
            this.animationTargets.shouldAnimate = true;
            requestAnimationFrame(this.animateTowardsTarget.bind(this));
        }

        this.shines?.forEach((shine, _) => {
            shine.style.opacity = '1';
        });
    }

    handleMouseLeave() {
        this.animationTargets.shouldAnimate = false;
        this.shines?.forEach((shine, _) => {
            shine.style.opacity = '0';
        });
    }

    animateTowardsTarget() {
        this.currentState = {
            x: this.shines ? this.goTowardsValue(this.currentState.x, this.animationTargets.x, this.moveSpeed) : 0,
            y: this.shines ? this.goTowardsValue(this.currentState.y, this.animationTargets.y, this.moveSpeed) : 0,
            isAnimating: this.currentState.isAnimating,
        };

        if (Math.abs(this.animationTargets.x - this.currentState.x) < this.snapTreshold &&
            Math.abs(this.animationTargets.y - this.currentState.y) < this.snapTreshold &&
            !this.animationTargets.shouldAnimate) {
            this.currentState.isAnimating = false;
            return;
        }

        if (this.shines) {
            this.shines.forEach((shine, _) => {
                shine.style.transform = `translate(${-this.currentState.x}px, ${-this.currentState.y}px)`; // Apply transformation
            });
        }

        requestAnimationFrame(this.animateTowardsTarget.bind(this));
    }

    goTowardsValue(current: number, target: number, speed: number) {
        return Math.round((current + (target - current) * speed) * 100) / 100;
    }
}