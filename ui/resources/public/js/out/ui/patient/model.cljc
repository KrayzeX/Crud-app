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
     {:xhr/fetch {:uri "http://localhost:8080/patient/search"
                  :req-id ::patient-list}
      :db (assoc db :loading? true)})))

(rf/reg-sub
 :patient/index
 :<- [:xhr/response ::patient-list]
 (fn [{data :data}]
   (:entry data)))



(rf/reg-event-fx
 :patient/show
 (fn [{db :db} [pid phase params]]))
