---- db: -h localhost -p 5466 -U hssys_admin hssys_db
select 1
----
insert into patient (id, resource_type, resource)
       values ('100', 'Patient', '{"resource_type": "patient",
                                   "resource": {"name": {"first-name": "Alexey",
                                                         "surname": "Gusarov",
                                                         "middle-name": "Olegovich"},
                                                "gender": "male",
                                                "birth-date": "21-05-1987",
                                                "address": {"country": "Russia",
                                                            "city": "Saint-Petersburg",
                                                            "street": "Pobeda Street, 17",
                                                            "index": 190098},
                                                "policy-number": 1821999092201324,
                                                "patient-id": 100}}')
----
select * from patient
----
delete from patient where id = '101'
----
