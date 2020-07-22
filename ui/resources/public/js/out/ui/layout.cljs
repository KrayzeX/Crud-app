(ns ui.layout
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [garden.core :as garden]
   [ui.styles :as styles]))

(def layout-style
  (styles/style
   [:.layout {:margin "40px 400px 40px 120px"
              :position "fixed"
              :width "800px"}]))

(defn layout [page]
  [:div.layout layout-style
   page])

