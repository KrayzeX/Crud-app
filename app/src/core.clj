(ns core
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]

            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors   :refer [wrap-cors]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [ring.adapter.jetty :as jetty]

            [compojure.core :refer :all]
            [compojure.route :as route]
            [dbcore :refer :all]
            [crud :as crud])
  (:gen-class))


(defroutes app-routes
  (GET "/patient/search" [] crud/patient-list)
  (GET "/patient/:params" [] crud/patient-search)
  (PUT "/patient/new" [] crud/patient-create)
  (GET "/patient/:id" [id] (crud/patient-read id))
  (DELETE "/patient/:id" [] crud/patient-delete)
  (PUT "/patient/:id" [] crud/patient-update))

(defn allow-access [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
          (assoc-in [:headers "Access-Control-Allow-Headers"] "*")
          (assoc-in [:headers "Access-Control-Allow-Methods"] "*")))))


(def app
  (-> app-routes
      allow-access
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))


(defn -main [& args]
  (jetty/run-jetty #'app {:port 8080
                          :join? false})
  (println "WebApp started at port: 8080..."))
