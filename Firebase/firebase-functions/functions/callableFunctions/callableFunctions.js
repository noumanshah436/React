const functions = require("firebase-functions");
const { onCall, HttpsError } = require("firebase-functions/v2/https");

exports.sayHello = functions.https.onCall((data, context) => {
  return "Hello world";
});

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

exports.getFullName = onCall((request) => {
  const firstName = request.data.firstName;
  const lastName = request.data.lastName;
  console.log(request.auth);
  // const auth = request.auth;

  // Authentication / user information is automatically added to the request.
  // const uid = request.auth.uid;
  // const name = request.auth.token.name || null;
  // const picture = request.auth.token.picture || null;
  // const email = request.auth.token.email || null;

  return {
     fullName: `${firstName} ${lastName}`,
  };
});
