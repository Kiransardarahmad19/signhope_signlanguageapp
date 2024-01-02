// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var email = getElementVal("email");
  var msgContent = getElementVal("msgContent");
  saveMessage(name, email, msgContent);
  console.log(name, email, msgContent);
}

const saveMessage = (name, email, msgContent) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
      name: name,
      email: email,
      msgContent: msgContent
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
