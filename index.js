require('dotenv').config()
const path = require('path');
// var __dirname = path.resolve();
const express = require('express');
const app = require('./api/server.js');
app.use(express.json());






if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('/', (_, res) => {

        // if you want to serve a SPA using Express you totally can!
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    //   res.json({ api: "up"})
})
    
    // app.use("/api/*", (__, res) => {
    //   res.json({ api: "up"})
    // })s
}

const port = process.env.PORT || 5000;
// server.set("port", port);


app.use("/api", (__, res) => {
    res.json({ api: "it lives!" })
});

app.listen(port, () => console.log(`\n** server up on port ${port} **\n`));