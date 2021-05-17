(ns mapping.map)

(def mapping-map
  {:transformations
   [
    {:oldPath ["resource" "name" "surname"]
     :op "move"
     :newPath ["resource" "name" "family-name"]}
    {:oldPath []
     :op "add"
     :newPath ["resource" "contact" "phone-number"]}]})
