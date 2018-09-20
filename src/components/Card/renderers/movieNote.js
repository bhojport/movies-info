import React from 'react'

export const movieNote = ({ id, ...rest }) => {
  const { text, status } = rest.movieNote.find(note => note.id === id) || { text: '' }
  const { text: storeText } = rest.storeMovieNote.find(note => note.id === id) || { text: '' }
  return (
    <div>
      {
        storeText && status !== 'edit' &&
        <div className="notes">
          <h3 className="h6">Note:</h3>
          <p className="small">{storeText}</p>
          <div className="form-group">
            <button className="btn btn-primary mb-2" onClick={rest.onEditMovieNote(id, text)}>
              Edit
            </button>
            <button className="btn btn-primary mb-2 ml-2" onClick={rest.onRemoveMovieNote(id)}>
              Remove
            </button>
          </div>
        </div>
      }
      {
        (!storeText || status === 'edit') &&
        <div className="my-2">
          <textarea className="w-100 p-2 small bg-dark text-white border-secondary" placeholder="Type your personal note for this movie..." value={text} onChange={rest.onChangeNote(id, status)}>
          </textarea>
          <button className="btn btn-primary mb-2" onClick={status === 'edit' ? rest.onUpdateMovieNote(id, text) : rest.onAddMovieNote(id, text)}>
            {status === 'edit' ? 'Update Note' : 'Add Note'}
          </button>
        </div>
      }
    </div>
  )
}