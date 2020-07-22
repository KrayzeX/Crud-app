(ns ui.patient.core
  (:require
   [re-frame.core :as rf]
   [clojure.string :as str]
   [zframes.redirect :as redirect]
   [zframes.debounce :as debounce]
   [ui.patient.model :as model]
   [ui.pages :as pages]
   [ui.styles :as styles]
   [reagent.core :as r]))

(def style
  (styles/style
   [:*
    [:.tittle {:font-size "24px"
               :text-align "center"
               :margin-bottom "20px"}]
    [:.page-tittle {:font-size "22px"
                    :margin-bottom "40px"
                    :text-align "center"}]

    [:.actions {:display "flex"
                :justify-content "space-between"
                :padding-bottom "15px"
                :border-bottom "2px solid #AEADB2"}
     [:.search {:display "flex"}
      [:.search-form {:width "450px"
                      :height "30px"
                      :border-radius "5px"
                      :margin-right "15px"}]]

     [:.create {:box-sizing "border-box"
                :box-shadow "0 0 5px rgba(0,0,0,0.5)"
                :background-color "#7BE85E"
                :font-weight "500"
                :color "#ffffff"
                :line-height "24px"
                :padding "3px 7px"
                :border "1px solid #70AE60"}
      [:&:hover {:cursor "pointer"
                 :background-color "#B4F3A4"}]
      [:&:active {:background-color "#7ACB7A"}]]]]))

(defn tittle []
  [:div.tittle style
   "Test CRUD application"])

(defn page-line []
  [:div.page-tittle
   "Patients list"])

(defn actions []
  [:div.actions
   [:div.search
    [:input.search-form {:type "text"
                         :placeholder "Search..."}]]
   [:div.create
    {:on-click #(rf/dispatch [::redirect/redirect {:uri "/patient/create"}])}
    "Create +"]])

(defn patient-list [m]
  )

(defn patients [data]
  (let [m (rf/subscribe [:patient/index])]
    [:div.page
     [tittle]
     [page-line]
     [:div.main
      [actions]
      [patient-list]]]))

(pages/reg-page :patient/index patients)
