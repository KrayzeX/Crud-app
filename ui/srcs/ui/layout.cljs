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
                   :height "100vh"
                   :background-color "#374156"}
     [:.nav-line {:display "flex"
                  :position "relative"
                  :justify-content "center"
                  :margin-top "15px"}
      [:.nav-button {:background-color "white"
                     :padding "6px"
                     :border-radius "25px"}
       [:&:hover {:cursor "pointer"
                  :background-color "#D6E3FC"}]
       [:&:active {:background-color "#586E92"}]]
      [:.button-popover {:visibility "hidden"
                         :width "max-content"
                         :text-align "center"
                         :font-size "14px"
                         :top "8px"
                         :left "80%"
                         :background-color "white"
                         :padding "3px 2px"
                         :border-radius "3px"
                         :position "absolute"
                         :z-index "1"
                         :box-sizing "border-box"
                         :border "1px solid black"}]
      [:&:hover
       [:.button-popover {:visibility "visible"}]]]]
    [:.content {:padding-left "30px"
                :width "92vw"}]]))

(defn navigation []
  [:div.navigation
   [:div.nav-line
    [:div.nav-button
     [:div.home-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/"}])}]]
    [:div.button-popover
     "Home page"]]
   [:div.nav-line
    [:div.nav-button
     [:div.plus-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/patient/create"}])}]]
    [:div.button-popover
     "Create"]]
   [:div.nav-line
    [:div.nav-button
     [:div.map-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/mapping"}])}]]
    [:div.button-popover
     "Mapping"]]
   [:div.nav-line
    [:div.nav-button
     [:div.analytic-icon
      {:on-click #(rf/dispatch [::redirect/redirect {:uri "/analytic"}])}]]
    [:div.button-popover
     "Analytic"]]])

(defn layout [page]
  [:div.layout layout-style
   [navigation]
   [:div.content
    page]])

