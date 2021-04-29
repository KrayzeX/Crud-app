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
    [:.tittle {:font-size "28px"
               :text-align "center"
               :font-weight "500"
               :color "#676B6A"
               :margin-top "20px"
               :border-bottom "2px solid grey"
               :margin-bottom "20px"}]

    [:.create {:display "flex"
               :margin-right "auto"
               :margin-left "auto"
               :width "max-content"
               :background-color "#D6E3FC"
               :border-radius "20px"
               :padding "20px 20px 5px 20px"
               :margin-bottom "25px"}
     [:.main-info {:font-size "18px"
                   :font-weight "500"
                   :margin-right "40px"}
      [:.input-group.mb-3 {:width "400px"}]
      [:#main {:width "7.1rem"
               :opacity 0.8
               :background-color "#374156"
               :font-weight "500"
               :color "white"}]
      ;; [:.name {:font-size "14px"
      ;;          :width "250px"}]
      ;; [:.surname {:font-size "14px"
      ;;             :width "250px"}]
      ;; [:.middle {:font-size "14px"
      ;;            :width "250px"}]
      ;; [:.birth {:font-size "14px"
      ;;            :width "130px"}]
      ]

     [:.additional {:font-size "16px"
                    :color "#666666"
                    :margin-right "40px"}
      [:.first {:margin-bottom "15px"}]
      [:.input-group.input-group-sm.mb-3 {}
       [:#inputGroup-sizing-sm {:width "4.2rem"
                                :opacity 0.8
                                :background-color "#374156"
                                :font-weight "500"
                                :color "white"}]]
      ;; [:.first
      ;;  [:.gender
      ;;   [:&:hover {:cursor "pointer"}]]]
      ;; [:.second
      ;;  [:.policy {:font-size "12px"
      ;;             :width "200px"}]]
      ;; [:.third
      ;;  [:.id {:font-size "12px"
      ;;         :width "70px"}]]
      ]

     [:.address-info {:color "#555555"}
      [:.input-group.input-group-sm.mb-3 {}
       [:#inputGroup-sizing-sm {:width "4.2rem"
                                :opacity 0.8
                                :background-color "#374156"
                                :font-weight "500"
                                :color "white"}]]
      ;; [:.address {:font-weight "500"
      ;;             :color "#000000"}]
      ;; [:.first
      ;;  [:.country {:font-size "14px"}]]
      ;; [:.second
      ;;  [:.city {:font-size "14px"}]]
      ;; [:.third
      ;;  [:.street {:font-size "14px"}]]
      ;; [:.fourth
      ;;  [:.index {:font-size "14px"
      ;;            :width "100px"}]]
      ]]

    [:.action {:display "flex"
               :justify-content "center"}
     [:.button {:box-sizing "border-box"
                :box-shadow "0 0 3px rgba(0,37,255,0.5)"
                :margin-right "15px"
                :font-weight "500"
                :width "fit-content"
                :border-radius "8px"
                :color "#0B162B"
                :line-height "24px"
                :padding "3px 7px"
                :border "1px solid #0B162B"}
      [:&:hover {:cursor "pointer"
                 :color "white"
                 :background-color "#5D6F93"}]
      [:&:active {:background-color "#0B162B"}]]

     [:.cancel-button {:box-sizing "border-box"
                       :box-shadow "0 0 3px rgba(255,91,86,0.5)"
                       :font-weight "500"
                       :width "fit-content"
                       :color "#FF3525"
                       :line-height "24px"
                       :padding "3px 7px"
                       :border "1px solid #FF3525"
                       :border-radius "8px"}
      [:&:hover {:cursor "pointer"
                 :color "white"
                 :background-color "#FF9087"}]
      [:&:active {:background-color "#FF685C"}]]]]))

(defn input [path value]
  [:input {:type "text"
           :class "form-control"
           :value (path @value)
           :on-change #(rf/dispatch [::model/set-value [:form-values path] (-> % .-target .-value)])}])

(defn select [data array]
  (let [current-value (:gender @data)
        on-change (fn [x]
                    (rf/dispatch [::model/change-option (.. x -target -value)]))]
    [:select
     {:on-change on-change
      :class "form-control form-control-sm"
      :value current-value}
     (for [item array
           :let [key item]]
       [:option
        {:key key :value item}
        item])]))

(defn main-info [m]
  [:div.main-info
   [:div.input-group.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "main"}
      "Surname"]]
    [input :surname m]]
   [:div.input-group.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "main"}
      "First name"]]
    [input :name m]]
   [:div.input-group.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "main"}
      "Middlename"]]
    [input :middle-name m]]
   [:div.input-group.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "main"}
      "Birth date"]]
    [input :birth-date m]]])

(defn additional [m]
  [:div.additional
   [:div.first
    [select m ["Select gender" "male" "female" "unknown"]]]
   [:div.input-group.input-group-sm.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "inputGroup-sizing-sm"}
      "Policy #"]]
    [input :policy-number m]]])


(defn address [m]
  [:div.address-info
   [:div.input-group.input-group-sm.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "inputGroup-sizing-sm"}
      "Country"]]
    [input :country m]]
   [:div.input-group.input-group-sm.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "inputGroup-sizing-sm"}
      "City"]]
    [input :city m]]
   [:div.input-group.input-group-sm.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "inputGroup-sizing-sm"}
      "Street"]]
    [input :street m]]
   [:div.input-group.input-group-sm.mb-3
    [:div.input-group-prepend
     [:span.input-group-text {:id "inputGroup-sizing-sm"}
      "Index"]]
    [input :index m]]])

(defn edit-page [data]
  (let [m (rf/subscribe [:patient/edit])]
    (fn []
      [:div.page edit-stytle
       [:div.tittle
        "Edit patient"]
       [:div.create
        [main-info m]
        [additional m]
        [address m]]
       [:div.action
        [:div.button
         {:on-click #(rf/dispatch [::model/save-change (:patient-id @m)])}
         "Update"]
        [:div.cancel-button
         {:on-click #(rf/dispatch [::model/cancel (:patient-id @m)])}
         "Cancel"]]])))

(pages/reg-page :patient/edit edit-page)
