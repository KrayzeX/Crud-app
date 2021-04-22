(ns ui.layout
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [zframes.redirect :as redirect]
   [garden.core :as garden]
   [ui.styles :as styles]))

(def layout-style
  (styles/style
   [:.layout {:display :flex
              :width "100vw"}
    [:.navigation {:width "85px"
                   :text-align "center"
                   :height "100vh"
                   :background-color "#374156"}
     [:.navigation-actions {:padding-top "15px"}
      [:.button {:background-color "white"
                 :padding "6px"
                 :margin-left "22px"
                 :margin-bottom "10px"
                 :border-radius "25px"
                 :width "max-content"}
       [:&:hover {:cursor "pointer"
                  :background-color "#D6E3FC"}]
       [:&:active {:background-color "#586E92"}]]]]
    [:.content {:padding-left "30px"
                :width "92vw"}]]))

(defn navigation []
  [:div.navigation
   [:div.navigation-actions
    [:div.button
     [:div.home-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/"}])}]]
    [:div.button
     [:div.plus-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/patient/create"}])}]]
    [:div.button
     [:div.map-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/mapping"}])}]]
    [:div.button
     [:div.analytic-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/analytic"}])}]]]])

(defn layout [page]
  [:div.layout layout-style
   [navigation]
   [:div.content
    page]])

