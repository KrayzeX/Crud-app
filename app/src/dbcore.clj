(ns dbcore
  (:require [hikari-cp.core :refer :all]
            [clojure.java.jdbc :as j]
            [clj-postgresql.core :as pg]
            [manifest :as m]))

(def pool-config (delay (pg/pool :host     (get-in m/db-config [:db :host])
                                 :port     (get-in m/db-config [:db :port])
                                 :user     (get-in m/db-config [:db :user])
                                 :password (get-in m/db-config [:db :password])
                                 :dbname   (get-in m/db-config [:db :dbname])
                                 :hikari {:read-only true})))

(def test-config (delay (pg/pool :host (get-in m/db-config [:db :host])
                                 :port (get-in m/db-config [:db :port])
                                 :user (get-in m/db-config [:db :user])
                                 :password (get-in m/db-config [:db :password])
                                 :dbname "test_db"
                                 :hikari {:read-only true})))

(defn query [req]
  (j/query @pool-config req))

(defn query-first [req]
  (-> (j/query @pool-config req)
      first))

(defn execute [req]
  (j/execute! @pool-config req))

(defn query-test [request]
  (j/query @test-config request))

(defn query-first-test [request]
  (-> (j/query @test-config request)
      first))

(defn execute-test [request]
  (j/execute! @test-config request))
