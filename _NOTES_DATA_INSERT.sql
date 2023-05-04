## Because some tables reference others, I put those first

## Conference
create table conference (
	id SERIAL PRIMARY KEY,
	conference_name VARCHAR(16) NOT NULL
);
insert into conference (
	conference_name
)
values ('West'),
	('East');



## TEAM TABLE
create table team (
	id SERIAL PRIMARY KEY,
	team_name VARCHAR(32) NOT NULL,
	division VARCHAR(16) NOT NULL,
	conference_id INTEGER REFERENCES conference(id) NOT NULL
);

insert into team (
	team_name,
	division,
	conference_id
)
values ('Boston Celtics', 'Atlantic', 2),
	('Philadelhia 76ers', 'Atlantic', 2),
	('New York Knicks', 'Atlantic', 2),
	('Brooklyn Nets', 'Atlantic', 2),
	('Toronto Raptors', 'Atlantic', 2),

	('Milwaukee Bucks', 'Central', 2),
	('Cleveland Cavaliers', 'Central', 2),
	('Chicago Bulls', 'Central', 2),
	('Indiana Pacers', 'Central', 2),
	('Detroit Pistons', 'Central', 2),
	('Atlanta Hawks', 'Southeast', 2),
	('Miami Heat', 'Southeast', 2),
	('Washington Wizards', 'Southeast', 2),
	('Orlando Magic', 'Southeast', 2),
	('Charlotte Hornets', 'Southeast', 2),
	('Denver Nuggets', 'Northwest', 1),
	('Minnesota Timberwolves', 'Northwest', 1),
	('Oklahoma City Thunder', 'Northwest', 1),
	('Utah Jazz', 'Northwest', 1),
	('Portland Trailblazers', 'Northwest', 1),
	('Sacramento Kings', 'Pacific', 1),
	('Phoenix Suns', 'Pacific', 1),
	('LA Clippers', 'Pacific', 1),
	('Golden State Warriors', 'Pacific', 1),
	('Los Angelex Lakers', 'Pacific', 1),
	('Memphis Grizzlies', 'Southwest', 1),
	('New Orleans Pelicans', 'Southwest', 1),
	('Dallas Mavericks', 'Southwest', 1),
	('Houston Rockets', 'Southwest', 1),
	('San Antonio Spurs', 'Southwest', 1);


## USER PERMISSIONS TABLE
create table user_permissions (
	id SERIAL PRIMARY KEY,
	permission VARCHAR(64) NOT NULL
);

insert into user_permissions (
	permission
)
values ('player'),
	('coach'),
	('admin');



## USER TABLE
create table user_note_info (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(64) NOT NULL,
	last_name VARCHAR(64) NOT NULL,
	user_permission INTEGER REFERENCES user_permissions(id) NOT NULL,
	team_id INTEGER REFERENCES team(id) NOT NULL,
	note VARCHAR(128) NOT NULL,
	rating INTEGER,
	create_date DATE NOT NULL
);

insert into user_note_info(
	first_name,
	last_name,
	user_permission,
	team_id,
	note,
	rating,
	create_date
)
values (
	'Stephen',
	'Curry',
	1,
	24,
	'I beat the Kings',
	5,
	NOW()
),
(
	'Ja',
	'Morant',
	1,
	26,
	'I lost to LA',
	4,
	NOW()
),
(
	'Dillon',
	'Brooks',
	1,
	26,
	'I talk too much',
	2,
	NOW()
),
(
	'Steve',
	'Kerr',
	2,
	24,
	'I coach the warriors',
	5,
	NOW()
),
(
	'Bob',
	'Myers',
	3,
	24,
	'I manage the Warriors',
	5,
	NOW()
),
(
	'Joel',
	'Embiid',
	1,
	2,
	'I am MVP',
	5,
	NOW()
),
(
	'Jimmy',
	'Butler',
	1,
	12,
	'I scored 56 points to get into the semi finals',
	5,
	NOW()
);


/**
{
    "first_name": "Giannia",
    "last_name": "Anticoupo",
    "user_permission": 1,
    "team_id": 6,
    "note": "I make a lot of shots. Seriously, for real",
    "rating": 5
}
*/


select 
	use.id as player_id,
	CONCAT(use.first_name, ' ',use.last_name) as name,
	permission.permission as nba_discipline,
	tm.team_name as team_name,
	con.conference_name as conference_name,
	use.rating as rating,
	use.note as note,
	use.create_date as date
from user_note_info as use
left join team as tm
	on use.team_id = tm.id
left join conference as con
	on tm.conference_id = con.id
left join user_permissions as permission
	on use.user_permission = permission.id
where use.id = 2
order by use.id asc;
