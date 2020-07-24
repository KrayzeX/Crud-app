(ns crud
  (:require
   [dbcore :as db]
   [clojure.string :as str]))

(defn patient-list [request]
  (let [data (db/query ["select * from patient"])]
    {:status 200
     :body {:entry data}}))

(defn patient-read [request]
  (let [pid (:params request)
        data (db/query ["select * from patient where id = ?" pid])]
    {:status 200
     :body data}))

(defn patient-update [request])

(defn patient-create [request]
  )

(defn patient-delete [request])

