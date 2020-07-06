(ns routes
  (:require [route-map.core :as rm]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(def routes {:. :navigation/index
             "error404" {:. :pages/error404}})

(defn href [& parts]
  (let [params (if (map? (last parts)) (last parts) nil)
        parts (if params (butlast parts) parts)
        url (str "/" (str/join "/" (map (fn [x] (if (keyword? x) (name x) (str x))) parts)))]
    (when-not  (route-map/match [:. url] routes)
      (println (str url " is not matches routes")))
    (str "#" url (when params (window-location/gen-query-string params)))))
