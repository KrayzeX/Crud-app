(ns core
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]

            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [ring.adapter.jetty :as jetty]

            [compojure.core :refer :all]
            [compojure.route :as route]
            [dbcore :refer :all]
            [crud-core :as cc])
  (:gen-class))

(defroutes app-routes
  (context "/patient" []
           (GET "/search" [] cc/patient-list)
           (GET "/:params" [params :as request] (cc/patient-search request))
           (PUT "/new" [] cc/patient-create)
           (context "/:id" [id]
                    (GET "/" request cc/patient-read)
                    (DELETE "/" request (cc/patient-delete request))
                    (PUT "/" request (cc/patient-update request)))))

;; (defn allow-access [handler]
;;   (fn [request]
;;     (let [response (handler request)]
;;       (-> response
;;           (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
;;           (assoc-in [:headers "Access-Control-Allow-Headers"] "*")
;;           (assoc-in [:headers "Access-Control-Allow-Methods"] "*")))))

(def app
  (-> app-routes
   wrap-json-body
   wrap-params
   wrap-json-response
   wrap-reload
   (wrap-defaults api-defaults)
   (wrap-cors
    :access-control-allow-origin #".*"
    :access-control-allow-headers #{"*"}
    :access-control-allow-methods [:get :put :options :delete])))

(defn -main [& args]
  (jetty/run-jetty #'app {:port 8080
                          :join? false})
  (println "WebApp started at port: 8080..."))
