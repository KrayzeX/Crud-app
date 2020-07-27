(ns ui.layout
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [garden.core :as garden]
   [ui.styles :as styles]))

(def layout-style
  (styles/style
   [:.layout {:margin "40px 400px 40px 200px"
              :position "fixed"
              :width "750px"}]))

(defn layout [page]
  [:div.layout layout-style
   page])

