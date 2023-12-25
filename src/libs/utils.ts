/**
 * Debounce function to limit rate at which a function can fire.
 * 
 * @param func - The function to be debounced.
 * @param delay - The delay in milliseconds before the function is executed.
 * @returns The debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: number;

    // The returned function will be executed when the debounced function is called.
    return function (this: any, ...args: Parameters<T>): void {
        // Clear the previous timeout to prevent the function from executing
        clearTimeout(timeoutId);

        // Set a new timeout to delay the execution of the function
        timeoutId = setTimeout(() => {
            // Call the original function with the provided arguments
            func.apply(this, args);
        }, delay);
    };
}