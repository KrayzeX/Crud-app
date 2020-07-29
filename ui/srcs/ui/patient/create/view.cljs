(ns ui.patient.create.view
  (:require
   [ui.patient.create.model :as model]
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [reagent.core :as r]
   [clojure.string :as str]
   [ui.pages :as pages]
   [ui.styles :as styles]))

(def create-stytle
  (styles/style
   [:*
    [:.tittle {:font-size "32px"
               :font-weight "500"
               :border-bottom "2px solid grey"
               :margin-bottom "20px"}]

    [:.create {:display "flex"
               :margin-bottom "15px"}
     [:.main-info {:font-size "18px"
                   :font-weight "500"
                   :margin-right "40px"}
      [:.name {:font-size "14px"
               :width "250px"}]
      [:.surname {:font-size "14px"
                  :width "250px"}]
      [:.middle {:font-size "14px"
                 :width "250px"}]
      [:.birth {:font-size "14px"
                 :width "130px"}]]

     [:.additional {:font-size "16px"
                    :color "#666666"
                    :margin-right "40px"}
      [:.first
       [:.gender
        [:&:hover {:cursor "pointer"}]]]
      [:.second
       [:.policy {:font-size "12px"
                  :width "200px"}]]
      [:.third
       [:.id {:font-size "12px"
              :width "70px"}]]]

     [:.address-info {:color "#555555"}
      [:.address {:font-weight "500"
                  :color "#000000"}]
      [:.first
       [:.country {:font-size "14px"}]]
      [:.second
       [:.city {:font-size "14px"}]]
      [:.third
       [:.street {:font-size "14px"}]]
      [:.fourth
       [:.index {:font-size "14px"
                 :width "100px"}]]]]

    [:.action {:display "flex"
               :justify-content "center"}
     [:.button {:box-sizing "border-box"
                :box-shadow "0 0 5px rgba(0,0,0,0.5)"
                :background-color "#7BE85E"
                :font-weight "500"
                :width "fit-content"
                :color "#ffffff"
                :line-height "24px"
                :padding "3px 7px"
                :border "1px solid #70AE60"}
      [:&:hover {:cursor "pointer"
                 :background-color "#B4F3A4"}]
      [:&:active {:background-color "#7ACB7A"}]]]]))

(defn main-info []
  [:div.main-info
   [:div.first
    [:div.input-tittle
     "First name: "]
    [:input.name]]
   [:div.second
    [:div.input-tittle
     "Surname: "]
    [:input.surname]]
   [:div.third
    [:div.input-tittle
     "Middle name: "]
    [:input.middle]]
   [:div.fourth
    [:div.input-tittle
     "Birth date: "]
    [:input.birth]]])

(defn additional []
  [:div.additional
   [:div.first
    [:div.input-tittle
     "Gender: "]
    [:select.gender
     [:option
      "male"]
     [:option
      "female"]]]
   [:div.second
    [:div.input-tittle
     "Policy number: "]
    [:input.policy]]
   [:div.third
    [:div.input-tittle
     "Patient id: "]
    [:input.id]]])

(defn address []
  [:div.address-info
   [:div.address
    "Address"]
   [:div.first
    [:div "Country:"]
    [:input.country]]
   [:div.second
    [:div "City:"]
    [:input.city]]
   [:div.third
    [:div "Street:"]
    [:input.street]]
   [:div.fourth
    [:div "Index"]
    [:input.index]]])

(defn patient-create [data]
  (let [m (assoc {} :hi "hi")]
    (fn []
      [:div.page create-stytle
       [:div.tittle
        "New patient"]
       [:div.create
        [main-info]
        [additional]
        [address]]
       [:div.action
        [:div.button
         "Create"]]])))

(pages/reg-page :patient/create patient-create)
