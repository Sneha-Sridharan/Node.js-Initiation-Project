const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create Connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "patient"
});

// Read Patient Details
app.get('/patients', (req, res) => {
      con.query("SELECT * FROM patient_details", function (err, result, fields) {
        if (err) 
            console.log("Failed to retrieve documents from database");
        res.json(result);
      });
});

// Read Patient Details whose name is passed as parameter 
app.get('/patients/:name', (req, res) => {
  const patientName = req.params.name;
  const queryString = "SELECT * FROM patient_details WHERE name = ?"
  con.query(queryString, [patientName], (err, result, fields) => {
    if (err) {
      console.log("Failed to get patient details: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

// Delete Patient Details
app.delete('/patients/:name', (req, res) => {
  const patientName = req.params.name;
  const queryString = "DELETE FROM patient_details WHERE name = ?"
  con.query(queryString, [patientName], (err, result, fields) => {
    if (err) {
      console.log("Failed to delete patient details: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

// Read Patient Details whose wallet amount is greater than the value specified in parameter 
app.get('/patients/:amt', (req, res) => {
  const amount = req.params.amt;
  const queryString = "SELECT * FROM patient_details WHERE wallet_amount > ?"
  con.query(queryString, [amount], (err, result, fields) => {
    if (err) {
      console.log("Failed to get patient details: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

// Insert Patient Method 1
app.post('/addPatient', (req, res) => {
  const data = req.body;
  const queryString = "INSERT INTO patient_details VALUES(?,?,?,?,?)"
  con.query(queryString, [data.name, data.age, data.gender, data.phone_no, data.wallet_amount], (err, result, fields) => {
    if (err) {
      console.log("Failed to insert patient record: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

// Insert Patient Method 2
app.post('/addPatient', (req, res) => {
  const queryString = "INSERT INTO patient_details SET ?"
  con.query(queryString, [req.body], (err, result, fields) => {
    if (err) {
      console.log("Failed to insert patient record: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

// Update Patient Details method put
app.put('/updatePatient/:name', (req, res) => {
  const patientName = req.params.name;
  const queryString = "UPDATE patient_details SET age = ?, wallet_amount = ? WHERE name = ?"
  con.query(queryString, [req.body.age, req.body.wallet_amount, patientName], (err, result, fields) => {
    if (err) {
      console.log("Failed to update patient record: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

// Update Patient Details method post
app.post('/updatePatient/:name', (req, res) => {
  const patientName = req.params.name;
  const queryString = "UPDATE patient_details SET age = ?, wallet_amount = ? WHERE name = ?"
  con.query(queryString, [req.body.age, req.body.wallet_amount, patientName], (err, result, fields) => {
    if (err) {
      console.log("Failed to update patient record: " + err)
      res.sendStatus(500)
      return
    }
    res.json(result)
  })
})

app.listen(3000, () => console.log('Listening on port 3000'));