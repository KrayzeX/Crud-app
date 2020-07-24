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
      [:&:active {:background-color "#7ACB7A"}]]]

    [:.table {:margin-top "30px"}
     [:.line-info {:display "flex"
                   :box-sizing "border-box"
                   :border "1px solid grey"
                   :border-radius "10px"}
      [:.icon {:margin-right "150px"
               :width "20px"
               :height "20px"}]
      [:.patient-info {:margin-right "100px"}
       [:.main-info {:font-size "20px"
                     :font-weight "bold"}]
       [:.second-info {:display "flex"
                       :color "#666666"}
        [:.birth {:margin-right "15px"}]
        [:.policy-number]]]
      [:.delete ]]]]))

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

(defn part [{{resource :resource} :resource :as args}]
  (println (:gender resource))
  [:div.line-info ^{:key (str (:patient_id resource))}
   [:div.icon
    (if (= (:gender resource) "male")
      [:div.male-icon]
      [:div.female-icon])]
   [:div.patient-info
    [:div.main-info
     (let [firstname (get-in resource [:name :first-name])
           family (get-in resource [:name :surname])
           middlename (get-in resource [:name :middle-name])]
       (str family " " firstname " " middlename))]
    [:div.second-info
     [:div.birth
      (str "Birth date: " (:birth-date resource))]
     [:div.policy-number
      (str "Policy number: " (:policy-number resource))]]]
   [:div.delete
    [:div.delete-icon]]])

(defn patient-list [data]
  [:div.table
   (map
    part
    data)])

(defn patients [data]
  (let [m @(rf/subscribe [:patient/index])]
    (fn []
      [:div.page
       [tittle]
       [page-line]
       [:div.main
        [actions]
        [patient-list m]]])))

(pages/reg-page :patient/index patients)
