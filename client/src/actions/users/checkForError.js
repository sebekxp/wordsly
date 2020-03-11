export const checkForError = response => {
    if (!response.ok) throw new Error('Error during updating user preferences');
    return response.json();
};
