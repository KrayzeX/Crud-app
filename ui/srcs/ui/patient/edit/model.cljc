(ns ui.patient.edit.model
  (:require
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [clojure.string :as str]))

(rf/reg-event-fx
 ::set-form-value
 (fn [{db :db} [_]] 
   (let [resource (get-in db [:xhr :req :ui.patient.edit.model/patient-show :data :entry :resource :resource])
         name (get-in resource [:name :first-name])
         surname (get-in resource [:name :surname])
         middle (get-in resource [:name :middle-name])
         birth (:birth-date resource)
         gender (:gender resource)
         policy (:policy-number resource)
         id (:patient-id resource)
         country (get-in resource [:address :country])
         city (get-in resource [:address :city])
         street (get-in resource [:address :street])
         index (get-in resource [:address :index])]
     {:db (-> db
              (assoc-in [:form-values :surname] surname)
              (assoc-in [:form-values :name] name)
              (assoc-in [:form-values :middle-name] middle)
              (assoc-in [:form-values :birth-date] birth)
              (assoc-in [:form-values :policy-number] policy)
              (assoc-in [:form-values :patient-id] id)
              (assoc-in [:form-values :country] country)
              (assoc-in [:form-values :city] city)
              (assoc-in [:form-values :street] street)
              (assoc-in [:form-values :index] index)
              (assoc-in [:form-values :gender] gender))})))

(rf/reg-event-fx
 :patient/edit
 (fn [{db :db} [_ phase params]]
   (cond
     (= :deinit phase)
     {}
     (or (= :init phase) (= :params phase))
     {:dispatch [:xhr/fetch {:uri (str "http://localhost:8080/patient/" (:pid params))
                             :req-id ::patient-show
                             :success {:event ::set-form-value}}]})))

(rf/reg-event-fx
 ::success-update
 (fn [{db :db} [_ pid]]
   {:dispatch [::redirect/redirect {:uri (str "/patient/" pid)}]}))

(rf/reg-sub
 :patient/edit
 (fn [db]
   (:form-values db)))

(rf/reg-event-fx
 ::success-update
 (fn [{db :db} [_ {{{:keys [patient-id]} :body} :request :as request}]]
   {:dispatch [::redirect/redirect {:uri (str "/patient/" patient-id)}]}))

(rf/reg-event-fx
 ::change-option
 (fn [{db :db} [_ value]]
   {:db (-> db
            (assoc-in [:form-values :gender] value))}))

(rf/reg-event-fx
 ::save-change
 (fn [{db :db} [_ pid]]
   {:dispatch [:xhr/fetch {:uri (str "http://localhost:8080/patient/" pid)
                           :method "PUT"
                           :body (:form-values db)
                           :success {:event ::success-update}}]}))

(rf/reg-event-fx
 ::set-value
 (fn [{db :db} [_ path value]]
   {:db (assoc-in db path value)}))

(rf/reg-event-fx
 ::cancel
 (fn [{db :db} [_ pid]]
   {:db (dissoc db :form-values)
    :dispatch [::redirect/redirect {:uri (str "/patient/" pid)}]}))
