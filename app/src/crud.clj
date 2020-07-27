(ns crud
  (:require
   [dbcore :as db]
   [clojure.string :as str]))

(defn patient-list [request]
  (let [data (db/query ["select * from patient"])]
    {:status 200
     :body {:entry data}}))

(defn patient-read [{{:keys [id]} :params :as request}]
  (print request)
  (if-let [data (db/query-first ["select * from patient where id = ?" id])]
    {:status 200
     :body {:entry data}}
    {:status 404
     :body {:message "Patient has not been found!"}}))

(defn patient-update [request])

(defn patient-create [request]
  )

(defn patient-delete [request])

