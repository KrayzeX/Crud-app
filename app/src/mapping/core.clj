(ns mapping.core
  (:require
   [clojure.string :as string]
   [clojure.pprint :as pprint]
   [dbcore :as db]
   [mapping.map :as mp]))

(defn dissoc-in
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn mapping-engine [old-resource change-map]
  (reduce (fn [])
          change-map))

(defn update-resource [{{:keys [id]} :route-params :as request}]
  (let [old-resource (db/query-first ["select * from patient where id = ?" (Integer. id)])
        change-map (:transformations mp/mapping-map)
        new-resource (mapping-engine old-resource change-map)]
    (def old-resource old-resource)
    #_{:status 200
     :body {:entry new-resource}}))

