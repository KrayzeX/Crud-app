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
     {:xhr/fetch {:uri "/patient/search"
                  :params {:search-query (if (get-in params [:params :q])
                                           (str/replace (get-in params [:params :q]) #" " "%20")
                                           "%20")}
                  :req-id ::patient-list}})))

(rf/reg-sub
 :patient/index
 :<- [:xhr/response ::patients-search]
 (fn [{data :data}]
   ))
