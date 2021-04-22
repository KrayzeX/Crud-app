(ns ui.routes
  (:require
   [reagent.core :as rf]
   [re-frame.db :as db]
   [route-map.core :as rm]))

(def routes
  {:. :patient/index
   "patient" {"create" {:. :patient/create}
              [:pid] {:. :patient/show
                      "edit" {:. :patient/edit}}}
   "analytic" {:. :mapping/analytic}
   "mapping" {:. :patient/mapping}})
