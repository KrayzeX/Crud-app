(ns pages.routes
  (:require [route-map.core :as rm]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(def routes {:. :navigation/index
             "error404" {:. :pages}})

