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

const { myFunction } = require("./callableFunctions/myFunction");


const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.myFunction = myFunction;

// http://127.0.0.1:5001/tutorial-80678/us-central1/helloWorld
exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
