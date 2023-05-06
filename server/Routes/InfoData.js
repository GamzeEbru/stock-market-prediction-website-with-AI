  const express = require('express');
  const mysql = require('mysql2');

  const cors = require('cors');
  const app = express();

  app.use(cors({
    origin: '*'
  }));
  

  const connectionuser = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bitirme'
  });

  const connectiondata = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bitirme_data'
  });

  const connectionpiyasa = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bitirme_piyasa'
  });



  connectiondata.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
  });

  app.get("/tables/:tableName", (req, res) => {
    const tableName = req.params.tableName;
    const realTableName = `tbl_${tableName}`;

    connectiondata.query(`SELECT * FROM ${realTableName}`, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return;
      }
      
      // Verileri JSON formatında gönder
      res.send(JSON.stringify(results));
    });
  });


  app.get('/tables', (req, res) => {
    connectiondata.query('SHOW TABLES', (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
      }
      
      const tableNames = results.map(result => result[`Tables_in_${connectiondata.config.database}`]);
      const lastValues = {};
      let remainingQueries = tableNames.length;

      tableNames.forEach(tableName => {
        connectiondata.query(`SELECT Açılış FROM ${tableName} ORDER BY Tarih DESC LIMIT 1`, (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).send('Internal server error');
          }

          lastValues[tableName] = results[0].Açılış;

          remainingQueries--;
          if (remainingQueries === 0) {
            
            const lastValuesArray = [];
            tableNames.forEach(tableName => {
              const lastValueObj = {
                tableName: tableName,
                lastValue: lastValues[tableName]
              };
              lastValuesArray.push(lastValueObj);
            });
            res.send(lastValuesArray);

          }
        });
      });
    });
  });


  app.get('/piyasa', (req, res) => {
    connectionpiyasa.query('SHOW TABLES', (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
      }
      
      const tableNames = results.map(result => result[`Tables_in_${connectionpiyasa.config.database}`]);
      const lastValues = {};
      let remainingQueries = tableNames.length;

      tableNames.forEach(tableName => {
        connectionpiyasa.query(`SELECT Açılış FROM ${tableName} ORDER BY Tarih DESC LIMIT 1`, (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).send('Internal server error');
          }

          lastValues[tableName] = results[0].Açılış;

          remainingQueries--;
          if (remainingQueries === 0) {
            
            const lastValuesArray = [];
            tableNames.forEach(tableName => {
              const lastValueObj = {
                tableName: tableName,
                lastValue: lastValues[tableName]
              };
              lastValuesArray.push(lastValueObj);
            });
            res.send(lastValuesArray);

          }
        });
      });
    });
  });

  app.get("/piyasa/:tableName", (req, res) => {
    const tableName = req.params.tableName;
    const realTableName = `tbl_${tableName}`;
    
    connectionpiyasa.query(`SELECT * FROM ${realTableName}`, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return;
      }
      
      // Verileri JSON formatında gönder
      res.send(JSON.stringify(results));
    });
  });



  function checkTime() {
    var now = new Date();
    if (now.getHours() == 13 && now.getMinutes() == 30) {
      connection.query('SELECT * FROM mytable', function (error, results, fields) {
        if (error) throw error;
        console.log('Results: ', results);
      });
    }
  }

  setInterval(checkTime, 600000); //60000 = 1 minute

  app.get('/predictData', (req, res) => {
    connectiondata.query('SELECT * FROM tbl_predict', (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
      }
      res.send(results);
    });
  });



app.listen(3002, () => console.log('Server started on port 3002'));

