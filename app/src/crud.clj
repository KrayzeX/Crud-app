(ns crud
  (:require
   [dbcore :as db]
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
  (let [patient-id (get-in body [:route-params :id])
        old-patient (db/query-first ["select resource from patient where id =?" patient-id])]
    ))

(defn patient-create [request]
  )

(defn patient-delete [{{:keys [id]} :route-params :as request}]
  (let [delete-rows (db/execute ["delete from patient where id = ?" id])]
    (if (= 0 delete-rows)
      {:status 404
       :body {:message "Patient with this id hasn't been found"}}
      {:status 200
       :body {:message "ok"}})))

