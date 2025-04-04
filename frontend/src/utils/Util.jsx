/**
 * Delays execution for the specified number of milliseconds.
 * @param {number} ms - Duration to wait (in milliseconds).
 * @returns {Promise<void>}
 */
export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
