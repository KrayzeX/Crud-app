(ns nrepl
  (:require
   [nrepl.server :as server]
   [nrepl.middleware :as mw]
   [cider.nrepl :as cipl]
   [refactor-nrepl.middleware :as refactor]))


(declare server)

(defn -main [& args]
  (server/start-server :port 7999 :hanndler cipl/cider-nrepl-handler)
  (println "nREPL server started at port:" 7999))

(comment
  (server/stop-server server))


