const express = require('express')
cors = require('cors')
path = require('path')
favicon = require('serve-favicon')
logger = require('morgan')
cookieParser = require('cookie-parser')

bodyParser = require('body-parser')     
mongoose = require('mongoose')
config = require('./config/DB');
api = require('./expressRoutes/routes');          
imageRoutes = require('./expressRoutes/image') 
fileRoutes = require('./expressRoutes/file')

const app = express();   
app.use(cors());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'dist')))
 app.use('/lab-drafts/startseite', express.static(path.join(__dirname, 'dist')))


  /** Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) { //allow cross origin requests
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS'); 
            res.header('Access-Control-Allow-Credentials', true)
            next();
        });

    app.use('/api', api);
      app.use('/image', imageRoutes);
      app.use('/file', fileRoutes);

  

      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}      );
      
       

     
          
      const port = process.env.PORT || 4000;

   
       const server = app.listen(port, function(){
         console.log('Listening on port ' + port);
       });

       module.exports = app;