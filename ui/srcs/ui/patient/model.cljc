(ns ui.patient.model
  (:require
   [re-frame.core :as rf]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]
   [clojure.string :as str]))

(rf/reg-event-fx
 :patient/get
 (fn [{db :db} [_]]
   {:xhr/fetch {:uri "http://localhost:8080/patient/search"
                :req-id ::patient-list}
    :db (assoc db :loading? true)}))

(rf/reg-event-fx
 :patient/index
 (fn [{db :db} [_ phase params]]
   (cond
     (= :deint phase)
     {}
     (or (= :params phase) (= :init phase))
     {:dispatch [:patient/get]})))

(rf/reg-sub
 :patient/index
 :<- [:xhr/response ::patient-list]
 (fn [{data :data}]
   (:entry data)))

(rf/reg-event-fx
 ::patient-search
 (fn [{db :db} [_ value]]
   {:xhr/fetch {:uri (str "http://localhost:8080/patient/search/" value)
                :req-id ::patient-list}}))

(rf/reg-event-fx
 :patient/show
 (fn [{db :db} [_ phase params]]
   (let [id (:pid params)]
     (cond
       (= :deint phase)
       {}
       (or (= :params phase) (= :init phase))
       {:dispatch [:xhr/fetch {:uri (str "http://localhost:8080/patient/" id)
                               :req-id ::patient-show}]}))))

(rf/reg-sub
 :patient/show
 :<- [:xhr/response ::patient-show]
 (fn [{data :data}]
   (:entry data)))

(rf/reg-event-fx
 ::success-delete
 (fn [{db :db} [_]]
   {:dispatch [:patient/get]}))

(rf/reg-event-fx
 ::delete-patient
 (fn [{db :db} [_ id]]
     {:xhr/fetch {:uri (str "http://localhost:8080/patient/" id)
                  :method "DELETE"
                  :success {:event ::success-delete}}}))
