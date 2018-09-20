export const modifyNote = (note, id, text, type) => {
  // Remove note
  if (typeof text === 'undefined') {
    return note.filter((n) => n.id !== id)
  }

  const noteIndex = note.findIndex((n) => n.id === id)
  const updatedNote = { id, text }
  // Add note
  if (type === 'add') {
    return [
      ...note,
      updatedNote
    ]
  }
  // Edit note (Set note status to edit, don't confuse with update)
  if (type === 'edit') {
    const noteStatus = { id, text, status: 'edit' }
    return [
      ...note.slice(0, noteIndex),
      noteStatus,
      ...note.slice(noteIndex + 1)
    ]
  }
  // Update note
  return [
    ...note.slice(0, noteIndex),
    updatedNote,
    ...note.slice(noteIndex + 1)
  ]
}