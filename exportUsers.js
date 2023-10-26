const fs = require("fs");
const admin = require("firebase-admin");

// Import the service account key
const serviceAccount = require("./serviceAccountKey.json");

// Initialize the Firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function listAllUsers(nextUid = null) {
  let allUsers = [];

  try {
    const listUsersResult = nextUid
      ? await admin.auth().listUsers(1000, nextUid)
      : await admin.auth().listUsers(1000);

    listUsersResult.users.forEach((userRecord) => {
      const userData = userRecord.toJSON();
      allUsers.push({
        uid: userData.uid,
        email: userData.email,
      });
    });

    if (allUsers.length === 1000) {
      // If we've received the maximum users for one page, use the last user's UID as the starting point for the next batch.
      const nextPageUsers = await listAllUsers(allUsers[999].uid);
      allUsers = allUsers.concat(nextPageUsers);
    }

    return allUsers;
  } catch (error) {
    console.error("Error listing users:", error);
    throw error;
  }
}

(async function exportUsers() {
  try {
    const users = await listAllUsers();
    const header = ["UID", "Email"];
    const csvContent = users
      .map((user) => `${user.uid},${user.email}`)
      .join("\n");

    fs.writeFileSync(
      "firebase_users.csv",
      header.join(",") + "\n" + csvContent
    );
    console.log("Users exported successfully!");
  } catch (error) {
    console.error("Failed to export users:", error);
  }
})();
