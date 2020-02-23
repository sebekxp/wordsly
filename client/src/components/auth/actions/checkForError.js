export const checkForError = response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
};