export const updatePlayerNoteQuery: string =
  `UPDATE user_note_info
    SET note = ($1),
    rating = ($2)
    WHERE id = ($3)
    RETURNING id`;