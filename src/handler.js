/* eslint-disable no-undef */
/* eslint-disable indent */

const { nanoid } = require('nanoid');

// eslint-disable-next-line no-unused-vars
const addNoteHandler = (request, h) => {
    // eslint-disable-next-line no-unused-vars
    const { title, tags, body } = request.payload;

    // eslint-disable-next-line no-unused-vars
    const id = nanoid(16);

    const createdAt = new Date().toISOString();
    // eslint-disable-next-line no-unused-vars
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,

    };

    notes.push(newNote);

};