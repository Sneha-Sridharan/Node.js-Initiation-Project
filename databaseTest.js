var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "patient"
});

// Create Database
con.connect(function(err) {
  if (err) 
    console.log("Connection Failed");
  con.query("CREATE DATABASE patient", function (err, result, fields) {
    if (err) 
      console.log("Failed to create database");
    console.log("Database created successfully");
  });
});

// Create Table
con.connect(function(err) {
  if (err) 
    console.log("Connection Failed");
  con.query("CREATE TABLE patient_details(name VARCHAR(50) PRIMARY KEY, age INT, gender VARCHAR(10), phone_no BIGINT, wallet_amount INT)", function (err, result, fields) {
    if (err) 
      console.log("Failed to retrieve documents from database");
    console.log(result);
  });
});

// Insert Patient
con.connect(function(err) {
  if (err) 
    console.log("Connection Failed");
  con.query("INSERT INTO patient_details value('Aparna', 44, 'Female', 9384544138, 15000)", function (err, result, fields) {
    if (err) 
      console.log("Failed to retrieve documents from database");
    console.log(result);
  });
});

// Read Patient Details
con.connect(function(err) {
  if (err) 
    console.log("Connection Failed");
  con.query("SELECT * FROM patient_details", function (err, result, fields) {
    if (err) 
      console.log("Failed to retrieve documents from database");
    console.log(result);
  });
});

// Update Patient Details
con.connect(function(err) {
  if (err) 
    console.log("Connection Failed");
  con.query("UPDATE patient_details SET age=23 WHERE name='Sneha'", function (err, result, fields) {
    if (err) 
      console.log("Failed to retrieve documents from database");
    console.log(result);
  });
});


// Delete Patient
con.connect(function(err) {
  if (err) 
    console.log("Connection Failed");
  con.query("DELETE FROM patient_details WHERE name='Sneha'", function (err, result, fields) {
    if (err) 
      console.log("Failed to retrieve documents from database");
    console.log(result);
  });
});