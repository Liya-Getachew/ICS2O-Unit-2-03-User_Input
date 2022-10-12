// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 12th 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name and shows it back to user.
 */
function enterButtonClicked() {
    // input
    const streetNumber = document.getElementById("street-number").value
    const streetName = parseInt(document.getElementById("street-name").value)

    // output
    document.getElementById("address").innerHTML = "Your address is: " + streetNumber + streetName + "."
}