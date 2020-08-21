(ns test.core-test
  (:require [clojure.test :refer :all]
            [dbcore :as db]
            [crud :as crud]
            [clj-http.client :as client]
            [cheshire.core :as json]
            [clojure.string :as str]
            [ring.mock.request :as mock]
            [org.httpkit.client :as http]
            [matcho.core :as matcho]
            [core :as core]))

(deftest patient-read
  (testing "Get patient test"
    (let [responce (crud/patient-read {:route-params {:id "100"}})
          data (db/query-first ["select * from patient where id = '100'"])]
      (matcho/match
       {:status 200
        :body {:entry data}}
       responce))))

(deftest patient-create
  (testing "Create patient test"
    (let [form-values {"patient-id" "000"
                       "name" "test"
                       "surname" "test"
                       "middle-name" "test"
                       "birth-date" "01-01-2001"
                       "gender" "male"
                       "policy-number" "001122334455"
                       "country" "teset"
                       "city" "test"
                       "street" "test"
                       "index" "000111222333"}
          responce (crud/patient-create {:body form-values})
          resource {:resource_type "patient"
                    :resource {:name {:first-name "test"
                                      :surname "test"
                                      :middle-name "test"}
                               :gender "male"
                               :birth-date "01-01-2001"
                               :address {:country "teset"
                                         :city "test"
                                         :street "test"
                                         :index "000111222333"}
                               :policy-number "001122334455"
                               :patient-id "000"}}]
      (matcho/match
       {:status 201
        :body {:entry {:id "000"
                       :resource resource}}}
       responce))))

(deftest patient-delete
  (testing "Delete patient"
    (let [responce (crud/patient-delete {:route-params {:id "000"}})]
      (matcho/match
       {:status 200
        :body {:message "ok"}}
       responce))))

