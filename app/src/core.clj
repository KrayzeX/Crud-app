(ns core
  (:require [clojure.string :as str]
            [org.httpkit.server :as server]
            [clojure.pprint :as pp]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.adapter.jetty :as jetty]
            [route-map.core :as rm]
            [dbcore :refer :all]
            [crud :as crud]))


(def routes
  {"patient" {"search" {:GET crud/patient-list}
              "new" {:GET crud/patient-create}
              [:pid] {:GET crud/patient-read
                      :POST crud/patient-update}}})


(defn dispatch [{meth :request-method uri :uri :as req}]
  (if-let [{handler :match params :params} (rm/match [meth uri] #'routes)]
    (handler (assoc req :route-params params))
    {:status 404 :body "404: page not found!"}))


(defn -main [& args]
  (server/run-server #'dispatch {:port 8080 :join? false})
  (println "WebApp started at port: 8080..."))

(comment

  (jetty/run-jetty #'dispatch {:port 8080 :join? false})


  )
