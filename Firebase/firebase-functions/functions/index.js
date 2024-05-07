/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// http://127.0.0.1:4000/functions

const admin = require("firebase-admin");
const {
  myFunction,
  sayHello,
  getFullName,
} = require("./callableFunctions/callableFunctions");
const {
  randomNumber,
  helloWorld,
  toTheDojo,
} = require("./endpointRequestFunctions/endpointRequests");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

// callable functions
exports.myFunction = myFunction;
exports.sayHello = sayHello;
exports.getFullName = getFullName;

// endpoint request functions
exports.helloWorld = helloWorld;
exports.randomNumber = randomNumber;
exports.toTheDojo = toTheDojo;
