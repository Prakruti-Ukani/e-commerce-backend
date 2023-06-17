import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes/index.route.js';
import './config/dbConfig.js';
import cors from 'cors'


app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import router file
app.use('/', routes);
// const corsConfig = {
//   origin: [
//     'http://localhost: 3000'
//   ]
// }

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   req.header(
//     "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Request-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept,X-Auth-Token"
//   );
//   next();
// });

// set port, listen for request
const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


