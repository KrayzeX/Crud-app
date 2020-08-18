(ns crud
  (:require
   [dbcore :as db]
   [honeysql.core :as hsql]
   [clojure.string :as str]))

(defn patient-list [request]
  (let [data (db/query ["select * from patient"])]
    {:status 200
     :body {:entry data}}))

(defn patient-read [{{:keys [id]} :route-params :as request}]
  (if-let [data (db/query-first ["select * from patient where id = ?" id])]
    {:status 200
     :body {:entry data}}
    {:status 404
     :body {:message "Patient has not been found!"}}))

(defn patient-update [{body :body :as request}]
  (let [id (str (get-in body ["patient-id"]))
        name (get-in body ["name"])
        family (get-in body ["surname"])
        middle (get-in body ["middle-name"])
        birth (get-in body ["birth-date"])
        gender (get-in body ["gender"])
        policy (get-in body ["policy-number"])
        country (get-in body ["country"])
        city (get-in body ["city"])
        street (get-in body ["street"])
        resource-type "Patient"
        index (get-in body ["index"])
        new-resource {:resource_type "patient"
                      :resource {:name {:first-name name
                                        :surname family
                                        :middle-name middle}
                                 :gender gender
                                 :birth-date birth
                                 :address {:country country
                                           :city city
                                           :street street
                                           :index index}
                                 :policy-number policy
                                 :patient-id id}}
        change-to-db (db/execute ["update patient set resource = ? where id = ?" new-resource id])]
    {:status 201
     :body {:entry {:id id
                    :resource new-resource}}}))

(defn patient-create [{body :body :as request}]
  (let [id (get-in body ["patient-id"])
        name (get-in body ["name"])
        family (get-in body ["surname"])
        middle (get-in body ["middle-name"])
        birth (get-in body ["birth-date"])
        gender (get-in body ["gender"])
        policy (get-in body ["policy-number"])
        country (get-in body ["country"])
        city (get-in body ["city"])
        street (get-in body ["street"])
        resource-type "Patient"
        index (get-in body ["index"])
        new-resource {:resource_type "patient"
                      :resource {:name {:first-name name
                                            :surname family
                                            :middle-name middle}
                                   :gender gender
                                   :birth-date birth
                                   :address {:country country
                                             :city city
                                             :street street
                                             :index index}
                                   :policy-number policy
                                 :patient-id id}}
        new-patient (db/execute ["insert into patient (id, resource_type, resource) values (?, ?, ?)" id resource-type new-resource])]
    {:status 201
     :body {:entry {:id id
                    :resource new-resource}}}))

(defn patient-delete [{{:keys [id]} :route-params :as request}]
  (let [delete-rows (db/execute ["delete from patient where id = ?" id])]
    (if (= 0 delete-rows)
      {:status 404
       :body {:message "Patient with this id hasn't been found"}}
      {:status 200
       :body {:message "ok"}})))

