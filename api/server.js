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
            'google',
            '*.google',
            '*.google.com',
            '*.googleapis.com',
            "'unsafe-inline'",
            "'unsafe-eval'"
        ],
        'script-src': [
            "'self'",
            'google',
            '*.google',
            '*.google.com',
            'cashoutapp.herokuapp.com',
            '*.googleapis.com',
            "'unsafe-inline'",
            "'unsafe-eval'"
        ],        
        'img-src': [
            "'self'",
            '*.ko-fi.com',
            'google',
            '*.googleusercontent.com',
            '*.google',
            '*.google.com',
            'cashoutapp.herokuapp.com',
            '*.googleapis.com',
            "'unsafe-inline'",
            "'unsafe-eval'"
        ],
         'font-src': [
            "'self'",
            'google',
            'cashoutapp.herokuapp.com',
            '*.gstatic.com',
            '*.google',
            '*.google.com',
            '*.googleapis.com',
            "'unsafe-inline'",
            "'unsafe-eval'"
        ],
        'frame-src': ['*.google.com', 'erickgonzalez.herokuapp.com', '*.gstatic.com','*.googleapis.com', "'unsafe-inline'", "'self'"], 
        'default-src': ['*.gstatic.com', '*.gstatic.com', 'erickgonzalez.herokuapp.com', '*.googleapis.com', "'unsafe-inline'", "'self'"],
        'script-src-elem': ["'unsafe-inline'", '*.vimeo.com', 'erickgonzalez.herokuapp.com', "'self'", '*.google.com', '*.googleapis.com'],
        'style-src': ["'self'", 'erickgonzalez.herokuapp.com', '*.googleapis.com', "'unsafe-inline'"]
      },
    },
  })
)

module.exports = app;