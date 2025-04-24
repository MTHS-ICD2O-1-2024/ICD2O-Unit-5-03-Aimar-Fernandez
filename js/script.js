// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

const positiveNumber = 0

function myButtonClicked() {
  const ageNumber = document.getElementById("age-number").value
  if (ageNumber >= 17) {
    document.getElementById("answer").innerHTML = 
      "<p>You can see an R rated movie alone</p>"
  }
  else if (ageNumber >= 13) {
    document.getElementById("answer").innerHTML = 
      "<p>You can go see a PG-13 movie alone</p>"
  }
  else if (ageNumber >= 5) {
    document.getElementById("answer").innerHTML = 
      "<p>You can go see a G or PG movie alone</p>"
  }
  else {
    document.getElementById("answer").innerHTML = 
      "<p>You're too young to watch any movie alone</p>"
  }
}