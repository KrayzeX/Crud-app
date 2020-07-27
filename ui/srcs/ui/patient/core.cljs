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
                   :margin-bottom "2px"
                   :box-sizing "border-box"
                   :border "1px solid grey"
                   :border-radius "10px"}
      [:.icon {:margin-right "15px"}
       [:.ic {:width "45px"
              :height "45px"
              :margin-top "4px"
              :margin-left "15px"}]]
      [:.patient-info {:margin-right "190px"}
       [:.main-info {:font-size "20px"
                     :font-weight "bold"}
        [:&:hover {:cursor "pointer"
                   :text-decoration "underline"}]]
       [:.second-info {:display "flex"
                       :color "#666666"}
        [:.birth {:margin-right "15px"}]
        [:.policy-number]]]
      [:.delete
       [:&:hover {:cursor "pointer"}]
       [:.delete-icon {:width "30px"
                       :height "30px"
                       :margin-top "12px"}]]]]]))

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
  [:div.line-info ^{:key (str (:patient_id resource))}
   (if (= (:gender resource) "male")
     [:div.icon
      [:img.ic {:src "person.svg"}]]
     [:div.icon
      [:img.ic {:src "woman.svg"}]])
   [:div.patient-info
    [:div.main-info
     {:on-click #(rf/dispatch [::redirect/redirect {:uri (str "/patient/" (:id args))}])}
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
    {:on-click #(rf/dispatch [::model/delete-patient (:id args) ::redirect/redirect])}
    [:img.delete-icon {:src "trash.svg"}]]])

(defn patient-list [data]
  [:div.table
   (map
    part
    data)])

(defn patients [data]
  (let [m (rf/subscribe [:patient/index])]
    (fn []
      [:div.page
       [tittle]
       [page-line]
       [:div.main
        [actions]
        [patient-list @m]]])))

(def card-style
  (styles/style
   [:*
    [:.edit-action {:display "flex"
                    :border-bottom "2px solid #AEADB2"
                    :justify-content "flex-end"
                    :margin-bottom "20px"}
     [:.edit {:height "30px"
              :padding "2px 7px"
              :box-shadow "0 0 5px rgba(0,0,0,0.5)"
              :font-weight "500"
              :margin-bottom "15px"
              :color "white"
              :background-color "#FFCC73"
              :width "fit-content"
              :box-sizing "border-box"
              :border "1px solid #FFA200"}
      [:&:hover {:cursor "pointer"
                 :background-color "#Fdd896"}]
      [:&:active {:background-color "#FFBA40"}]]]
    [:.card {:box-sizing "border-box"
             :border-radius "15px"
             :border "2px solid grey"}
     [:.patient {:display "flex"}
      [:.photo {:margin "15px 15px 15px 15px"
                :box-sizing "border-box"
                :border "2px solid grey"
                :border-radius "5px"
                :padding "3px 0 0 0"}
       [:.icon {:width "100px"
                :height "100px"}]]]
     [:.information {:margin-top "15px"}
      [:.first {:font-size "24px"
                :font-weight "500"}]
      [:.second {:display "flex"
                 :color "#666666"}
       [:.birth {:padding-right "15px"}]]
      [:.third {:font-size "18px"}]
      [:.fourth {:color "#555555"}]]]]))

(defn card-action [args]
  [:div.edit-action
     [:div.edit
      {:on-click #(rf/dispatch [::redirect/redirect {:uri (str"/patient/" (:id args) "/edit")}])}
      "Edit"]])

(defn patient-card [{{resource :resource} :resource :as args}]
  [:div.patient
   [:div.photo
    (if (= "male" (:gender resource))
      [:img.icon {:src "person.svg"}]
      [:img.icon {:src "woman.svg"}])]
   [:div.information
    [:div.first
     (let [name (get-in resource [:name :first-name])
           family (get-in resource [:name :surname])
           middle (get-in resource [:name :middle-name])]
       (str family " " name " " middle))]
    [:div.second
     [:div.birth
      (str "Birth date: " (:birth-date resource))]
     [:div.gender
      (str "Gender: " (:gender resource))]]
    [:div.third
     (str "Policy: " (:policy-number resource))]
    [:div.fourth
     (let [country (get-in resource [:address :country])
           city (get-in resource [:address :city])
           street (get-in resource [:address :street])
           index (get-in resource [:address :index])]
       (str "Patient address: " country ", " city ", " street ", " index))]]])

(defn patient-show [data]
  (let [m (rf/subscribe [:patient/show])]
    (fn []
      [:div.page
       [card-action @m]
       [:div.card card-style
        [patient-card @m]]])))

(pages/reg-page :patient/index patients)
(pages/reg-page :patient/show patient-show)
