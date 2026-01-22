@@ -0,0 +1,65 @@
// 🔹 Firebase Web v9 (Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// 🔹 Firebase Configuration (GET FROM GNANAPRAKASH)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 🔹 Simulated Login Role
const userRole = "Staff"; // Change to "User" to test

// 🔹 Listen to Each Parking Slot
["slot-1", "slot-2", "slot-3"].forEach(slotId => {
  const slotRef = ref(database, "parking/" + slotId);

  onValue(slotRef, (snapshot) => {
    const data = snapshot.val();
    const slotDiv = document.getElementById(slotId);
    const button = slotDiv.querySelector(".reserve-btn");

    slotDiv.classList.remove("green-bg", "red-bg", "yellow-bg");

    if (data.status === "filled") {
      slotDiv.classList.add("red-bg");
      button.style.display = "none";
    } 
    else if (data.status === "reserved") {
      slotDiv.classList.add("yellow-bg");
      button.style.display = "none";
    } 
    else {
      slotDiv.classList.add("green-bg");
      button.style.display = userRole === "Staff" ? "block" : "none";
    }
  });
});

// 🔹 Reservation Logic (10 Minutes)
window.reserveSlot = function (slotId) {
  const slotRef = ref(database, "parking/" + slotId);

  update(slotRef, {
    status: "reserved",
    reservedAt: Date.now()
  });

  // After 10 minutes → Available
  setTimeout(() => {
    update(slotRef, {
      status: "available"
    });
  }, 600000);
};