export const convertToDate = (dateString) => {
    // Create a Date object from the ISO 8601 string
    const date = new Date(dateString);

    // Extract year, month, and day
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, '0');

    // Format as yyyy-mm-dd
    return `${year}-${month}-${day}`;
};
