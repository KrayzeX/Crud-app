(ns dbcore
  (:require [hikari-cp.core :refer :all]
            [clojure.java.jdbc :as j]
            [clj-postgresql.core :as pg]
            [mount.core :refer [defstate]]
            [manifest :as m]))

;; (def datasource-options {:pool-name "hssys-pool"
;;                          :adapter "postgresql"
;;                          :server-name "localhost"
;;                          :port-number 5466
;;                          :username "hssys_admin"
;;                          :password "qwerty"
;;                          :database-name "hssys_db"})

;; (defonce datasource
;;   (delay (make-datasource datasource-options)))

;; (defn query [req]
;;   (j/with-db-connection [conn {:datasource @datasource}]
;;     (j/query conn req)))

;; (defn first-query [req]
;;   (j/with-db-connection [conn {:datasource @datasource}]
;;     (first (j/query conn req))))

;; (defn exec [req]
;;   (j/with-db-connection [conn {:datasource @datasource}]
;;     (j/execute! conn req)))

(def pool-config (delay (pg/pool :host     (get-in m/db-config [:db :host])
                                 :port     (get-in m/db-config [:db :port])
                                 :user     (get-in m/db-config [:db :user])
                                 :password (get-in m/db-config [:db :password])
                                 :dbname   (get-in m/db-config [:db :dbname])
                                 :hikari {:read-only true})))

(defn query [req]
  (j/query @pool-config req))

(defn query-first [req]
  (-> (j/query @pool-config req)
      first))

(defn execute [req]
  (j/execute! @pool-config req))
