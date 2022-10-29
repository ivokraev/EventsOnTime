"use strict";
exports.__esModule = true;
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
var lite_1 = require("firebase/firestore/lite");
var firebaseConfig = {
    apiKey: "AIzaSyCh6brjG63-oe1CmqY9uf3hfOizmeIGW0g",
    authDomain: "events-on-time.firebaseapp.com",
    projectId: "events-on-time",
    storageBucket: "events-on-time.appspot.com",
    messagingSenderId: "478256429739",
    appId: "1:478256429739:web:7c46d3652e59a9f2d655ee",
    measurementId: "G-3P2CD8BK32"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, lite_1.getFirestore)(app);
var analytics = (0, analytics_1.getAnalytics)(app);
