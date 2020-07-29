(ns ui.patient.edit.view
  (:require
   [ui.patient.edit.model :as model]
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [reagent.core :as r]
   [clojure.string :as str]
   [ui.pages :as pages]
   [ui.styles :as styles]))

(def edit-stytle
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
                 :background-color "#A8F68B"}]
      [:&:active {:background-color "#65C043"}]]]]))

(defn main-info [{{resource :resource} :resource :as args}]
  (println resource)
  [:div.main-info
   [:div.first
    [:div.input-tittle
     "First name: "]
    [:input.name
     (let [name (get-in resource [:name :first-name])]
       {:value name})]]
   [:div.second
    [:div.input-tittle
     "Surname: "]
    [:input.surname
     (let [family (get-in resource [:name :surname])]
       {:value family})]]
   [:div.third
    [:div.input-tittle
     "Middle name: "]
    [:input.middle
     (let [middle (get-in resource [:name :middle-name])]
       {:value middle})]]
   [:div.fourth
    [:div.input-tittle
     "Birth date: "]
    [:input.birth
     (let [birth (:birth-date resource)]
       {:value birth})]]])

(defn additional [{{resource :resource} :resource :as args}]
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
    [:input.policy
     (let [policy (:policy-number resource)]
       {:value policy})]]
   [:div.third
    [:div.input-tittle
     "Patient id: "]
    [:input.id
     (let [id (:patient-id resource)]
       {:value id})]]])

(defn address [{{resource :resource} :resource :as args}]
  [:div.address-info
   [:div.address
    "Address"]
   [:div.first
    [:div "Country:"]
    [:input.country
     (let [country (get-in resource [:address :country])]
       {:value country})]]
   [:div.second
    [:div "City:"]
    [:input.city
     (let [city (get-in resource [:address :city])]
       {:value city})]]
   [:div.third
    [:div "Street:"]
    [:input.street
     (let [street (get-in resource [:address :street])]
       {:value street})]]
   [:div.fourth
    [:div "Index"]
    [:input.index
     (let [index (get-in resource [:address :index])]
       {:value index})]]])

(defn edit-page [data]
  (let [m (rf/subscribe [:patient/edit])]
    (fn []
      [:div.page edit-stytle
       [:div.tittle
        "Edit patient"]
       [:div.create
        [main-info @m]
        [additional @m]
        [address @m]]
       [:div.action
        [:div.button
         "Save"]]])))

(pages/reg-page :patient/edit edit-page)
