(ns core
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]

            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [ring.adapter.jetty :as jetty]

            [route-map.core :as rm]
            ;; [compojure.core :refer :all]
            ;; [compojure.route :as route]
            [dbcore :refer :all]
            [crud-core :as cc])
  (:gen-class))

(def routes
  {"patient" {"search" {:GET cc/patient-list
                        [:params] {:GET cc/patient-search}}
              "new" {:PUT cc/patient-create}
              [:id] {:GET cc/patient-read
                     :DELETE cc/patient-delete
                     :PUT cc/patient-update}}})

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

#_(defroutes app-routes
  (context "/patient" []
           (GET "/search" [] cc/patient-list)
           (GET "/:params" [params :as request] (cc/patient-search request))
           (PUT "/new" [] cc/patient-create)
           (context "/:id" [id]
                    (GET "/" [] cc/patient-read)
                    (DELETE "/" cc/patient-delete)
                    (PUT "/" cc/patient-update))))

#_(defroutes app-routes
  (GET "/patient/search" [] cc/patient-list)
  (GET "/patient/:id" [id] (cc/patient-read id)))

;; (defn preflight [{req-meth :request-method hs :headers :as request}]
;;   (do
;;     (def request request)
;;     (let [headers (get hs "access-control-request-headers")
;;           origin (get hs "origin")
;;           method (get hs "access-control-request-method")]
;;       {:status 200
;;        :headers {"Access-Control-Allow-Headers" headers
;;                  "Access-Control-Allow-Methods" method
;;                  "Access-Control-Allow-Origin" origin
;;                  "Access-Control-Allow-Credentials" "true"
;;                  "Access-Control-Expose-Headers" "Location, Transaction-Meta, Content-Location, Category, Content-Type, X-total-count"}})))

;; (defn allow [response request]
;;   (def response response)
;;   (def request request)
;;   (let [origin (get-in request [:headers "origin"])]
;;     (def origin origin)
;;     (update-in response [:headers]
;;                merge {"Access-Control-Allow-Origin" origin
;;                       "Access-Control-Allow-Credentials" "true"
;;                       "Access-Control-Expose-Headers" "Location, Content-Location, Category, Content-Type, X-total-count"})))

;; (defn allow-cors [handler]
;;   (fn [{req-meth :request-method hs :headers :as request}]
;;     (if (= :options req-meth)
;;       (preflight request)
;;       (let [response (handler request)]
;;         (-> response
;;             (allow request))))))

(def app
  (-> dispatch
      mk-handler
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))

(defn -main [& args]
  (jetty/run-jetty #'app {:port 8080
                          :join? false})
  (println "WebApp started at port: 8080..."))
