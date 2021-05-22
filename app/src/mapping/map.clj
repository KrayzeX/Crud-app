(ns mapping.map)

(def mapping-map
  {:transformations
   [
    {:oldPath [:resource "resource" "name" "surname"]
     :op "move"
     :newPath [:resource "resource" "name" "family-name"]}
    {:oldPath []
     :op "add"
     :newPath [:resource "resource" "contact" "phone-number"]}]})
