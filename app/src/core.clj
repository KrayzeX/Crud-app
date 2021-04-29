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
                    (GET "/" [] cc/patient-read)
                    (DELETE "/" [] cc/patient-delete)
                    (PUT "/" [] cc/patient-update))))

(defn preflight [{req-meth :request-method hs :headers :as request}]
  (do
    (def request request)
    (let [headers (get hs "access-control-request-headers")
          origin (get hs "origin")
          method (get hs "access-control-request-method")]
      {:status 200
       :headers {"Access-Control-Allow-Headers" headers
                 "Access-Control-Allow-Methods" method
                 "Access-Control-Allow-Origin" origin
                 "Access-Control-Allow-Credentials" "true"
                 "Access-Control-Expose-Headers" "Location, Transaction-Meta, Content-Location, Category, Content-Type, X-total-count"}})))

(defn allow [response request]
  (def response response)
  (def request request)
  (let [origin (get-in request [:headers "origin"])]
    (def origin origin)
    (update-in response [:headers]
               merge {"Access-Control-Allow-Origin" origin
                      "Access-Control-Allow-Credentials" "true"
                      "Access-Control-Expose-Headers" "Location, Content-Location, Category, Content-Type, X-total-count"})))

(defn allow-cors [handler]
  (fn [{req-meth :request-method hs :headers :as request}]
    (if (= :options req-meth)
      (preflight request)
      (let [response (handler request)]
        (-> response
            (allow request))))))

(def app
  (-> app-routes
      allow-cors
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))

(defn -main [& args]
  (jetty/run-jetty #'app {:port 8080
                          :join? false})
  (println "WebApp started at port: 8080..."))
