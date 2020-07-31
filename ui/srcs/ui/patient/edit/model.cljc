(ns ui.patient.edit.model
  (:require
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [clojure.string :as str]))


(rf/reg-event-fx
 :patient/edit
 (fn [{db :db} [_ phase params]]
   (cond
     (= :deinit phase)
     {}
     (or (= :init phase) (= :params phase))
     {:dispatch [:xhr/fetch {:uri (str "http://localhost:8080/patient/" (:pid params))
                             :req-id ::patient-show}]})))

(rf/reg-sub
 :patient/edit
 :<- [:xhr/response ::patient-show]
 (fn [{data :data}]
   (:entry data)))

(rf/reg-event-fx
 ::save-change
 (fn [{db :db} [_ phase params]]
   (println (keys db))
   {:dispatch [:xhr/fetch {:uri (str "http://localhost:8080/patient/" (:pid params))
                           :method "PUT"
                           :success {:event [::redirect/redirect {:uri (str "/patient/" (:pid params))}]}}]}))

(rf/reg-event-fx
 ::set-value
 (fn [{db :db} [_ path value]]
   {:db (assoc-in db path value)}))
