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

(defn map-res [old changes]
  (let [old-path (:oldPath changes)
        value-to-save (get-in old old-path)
        new-path (:newPath changes)
        operation (:op changes)]
    (case operation
      "add" (-> old
                (assoc-in new-path ""))
      "move" (-> old
                 (assoc-in new-path value-to-save)
                 (dissoc-in old-path)))))

(defn mapping-engine [old-resource change-map]
  (reduce map-res
          old-resource
          change-map))

(defn update-resource [{{:keys [id]} :route-params :as request}]
  (let [old-resource (db/query-first ["select * from patient where id = ?" (Integer. id)])
        change-map (:transformations mp/mapping-map)
        new-resource (mapping-engine old-resource change-map)]
    {:status 200
     :body {:entry new-resource}}))
