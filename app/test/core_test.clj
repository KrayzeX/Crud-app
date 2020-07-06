(ns test.core-test
  (:require [clojure.test :refer :all]
            [route-map.core :as rm]
            [clojure.string :as str]
            [org.httpkit.client :as http]
            [matcho.core :as matcho]
            [core :as core]))

(deftest test-pathify
  (is (rm/pathify "/") [])
  (is (rm/pathify "/patient/") ["patient"])
  (is (rm/pathify "patient/") ["patient"])
  (is (rm/pathify "patient") ["patient"])
  (is (rm/pathify "patient/new") ["patient" "new"]))

(deftest test-all-patients
  (testing "Response status"
    (is (http/get ) {:status 200}))
  (testing "Among of patients"))
