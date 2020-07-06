(ns pages.error404
  (:require [garden.core :as garden]
            [garden.units :as u]
            [hiccup.core :as hc]))

(def styles)

(def error-404-page
  (html [:head "Oops!"]
        [:body
         [:div.er "404"]
         [:div.mg "Don't worry, the page cannot answer your call. Even pages need a vacation!"]]))

