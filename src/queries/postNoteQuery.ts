export const postPlayerNoteQuery: string =
    `INSERT INTO user_note_info (
        first_name,
        last_name,
        user_permission,
        team_id,
        note,
        rating,
        create_date
    )
    VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        NOW()
    ) RETURNING id`;
