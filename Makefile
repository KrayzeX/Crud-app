shell = bash

PGUSER = hssys_admin
PGPASSWORD = qwerty
PGPORT = 5466
PGHOST = localhost
PGDATABASE = hssys_db


.EXPORT_ALL_VARIABLES:

config:
				docker-compose config

up:
				docker-compose up -d

down:
				docker-compose down

start:
				make up
				clj -A:backclj:dev -m "start"

figwheel:
				clj -A:frontclj:figwheel -m "figwheel.main" -b "dev"

repl:
				make up
				clj -A:backclj:dev -m "nrepl"

psql:
				docker exec -it hssys psql hssys_db hssys_admin
