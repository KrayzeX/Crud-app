(ns ui.patient.mapping.model
  (:require
   [re-frame.core :as rf]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]
   [clojure.string :as str]))

(rf/reg-event-fx
 :patient/mapping
 (fn [{db :db} [_ phase params]]
   (let [id (:pid params)]
     (cond
       (= :deint phase)
       {}
       (or (= :params phase) (= :init phase))
       {:dispatch [:xhr/fetch {:uri (str "http://localhost:8080/patient/" id)
                               :req-id ::patient-show}]}))))

(rf/reg-sub
 :patient/mapping
 :<- [:xhr/response ::patient-show]
 (fn [{data :data}]
   (:entry data)))

(rf/reg-event-fx
 ::migrate-data
 (fn [{db :db} [_ pid]]
   {:dispatch [:xhr/fetch {}]}))

