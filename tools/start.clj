(ns start
  (:require
   [nrepl :as n]
   [core :as app]))

(defn -main [& args]
  (n/-main)
  (app/-main))


