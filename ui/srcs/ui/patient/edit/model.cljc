(ns ui.patient.edit.model
  (:require
   [re-frame.core :as rf]
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

