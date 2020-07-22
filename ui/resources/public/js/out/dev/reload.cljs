(ns ^:figwheel-hooks dev.reload
  (:require
   [ui.core :as ui]))

(defn ^:after-load re-render []
  (ui/mount-root))

