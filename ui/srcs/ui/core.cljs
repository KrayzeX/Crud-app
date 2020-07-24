(ns ui.core
  (:require
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom :as rdom]

   [zframes.xhr]
   [zframes.redirect :as redirect]
   [zframes.routing]

   [ui.layout :as layout]
   [ui.pages :as pages]
   [ui.routes :as routes]

   [ui.patient.core]))

(rf/reg-event-fx
 ::initialize
 (fn [{db :db} _]
   {:db (-> db
            (assoc :route-map/routes routes/routes))
    :route-map/start {}}))

(defn not-found-page []
  [:h1 "Page not found!"])

(defn not-found-component [page]
  [:div.not-found
   (str "Component not found: " page)])

(defn current-page []
  (let [{page :match params :params href :href} @(rf/subscribe [:route-map/current-route])
        cmp (get @pages/pages page)
        params (assoc params
                      :href href
                      :context {}
                      :route page)]
    (cond
      (and page cmp)
      [layout/layout [cmp params]]
      (and page (not cmp))
      [not-found-component page]
      :else
      [not-found-page])))

(defn mount-root []
  (rdom/render
   [current-page]
   (js/document.getElementById "ui")))

(defn init! []
  (rf/dispatch-sync [::initialize])
  (mount-root))
