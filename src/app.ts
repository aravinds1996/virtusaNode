import express from 'express';
import { userData } from './models/userData';
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Virtusa Assignment');
});

/**
 * @author Aravind Sankar <aravinds1996@gmail.com>
 * @api {POST} /api/v1/parse Takes in the request body and sends required json response to end client
 * @returns {JSON} FirstName,LastName and Client Id
 */


app.post('/api/v1/parse', function (req, res) {
    let requestData = req.body.data;
    let firstName = requestData.substr(0,8);
    let lastName = requestData.substr(8,10);
    let clientId = requestData.substr(18,23);

    const respData:userData = {
        "firstName": firstName,
        "lastName": lastName,
        "clientId": clientId
    }
    res.json({
        statusCode: res.statusCode,
        data:respData
    })

});

/**
 * @author Aravind Sankar
 * @api {POST} /api/v2/parse Takes in the request body and sends required json response to end client
 * @returns {JSON} FirstName,LastName and Client Id
 */

app.post('/api/v2/parse', function (req, res) {
    let requestData = req.body.data;
    let firstName = requestData.substr(0,4);
    let lastName = requestData.substr(8,7);
    let clientIdBefore = requestData.substr(18,3);
    let clientId = clientIdBefore + '-' + requestData.substr(21,4);
    console.log(clientId);

    const  respData:userData = {
        "firstName": firstName,
        "lastName": lastName,
        "clientId": clientId
    }
    res.json({
        statusCode: res.statusCode,
        data:respData
    })

});


app.listen(port, function () {
    console.log('App is listening on port 3000!');
  });