(ns ui.styles
  (:require
   [garden.core :as garden]))

(defn style [& styles]
  [:style (garden/css styles)])

