(ns ui.patient.mapping.core
  (:require
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [zframes.debounce :as debounce]
   [zframes.redirect :as redirect]
   [ui.patient.mapping.model :as model]
   [ui.pages :as pages]
   [ui.styles :as styles]))

(def style
  (styles/style
   [:.container {:min-width "100%"}
    [:.tittle {:font-size "28px"
               :text-align "center"
               :margin-top "20px"
               :color "#676B6A"
               :font-weight "500"
               :border-bottom "2px solid grey"
               :margin-bottom "20px"}]
    [:.block-button {:height "fit-content"
                     :padding "3px 7px"
                     :margin-bottom "15px"
                     :background-color "#FFFFFF"
                     :box-shadow "0 0 3px rgba(0,37,255,0.5)"
                     :font-weight "500"
                     :border-radius "8px"
                     :color "#0B162B"
                     :width "fit-content"
                     :box-sizing "border-box"
                     :border "1px solid #0B162B"}
     [:&:hover {:cursor "pointer"
                :background-color "#D6E3FC"}]
     [:&:active {:background-color "#586E92"
                 :color "#FFFFFF"}]]
    [:.mapping-block {:border-radius "15px"
                      :background-color "#D6E3FC"
                      :padding "20px"
                      :display "flex"
                      :justify-content "space-between"}
     [:.data-block {:margin "0 20px 0 20px"}
      [:.block-title {:font-size "18px"
                      :text-align "center"
                      :margin-bottom "15px"
                      :color "#383F4D"
                      :font-weight 500}]
      [:.json-block {:width "550px"
                     :margin-bottom "20px"
                     :min-height "480px"
                     :background-color "#ffffff"}]]
     [:.button {:height "fit-content"
                :padding "3px 7px"
                :margin-top "auto"
                :margin-bottom "auto"
                :background-color "#FFFFFF"
                :box-shadow "0 0 3px rgba(0,37,255,0.5)"
                :font-weight "500"
                :border-radius "8px"
                :color "#0B162B"
                :width "fit-content"
                :box-sizing "border-box"
                :border "1px solid #0B162B"}
      [:&:hover {:cursor "pointer"
                 :color "#FFFFFF"
                 :background-color "#5D6F93"}]
      [:&:active {:background-color "#0B162B"}]]]]))

(defn button-back [args]
  [:div.block-button
   {:on-click #(rf/dispatch [::redirect/redirect {:uri (str "/patient/" (:id args))}])}
   "Back"])

(defn mapping [{resource :resource :as args} {new-resource :resource :as args}]
  (let [pid (get-in resource [:resource :patient-id])]
    [:div.mapping-block
     [:div.data-block
      [:div.block-title
       "Old version resource"]
      [:pre.json-block
       (js/JSON.stringify (clj->js resource) nil 2)]]
     [:div.button
      {:on-click #(rf/dispatch [::model/migrate-data pid])}
      "Migrate ->"]
     [:div.data-block
      [:div.block-title
       "New version resource"]
      [:pre.json-block
       (js/JSON.stringify (clj->js new-resource) nil 2)]]]))

(defn patient-mapping [data]
  (let [m (rf/subscribe [:patient/mapping])
        n (rf/subscribe [:mapping/result])]
    (fn []
      [:div.container style
       [:div.tittle
        "Mapping"]
       [button-back @m]
       [mapping @m @n]])))

(pages/reg-page :patient/mapping patient-mapping)
