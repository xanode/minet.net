import { debounce } from '@libs/utils';

/**
 * A custom element that represents a carousel of cards.
 * 
 * The carousel is a horizontal list of cards that can be dragged to the left or right.
 * When the user stops dragging, the carousel will move to the card that is nearest to the center.
 * The carousel can also be navigated using the left and right arrow keys.
 * 
 * The carousel can be customized using the following attributes:
 * - data-dragspeed: The speed of the transition when dragging the carousel (default: 0.3)
 * - data-startindex: The index of the card that is in the center at the start (default: 0)
 */
export class TeamCarousel extends HTMLDivElement {
    startIndex: number = 0; // The index of the card that is in the center at the start
    currentIndex: number = 0; // The index of the card that is currently in the center
    cards: Array<HTMLLIElement>; // The cards in the carousel
    dragSpeed: number = 0.3; // The speed of the transition when dragging
    offset: number = 0; // The offset to center the cards
    gap: number = 0; // The gap between the cards in pixels
    carousel: HTMLUListElement; // The carousel element
    translation: number = 0; // The current translation of the carousel
    isMouseDown: boolean = false; // Whether the mouse is down
    isDragging: boolean = false; // Whether the user is dragging the carousel
    startX: number = 0; // The x position of the mouse when the user starts dragging
    currentX: number = 0; // The current x position of the mouse when the user is dragging
    justFinishedDragging: boolean = false; // Whether the user just finished dragging the carousel


    constructor() {
        super();

        this.carousel = this.querySelector('ul')!;
        this.cards = Array.from(this.querySelectorAll('li'));
        this.dragSpeed = parseFloat(this.dataset.dragspeed ?? '0.3');
    }

    /**
     * Called when the component is connected to the DOM.
     * It initializes the variables and adds event listeners.
     * 
     * The offset is calculated by taking the width of the carousel, dividing it by 2, and subtracting half of the width of a card and half of the gap.
     * 
     * Here is a visual representation of the offset (with startIndex=4):
     * 
     * +----------------------------The carousel---------------------------------+
     * |                                                                         |
     * |------------------------------------|: carousel width/2                  |
     * |                                |---|: (card width + gap)/2              |
     * |  +---+   +---+   +---+   +---+   +---+   +---+   +---+   +---+   +---+  |
     * |  | 0 |   | 1 |   | 2 |   | 3 |   | 4 |   | 5 |   | 6 |   | 7 |---| 8 |<-|--- a card
     * |  +---+   +---+   +---+   +---+   +---+   +---+   +---+   +---+ ^ +---+  |
     * |                                                                |        |
     * |--------------------------------|: offset                       +--------|--- the gap (the distance between the cards)
     * |                                                                         |
     * +-------------------------------------------------------------------------+
     * 
     * @returns {void}
     */
    connectedCallback() {
        /// Initialize variables ///
        this.currentIndex = parseInt(this.dataset.startindex ?? '0'); // Set the current index to the start index given in the HTML
        this.gap = parseFloat(window.getComputedStyle(this.carousel).gap.replace('px', '')) || 0; // Get the gap between the cards
        this.offset = this.carousel.getBoundingClientRect().width/2 - (this.cards[0].offsetWidth + this.gap)/2;

        /// Add event listeners ///
        // Add a click event listener to each card to move to that card when clicked
        this.cards.forEach((card, index) => {
            card.style.transitionDuration = `${this.dragSpeed}s`;
            card.addEventListener('click', () => {
                !this.justFinishedDragging && this.updateCardPositions(index);
                this.justFinishedDragging = false;
            });
        });

        // Add click event listeners to the left and right buttons to move to the previous or next card
        this.querySelector('[data-name="left"]')!.addEventListener('click', () => {
            this.updateCardPositions(this.currentIndex - 1);
        });
        this.querySelector('[data-name="right"]')!.addEventListener('click', () => {
            this.updateCardPositions(this.currentIndex + 1);
        });

        // Add keydown event listener to move to the previous or next card when the left or right arrow keys are pressed
        document.addEventListener('keydown', debounce(this.handleKeydown.bind(this), 100)); // Debounce the event listener to prevent spamming, events will be fired at most once every 100ms

        // Add mousedown event listener to start dragging the carousel
        this.carousel.addEventListener('mousedown', (event: MouseEvent) => {
            event.preventDefault();
            this.isMouseDown = true;
            this.startX = event.clientX;
        });
        this.carousel.addEventListener('mousemove', this.handleDragging.bind(this));
        this.carousel.addEventListener('mouseup', this.handleMouseup.bind(this));
        // Same as above but for touch events
        this.carousel.addEventListener('touchstart', (event: TouchEvent) => {
            event.preventDefault();
            this.isMouseDown = true;
            this.startX = event.touches[0].clientX;
        });
        this.carousel.addEventListener('touchmove', this.handleDragging.bind(this));
        this.carousel.addEventListener('touchend', this.handleMouseup.bind(this));

        // Update the offset when the window is resized
        window.addEventListener('resize', this.handleResize.bind(this));

        // Set the initial card positions
        this.updateCardPositions(this.currentIndex);
    }

    /**
     * Called when the user is dragging the carousel.
     * It translates the carousel to follow the mouse.
     * 
     * @param event The mousemove event
     * @returns {void}
     */
    handleDragging(event: MouseEvent | TouchEvent) {
        if (!this.isMouseDown) return;
        this.isDragging = true;
        event.preventDefault();
        // Stop CSS animations
        this.carousel.classList.remove('duration-300');
        this.carousel.classList.add('duration-0');
        this.style.cursor = 'grabbing';
        this.currentX = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
        const diff = this.currentX - this.startX;
        this.translation += diff;
        this.carousel.style.transform = `translateX(${this.translation}px)`;
        this.startX = this.currentX;
    }

    /**
     * Called when the user presses a key.
     * It moves to the previous or next card when the left or right arrow keys are pressed.
     * 
     * @param event The keydown event
     * @returns {void}
     */
    handleKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft') {
            this.updateCardPositions(this.currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            this.updateCardPositions(this.currentIndex + 1);
        }
    }

    /**
     * Called when the user stops dragging the carousel.
     * It computes the index of the card that is currently nearest to the center and moves to that card.
     * There is little logic to separate click and mouseup events; three booleans are used to keep track of the state.
     * 
     * @returns {void}
     */
    handleMouseup() {
        this.isMouseDown = false;
        if (!this.isDragging) return;
        this.isDragging = false;
        this.justFinishedDragging = true;
        this.carousel.classList.remove('duration-0');
        this.carousel.classList.add('duration-300');
        this.style.cursor = 'grab';

        // Compute the index of the card that is currently nearest to the center
        const cardWidth = this.cards[0].offsetWidth;
        const diff = Math.round((this.offset - this.translation) / (cardWidth + this.gap));
        this.updateCardPositions(diff);
    }

    /**
     * Called when the window is resized.
     * It recalculates the offset to center the cards.
     * 
     * @returns {void}
     */
    handleResize() {
        this.offset = this.carousel.getBoundingClientRect().width/2 - (this.cards[0].offsetWidth + this.gap)/2; // Calculate the offset to center the cards
        this.updateCardPositions(this.currentIndex);
    }

    /**
     * Updates the positions of the cards.
     * It moves the card at the given index to the center and scales it up.
     * 
     * @param target The index of the card to move to
     */
    updateCardPositions(target: number) {
        if (target < 0) {
            target = this.cards.length - 1; // Wrap to the last card when reaching the beginning
        } else if (target >= this.cards.length) {
            target = 0; // Wrap to the first card when reaching the end
        }
        
        const diff = this.startIndex - target;
        const cardWidth = this.cards[0].offsetWidth;

        this.cards[this.currentIndex].style.transform = 'scale(1)';
        this.translation = diff * (cardWidth + this.gap) + this.offset;
        this.carousel.style.transform = `translateX(${this.translation}px)`;
        this.cards[target].style.transform = 'scale(1.25)';
        this.currentIndex = target;
    }
}