const express = require("express")
const mysql = require("mysql")
const cors = require('cors')


const app = express()
app.use(cors())

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userform"
})

app.post('/form', (req, res) => {
    const name = req.body.name;
    const address = req.body.address;

    const sqlInsertName = "INSERT INTO user (name) VALUES (?)";
    const sqlInsertAddress = "INSERT INTO address (address) VALUES (?)";

    db.beginTransaction((err) => {
        if (err) {
            return res.json("Error");
        }

        db.query(sqlInsertName, [name], (err, nameResult) => {
            if (err) {
                db.rollback(() => {
                    return res.json("Error");
                });
            }

            db.query(sqlInsertAddress, [address], (err, addressResult) => {
                if (err) {
                    db.rollback(() => {
                        return res.json("Error");
                    });
                }

                db.commit((err) => {
                    if (err) {
                        db.rollback(() => {
                            return res.json("Error");
                        });
                    }
                    return res.json({ name: nameResult, address: addressResult });
                });
            });
        });
    });
});


app.listen(8081, () => {
    console.log("Listening");
})