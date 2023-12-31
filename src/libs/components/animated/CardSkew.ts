export class CardSkew extends HTMLElement {
    skewSpeed: number = 0.15; // Speed of skew animation
    moveSpeed: number = 0.9; // Speed of position animation
    snapTreshold: number = 0.005; // Minimum difference for animation to snap to target
    isMobileDevice: boolean; // Whether the device is a mobile device or not
    rect: DOMRect | undefined = undefined; // The bounding rectangle of the element
    boundingElement: HTMLElement; // The element to use as a bounding box for the animation
    animationTargets:{ x: number; y: number; skewX: number; skewY: number; shouldAnimate: boolean; }; // Store animation targets and current state
    currentState: { x: number; y: number; skewX: number; skewY: number; isAnimating: boolean; };
    perspective: number; // Perspective value for the 3D transformation
    disableSkew: boolean; // Whether to disable skew animation or not
    bounding: HTMLElement | null; // The bounding element
    shine: HTMLElement | null; // The shine element

    constructor() {
        super();

        this.isMobileDevice = /Mobi/i.test(navigator.userAgent);
        this.boundingElement = this; // The element itself is the bounding box
        this.animationTargets = {
            x: 0, // Target X position
            y: 0, // Target Y position
            skewX: 0, // Target skew on X-axis
            skewY: 0, // Target skew on Y-axis
            shouldAnimate: false, // Flag to check if animation should happen
        };
        this.currentState = {
            x: 0, // Current X position
            y: 0, // Current Y position
            skewX: 0, // Current skew on X-axis
            skewY: 0, // Current skew on Y-axis
            isAnimating: false, // Flag to check if animation is currently in progress
        };
        this.perspective = this.dataset.perspective ? parseInt(this.dataset.perspective) : 700;
        this.disableSkew = this.dataset.skew === 'disabled' ? true : false;

        this.bounding = this.querySelector('[data-target="card-skew.bounding"]');
        this.shine = this.querySelector('[data-target="card-skew.shine"]');
    }

    connectedCallback() {
        // Check if the element is connected, not on a mobile device and not inside a shadow DOM
        if (this.isConnected && !this.isMobileDevice && !(this.getRootNode() instanceof ShadowRoot)) {
            // Set the bounding element to this element or use provided bounding element
            this.boundingElement = this.bounding || this;

            // Get the bounding rectangle of the element
            this.rect = this.boundingElement.getBoundingClientRect();

            // Add event listeners for mousemove and mouseleave events
            this.addEventListener('mousemove', this.handleMouseMove.bind(this));
            this.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        }
    }

    handleMouseMove(event: MouseEvent) {
        // If shouldAnimate flag is false, update the bounding rectangle
        if (!this.animationTargets.shouldAnimate) {
            this.rect = this.boundingElement.getBoundingClientRect();
        }

        // Set the animation targets based on mouse position and element properties
        this.animationTargets = {
            x: this.shine ? this.rect!.width - (event.clientX - this.rect!.left) - this.shine!.offsetWidth / 2 : 0,
            y: this.shine ? this.rect!.height - (event.clientY - this.rect!.top) - this.shine!.offsetHeight / 2 : 0,
            skewX: this.disableSkew ? 0 : (event.clientY - this.rect!.top - this.rect!.height / 2) / this.rect!.height * 2,
            skewY: this.disableSkew ? 0 : -(3 * ((event.clientX - this.rect!.left - this.rect!.width / 2) / this.rect!.width)),
            shouldAnimate: true,
        };

        // If not already animating, start the animation loop
        if (!this.currentState.isAnimating) {
            this.currentState.isAnimating = true;
            this.animationTargets.shouldAnimate = true;
            requestAnimationFrame(this.animateTowardsTarget.bind(this));
        }
    }

    handleMouseLeave() {
        // Reset skew and stop animation
        this.animationTargets.skewX = 0;
        this.animationTargets.skewY = 0;
        this.animationTargets.shouldAnimate = false;
    }

    // Animation loop
    animateTowardsTarget() {
        // Update current state values based on animation targets and speed
        this.currentState = {
            x: this.shine ? this.goTowardsValue(this.currentState.x, this.animationTargets.x, this.moveSpeed) : 0,
            y: this.shine ? this.goTowardsValue(this.currentState.y, this.animationTargets.y, this.moveSpeed) : 0,
            skewX: this.disableSkew ? 0 : this.goTowardsValue(this.currentState.skewX, this.animationTargets.skewX, this.skewSpeed),
            skewY: this.disableSkew ? 0 : this.goTowardsValue(this.currentState.skewY, this.animationTargets.skewY, this.skewSpeed),
            isAnimating: this.currentState.isAnimating,
        }

        // Check if the animation has reached the target within the snap treshold and should stop
        if (Math.abs(this.animationTargets.x - this.currentState.x) < this.snapTreshold &&
            Math.abs(this.animationTargets.y - this.currentState.y) < this.snapTreshold &&
            Math.abs(this.animationTargets.skewX - this.currentState.skewX) < this.snapTreshold &&
            Math.abs(this.animationTargets.skewY - this.currentState.skewY) < this.snapTreshold &&
            !this.animationTargets.shouldAnimate) {
            this.currentState.isAnimating = false; // Animation complete, set isAnimating to false
            return;
        }

        // Apply transformations to the element
        if (this.shine) {
            this.shine.style.setProperty('transform', `translate(${-this.currentState.x}px, ${-this.currentState.y/2}px)`);
        }
        if (!this.disableSkew) {
            this.style.setProperty('transform', `perspective(${this.perspective}px) rotateX(${Math.round(100*this.currentState.skewX)/100}deg) rotateY(${Math.round(100*this.currentState.skewY)/100}deg)`);
        }

        // Continue the animation loop
        requestAnimationFrame(this.animateTowardsTarget.bind(this));
    }

    // Function to smoothly transition between two values based on a speed parameter
    goTowardsValue(current: number, target: number, speed: number) {
        return Math.round((current + (target - current) * speed) * 100) / 100;
    }
}