const functions = require("firebase-functions");
const admin = require("firebase-admin");

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate((user) => {
  console.log("user created: ", user.email, user.uid);

  // for background triggers you must return a value/promise
  return admin.firestore().collection("users").doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log("user deleted: ", user.email, user.uid);

  const doc = admin.firestore().collection("users").doc(user.uid);
  return doc.delete();
});
