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
                :margin-right "15px"
                :background-color "#7BE85E"
                :font-weight "500"
                :width "fit-content"
                :color "#ffffff"
                :line-height "24px"
                :padding "3px 7px"
                :border "1px solid #70AE60"}
      [:&:hover {:cursor "pointer"
                 :background-color "#B4F3A4"}]
      [:&:active {:background-color "#7ACB7A"}]]

     [:.cancel-button {:box-sizing "border-box"
                       :box-shadow "0 0 5px rgba(0,0,0,0.5)"
                       :background-color "#EF5417"
                       :font-weight "500"
                       :width "fit-content"
                       :color "#ffffff"
                       :line-height "24px"
                       :padding "3px 7px"
                       :border "1px solid #9B3107"}
      [:&:hover {:cursor "pointer"
                 :background-color "#F77F4F"}]
      [:&:active {:background-color "#B35C3A"}]]]]))

(defn input [path value]
  [:input {:type "text"
           :value (path @value)
           :on-change #(rf/dispatch [::model/set-value [:form-values path] (-> % .-target .-value)])}])

(defn select [data array]
  (let [current-value (:gender @data)
        on-change (fn [x]
                    (rf/dispatch [::model/set-option (.. x -target -value)]))]
    [:select {:on-change on-change
              :value current-value}
     (for [item array
           :let [key item]]
       [:option
        {:key key :value item}
        item])]))

(defn main-info [m]
  [:div.main-info
   [:div.first
    [:div.input-tittle
     "Surname: "]
    [input :surname m]]
   [:div.second
    [:div.input-tittle
     "First name: "]
    [input :name m]]
   [:div.third
    [:div.input-tittle
     "Middle name: "]
    [input :middle-name m]]
   [:div.fourth
    [:div.input-tittle
     "Birth date: "]
    [input :birth-date m]]])

(defn additional [m]
  [:div.additional
   [:div.first
    [:div.input-tittle
     "Gender: "]
    [select m ["Select gender" "male" "female" "unknown"]]]
   [:div.second
    [:div.input-tittle
     "Policy number: "]
    [input :policy-number m]]
   [:div.third
    [:div.input-tittle
     "Patient id: "]
    [input :patient-id m]]])


(defn address [m]
  [:div.address-info
   [:div.address
    "Address"]
   [:div.first
    [:div "Country:"]
    [input :country m]]
   [:div.second
    [:div "City:"]
    [input :city m]]
   [:div.third
    [:div "Street:"]
    [input :street m]]
   [:div.fourth
    [:div "Index"]
    [input :index m]]])

(defn create-page [data]
  (let [m (rf/subscribe [:patient/create])]
    (fn []
      [:div.page create-stytle
       [:div.tittle
        "New patient"]
       [:div.create
        [main-info m]
        [additional m]
        [address m]]
       [:div.action
        [:div.button
         {:on-click #(rf/dispatch [::model/create-patient])}
         "Create"]
        [:div.cancel-button
         {:on-click #(rf/dispatch [::model/cancel])}
         "Cancel"]]])))

(pages/reg-page :patient/create create-page)
