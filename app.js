const express = require('express');
const ws = require("ws")
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`, {
    extensions:['html']
}));

app.get('/', (req, res) => {
    res.render("index");
})

const server = http.createServer(app);
const wss = new ws.Server({ server });

wss.on("connection", (con) => {

    con.on("message", async (request) => {
      const city = JSON.parse(request)
      con.send(JSON.stringify(waterData[city]));
    });
  
    con.on("close", () => {
    })
});

server.listen(port, ()=>{
    console.log(`Server conected to port ${port}`);
});
