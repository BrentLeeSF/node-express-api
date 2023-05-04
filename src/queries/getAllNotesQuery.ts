export const getAllNotesQuery: string =
  `SELECT
    use.id AS player_id,
    CONCAT(use.first_name, ' ',use.last_name) AS name,
    permission.permission AS nba_discipline,
    tm.team_name AS team_name,
    con.conference_name AS conference_name,
    use.rating AS rating,
    use.note AS note,
    use.create_date AS date
  FROM user_note_info AS use
  LEFT JOIN team AS tm
    ON use.team_id = tm.id
  LEFT JOIN conference AS con
    ON tm.conference_id = con.id
  LEFT JOIN user_permissions AS permission
    ON use.user_permission = permission.id `;
