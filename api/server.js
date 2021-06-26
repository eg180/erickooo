const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());


app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'connect-src': [
            'erickgonzalez.herokuapp.com',          
            "'self'",
        ],
        'script-src': [
            "'self'",
        ],        
        'img-src': [
            "'self'"
        ],
         'font-src': [
            "'self'",
            'google',
        ],
        'frame-src': ['*.google.com', '*.vimeo.com'], 
        'default-src': ['erickgonzalez.herokuapp.com', "'self'"],
        'script-src-elem': ['erickgonzalez.herokuapp.com', "'self'"],
        'style-src': ["'self'", 'erickgonzalez.herokuapp.com']
      },
    },
  })
);

module.exports = app;