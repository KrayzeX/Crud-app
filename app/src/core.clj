(ns core
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]
            [org.httpkit.server :as server]

            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [ring.adapter.jetty :as jetty]

            [route-map.core :as rm]
            [dbcore :refer :all]
            [crud-core :as cc]
            [mapping.core :as mc])
  (:gen-class))

(def routes
  {"patient" {"search" {:GET cc/patient-list
                        [:params] {:GET cc/patient-search}}
              "new" {:PUT cc/patient-create}
              [:id] {:GET cc/patient-read
                     :DELETE cc/patient-delete
                     :PUT cc/patient-update}}
   "mapping" {[:id] {:GET mc/update-resource}}})

(defn dispatch [{meth :request-method uri :uri :as req}]
  (if-let [{handler :match params :params} (rm/match [meth uri] #'routes)]
    (handler (assoc req :route-params params))
    {:status 404 :body "404: page not found!"}))

(defn preflight
  [{meth :request-method hs :headers :as req}]
  (let [headers (get hs "access-control-request-headers")
        origin (get hs "origin")
        meth  (get hs "access-control-request-method")]
    {:status 200
     :headers {"Access-Control-Allow-Headers" headers
               "Access-Control-Allow-Methods" meth
               "Access-Control-Allow-Origin" origin
               "Access-Control-Allow-Credentials" "true"
               "Access-Control-Expose-Headers" "Location, Transaction-Meta, Content-Location, Category, Content-Type, X-total-count"}}))

(defn allow [resp req]
  (println req)
  (let [origin (get-in req [:headers "origin"])]
    (update resp :headers merge
            {"Access-Control-Allow-Origin" origin
             "Access-Control-Allow-Credentials" "true"
             "Access-Control-Expose-Headers" "Location, Content-Location, Category, Content-Type, X-total-count"})))

(defn mk-handler [dispatch]
  (fn [{headers :headers uri :uri :as req}]
    (if (= :options (:request-method req))
      (preflight req)
      (let [resp (dispatch req)]
        (-> resp (allow req))))))

(def app
  (-> dispatch
      mk-handler
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))

(defn -main [& args]
  (server/run-server #'app {:port 8080
                          :join? false})
  (println "WebApp started at port: 8080..."))

(comment
  (defn -main [& args]
    (jetty/run-jetty #'app {:port 8080
                            :join? false})
    (println "WebApp started at port: 8080...")))
