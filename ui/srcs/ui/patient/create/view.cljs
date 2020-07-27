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
                   :margin-right "200px"}
      [:.name {:font-size "14px"
               :width "250px"}]
      [:.surname {:font-size "14px"
                  :width "250px"}]
      [:.middle {:font-size "14px"
                 :width "250px"}]
      [:.birth {:font-size "14px"
                 :width "130px"}]]
     [:.additional {:font-size "16px"
                    :color "#666666"}
      [:.first
       [:.gender
        [:&:hover {:cursor "pointer"}]]]]]
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

(defn patient-create [data]
  (let [m (assoc {} :hi "hi")]
    (fn []
      [:div.page create-stytle
       [:div.tittle
        "New patient"]
       [:div.create
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
          [:input.birth]]]
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
          [:input]]
         [:div.third
          [:div.input-tittle
           "Patient id: "]
          [:input]]
         [:div.fourth
          [:div.input-tittle
           "Address: "]
          [:input]]]]
       [:div.action
        [:div.button
         "Create"]]])))

(pages/reg-page :patient/create patient-create)
