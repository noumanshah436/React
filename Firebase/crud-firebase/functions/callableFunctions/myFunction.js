const functions = require("firebase-functions");
const admin = require("firebase-admin");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

exports.myFunction = functions
  .runWith({ timeoutSeconds: 540 })
  .https.onCall(async (data, context) => {

    if (!data) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing required fields"
      );
    }

    // try {
    return {
      success: true,
    };
    // } catch (error) {
    //   console.error("Error calling Function: ", error);
    //   throw new functions.https.HttpsError("internal", "Internal server error");
    // }
  });
