// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

const positiveNumber = 0

function myButtonClicked() {
  const positiveNumber = document.getElementById("positive-option").checked
  if (positiveNumber==true) {
    const randomNumber = Math.floor(Math.random() * 6) + 1
  } 
  else {
    const randomNumber = Math.floor(Math.random() * -6) + 1
  }
  document.getElementById("answer").innerHTML = 
    "<p>The random number is: </p>" + randomNumber + "</p>"
}