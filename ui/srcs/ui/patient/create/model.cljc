(ns ui.patient.create.model
  (:require
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [clojure.string :as str]))

(rf/reg-event-fx
 ::set-value
 (fn [{db :db} [_ path value]]
   {:db (assoc-in db path value)}))

(rf/reg-event-fx
 ::success-create
 (fn [{db :db} [_]]
   {:dispatch [::redirect/redirect {:uri "/"}]}))

(rf/reg-event-fx
 :patient/create
 (fn [{db :db} [_]]
   {:db (-> db
             (assoc-in [:form-values :surname] "")
             (assoc-in [:form-values :name] "")
             (assoc-in [:form-values :middle-name] "")
             (assoc-in [:form-values :birth-date] "")
             (assoc-in [:form-values :gender] "")
             (assoc-in [:form-values :policy-number] "")
             (assoc-in [:form-values :patient-id] "")
             (assoc-in [:form-values :country] "")
             (assoc-in [:form-values :city] "")
             (assoc-in [:form-values :street] "")
             (assoc-in [:form-values :index] ""))}))

(rf/reg-sub
 :patient/create
 (fn [db]
   (:form-values db)))

(rf/reg-event-fx
 ::set-option
 (fn [{db :db} [_ value]]
   {:db (assoc-in db [:form-values :gender] value)}))

(rf/reg-event-fx
 ::create-patient
 (fn [{db :db} [_]]
   (let [params-to-back (:form-values db)]
     {:dispatch [:xhr/fetch {:uri "http://localhost:8080/patient/new"
                             :body params-to-back
                             :method "PUT"
                             :success {:event ::success-create}
                             :error {:event :flash/danger
                                     :params {:msg "Error while creating a patient!"}}}]})))

(rf/reg-event-fx
 ::cancel
 (fn [{db :db} [_ pid]]
   {:db (dissoc db :form-values)
    :dispatch [::redirect/redirect {:uri "/"}]}))
