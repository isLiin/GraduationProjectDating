const express = require("express");
const app = express();
const sql = require("mssql");

var CONFIG_DB = {
  user: "sa",
  password: "@adliin",
  server: "localhost",
  database: "dattingloves",
  trustServerCertificate: true
};

app.get("/allAccount", function (req, res) {
  sql.connect(CONFIG_DB, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();

    /**
     *  Query db
     * @augments recordSet db return values
     */
    request.query(`select * from Account`, function (err, recordSet) {
      if (err) console.log(err);
      res.send(recordSet);
    });
  });
});

/**
 * Open Server
 */
const POST = process.env.POST || 8080;
app.listen(POST, console.log(`Server open post:  ${POST}`));
