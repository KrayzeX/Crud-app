---- db: -h localhost -p 5466 -U hssys_admin hssys_db
select 1
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
select * from patient
----
delete from patient where id = '101'
----
