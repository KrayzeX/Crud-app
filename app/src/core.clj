(ns core
  (:require [clojure.string :as str]
            [org.httpkit.server :as server]
            [clojure.pprint :as pp]

            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors   :refer [wrap-cors]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [ring.adapter.jetty :as jetty]

            [route-map.core :as rm]
            [dbcore :refer :all]
            [crud :as crud]))

(def routes
  {"patient" {"search" {:GET crud/patient-list
                        [:params] {:GET crud/patient-search}}
              "new" {:PUT crud/patient-create}
              [:id] {:GET crud/patient-read
                     :DELETE crud/patient-delete
                     :PUT crud/patient-update}}
   "mapping" {:GET nil}
   "analytic" {:GET nil}})

(defn allow-access [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
          (assoc-in [:headers "Access-Control-Allow-Headers"] "*")
          (assoc-in [:headers "Access-control-Allow-Methods"] "*")))))

(def app
  (-> routes
      allow-access
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))


(defn -main [& args]
  (server/run-server #'app {:port 8080 :join? false})
  (println "WebApp started at port: 8080..."))

(comment
  (jetty/run-jetty #'dispatch {:port 8080 :join? false}))
