(ns ui.pages
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]))

(defonce pages (atom {}))

(defn reg-page [key page]
  (swap! pages assoc key page))

;; (defn subscribed-page [page-idx view]
;;   (fn [params]
;;     (let [m (rf/subscribe [page-idx])]
;;       (fn [] [view @m params]))))

;; (defn reg-subs-page
;;   [key f & [layout-key]]
;;   (swap! pages assoc key (subscribed-page key f)))
