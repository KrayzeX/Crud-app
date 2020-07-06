(ns dbcore
  (:require [hikari-cp.core :refer :all]
            [clojure.java.jdbc :as j]
            [mount.core :refer [defstate]]))

(def datasource-options {:pool-name "hssys-pool"
                         :adapter "postgresql"
                         :server-name "localhost"
                         :port-number 5466
                         :username "hssys_admin"
                         :password "qwerty"
                         :database-name "hssys_db"})

(defonce datasource
  (delay (make-datasource datasource-options)))

(defn query [req]
  (j/with-db-connection [conn {:datasource @datasource}]
    (j/query conn req)))

(defn first-query [req]
  (j/with-db-connection [conn {:datasource @datasource}]
    (first (j/query conn req))))

(defn exec [req]
  (j/with-db-connection [conn {:datasource @datasource}]
    (j/execute! conn req)))
