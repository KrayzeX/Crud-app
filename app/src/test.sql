---- db: -h localhost -p 5466 -U hssys_admin hssys_db
select 1
----
create table if not exists patient (
       id integer not null,
       resource_type text,
       resource json not null)
----
insert into patient (id, resource_type, resource)
       values ('101', 'Patient', '{"resource_type": "patient",
                                   "resource": {"name": {"first-name": "Ksenia",
                                                         "surname": "Gromova",
                                                         "middle-name": "Dmitrievna"},
                                                "gender": "female",
                                                "birth-date": "16-07-1999",
                                                "address": {"country": "Russia",
                                                            "city": "Saint-Petersburg",
                                                            "street": "Red Street, 24",
                                                            "index": 190108},
                                                "policy-number": 6151991102159625,
                                                "patient-id": 101}}')
----
insert into patient (id, resource_type, resource)
values ('100', 'Patient', '{"resource_type": "patient",
"resource": {"name": {"first-name": "Alexey",
"surname": "Miller",
"middle-name": "Olegovich"},
"gender": "male",
"birth-date": "08-05-1987",
"address": {"country": "Russia",
"city": "Saint-Petersburg",
"street": "Red Street, 24",
"index": 190098},
"policy-number": 6641982122662068,
"patient-id": 100}}')
----
select * from patient
----
delete from patient where id = '101'
----
