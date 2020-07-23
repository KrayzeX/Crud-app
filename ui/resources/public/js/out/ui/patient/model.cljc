(ns ui.patient.model
  (:require
   [re-frame.core :as rf]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]
   [clojure.string :as str]))

(rf/reg-event-fx
 :patient/index
 (fn [{db :db} [_ phase params]]
   (cond
     (= :deint phase)
     {}
     (or (= :params phase) (= :init phase))
     {:http-xhrio {:method :get
                   :uri "http://localhost:8080/patient/search"
                   :format (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success [::patient-list]
                   :on-failure []}
      :db (assoc db :loading? true)})))

(rf/reg-sub
 :patient/index
 (fn [{data :data}]
   ))
