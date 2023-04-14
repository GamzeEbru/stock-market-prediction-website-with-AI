//bu kod ile veritabanından verileri çekip json olarak gönderiyoruz fakat 3002 portundan verileri çekiyoruz

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


connectiondata.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.get('/getData', (req, res) => {
  connectiondata.query('SELECT * FROM tbl_asels', (err, rows) => {
    if (err) throw err;

    res.json(rows);
  });
});

// app.get('/tablesname', (req, res) => {
//   connectiondata.query('SHOW TABLES', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Internal server error');
//     } else {
//       const tables = results.map(result => result[`Tables_in_${connectiondata.config.database}`]);
//       res.send(tables);
//     }
//   });
// });

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



app.listen(3002, () => console.log('Server started on port 3002'));

