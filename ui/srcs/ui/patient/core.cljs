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
    [:.tittle {:padding "20px 0"
               :color "#676B6A"
               :text-align "center"
               :font-size "28px"
               :font-weight "500"}]

    [:.actions {:display "flex"
                :padding-bottom "15px"
                :border-bottom "2px solid #AEADB2"}
     [:.input-group.mb-3 {:width "700px"}]
     [:#basic-addon1 {:color "white"
                      :font-weight "500"
                      :opacity 0.8
                      :background-color "#374156"}]

     [:.create {:margin-left "600px"
                :box-sizing "border-box"
                :text-align "center"
                :box-shadow "0 0 3px rgba(0,37,255,0.5)"
                :font-weight "500"
                :color "#0B162B"
                :width "70px"
                :height "37px"
                :line-height "28px"
                :padding "3px 7px"
                :border "1px solid #0B162B"
                :border-radius "8px"}
      [:&:hover {:cursor "pointer"
                 :color "white"
                 :background-color "#5D6F93"}]
      [:&:active {:background-color "#0B162B"}]]]

    [:.table {:margin-top "30px"}
     [:.line-info {:display "flex"
                   :justify-content "space-between"
                   :margin-bottom "2px"
                   :background-color "#D6E3FC"
                   :box-sizing "border-box"
                   :border "1px solid #374156"
                   :border-radius "10px"}
      [:.icon-main {:display "flex"}
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
         [:.policy-number]]]]
      [:.delete {:margin-right "25px"
                 :background-color "white"
                 :border-radius "30px"}
       [:&:hover {:cursor "pointer"}]
       [:.delete-icon {:width "30px"
                       :height "30px"
                       :margin-top "12px"}]]]]]))

(defn tittle []
  [:div.tittle style
   "Visualization and analysis of FHIR standart mapping"])

(defn actions []
  [:div.actions
   [:div.input-group.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "basic-addon1"}
      "Patient"]]
    [:input {:type "text"
             :class "form-control"
             :placeholder "Search..."
             :on-change #(rf/dispatch [::model/patient-search (-> % .-target .-value)])}]]
   [:div.create
    {:on-click #(rf/dispatch [::redirect/redirect {:uri "/patient/create"}])}
    "New"]])

(defn part [{{resource :resource} :resource :as args}]
  [:div.line-info
   [:div.icon-main
    (cond
      (= (:gender resource) "male")
      [:div.icon
       [:img.ic {:src "person.svg"}]]
      (= (:gender resource) "female")
      [:div.icon
       [:img.ic {:src "woman.svg"}]]
      :else
      [:div.icon
       [:img.ic {:src "unknown.svg"}]])
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
       (str "Policy number: " (:policy-number resource))]]]]
   [:div.delete
    {:on-click #(rf/dispatch [::model/delete-patient (:id args)])}
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
       [:div.main
        [actions]
        [patient-list @m]]])))

(def card-style
  (styles/style
   [:*
    [:.edit-action {:display "flex"
                    :border-bottom "2px solid #AEADB2"
                    :justify-content "space-between"
                    :margin "20px 0"}
     [:.back {:box-sizing "border-box"
              :box-shadow "0 0 3px rgba(0,37,255,0.5)"
              :margin-right "15px"
              :font-weight "500"
              :width "fit-content"
              :height "fit-content"
              :border-radius "8px"
              :color "#0B162B"
              :line-height "24px"
              :padding "3px 7px"
              :border "1px solid #0B162B"}
      [:&:hover {:cursor "pointer"
                 :color "white"
                 :background-color "#5D6F93"}]
      [:&:active {:background-color "#0B162B"}]]
     [:.edit {:height "fit-content"
              :padding "3px 7px"
              :box-shadow "0 0 5px rgba(0,0,0,0.5)"
              :font-weight "500"
              :border-radius "8px"
              :margin-bottom "15px"
              :margin-right "10px"
              :color "#FFA200"
              :width "fit-content"
              :box-sizing "border-box"
              :border "1px solid #FFA200"}
      [:&:hover {:cursor "pointer"
                 :color "#FFFFFF"
                 :background-color "#FDD896"}]
      [:&:active {:background-color "#FFA200"}]]]
    [:.card {:border-radius "15px"}
     [:.patient {:display "flex"
                 :background-color "#D6E3FC"
                 :border-radius "15px"}
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
   [:div.back
    {:on-click #(rf/dispatch [::redirect/redirect {:uri "/"}])}
    "To list"]
   [:div.edit
    {:on-click #(rf/dispatch [::redirect/redirect {:uri (str"/patient/" (:id args) "/edit")}])}
    "Edit"]])

(defn patient-card [{{resource :resource} :resource :as args}]
  [:div.patient
   [:div.photo
    (cond
      (= "male" (:gender resource))
      [:img.icon {:src "person.svg"}]
      (= "female" (:gender resource))
      [:img.icon {:src "woman.svg"}]
      :else
      [:img.icon {:src "unknown.svg"}])]
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
