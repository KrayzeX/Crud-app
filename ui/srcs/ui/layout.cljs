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
                   :background-color "#0B162B"}
     [:.navigation-actions {:padding-top "15px"}
      [:.button {:color "white"
                 :font-weight "500"
                 :margin-bottom "10px"}
       [:&:hover {:cursor "pointer"
                  :background-color "#374156"}]]]]
    [:.content {:padding-left "30px"
                :width "92vw"}]]))

(defn navigation []
  [:div.navigation
   [:div.navigation-actions
    [:div.button
     {:on-click #(rf/dispatch [::redirect/redirect {:uri "/"}])}
     "Home"]
    [:div.button
     {:on-click #(rf/dispatch [::redirect/redirect {:uri "/patient/create"}])}
     "Create"]
    [:div.button
     {:on-click #(rf/dispatch [::redirect/redirect {:uri "/mapping"}])}
     "Mapping"]
    [:div.button
     {:on-click #(rf/dispatch [::redirect/redirect {:uri "/analytic"}])}
     "Analytic"]]])

(defn layout [page]
  [:div.layout layout-style
   [navigation]
   [:div.content
    page]])

