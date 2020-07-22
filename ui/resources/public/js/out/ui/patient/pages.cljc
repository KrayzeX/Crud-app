(ns ui.patient.pages
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]))

(defonce pages (atom {}))

(defn reg-page [key page]
  (swap! pages assoc key page))
