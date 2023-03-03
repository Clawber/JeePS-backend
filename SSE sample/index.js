// npm start


// how to run node js apps
// run manually (f5)


const app = require("express")();
const cors  = require('cors')
app.use(cors())
// express exposes endpoints. app get, app post, etc




// if / endpoint
app.get('/test', function (req, res) {
  res.json([
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ])
})



// res.send  =  send to browser
// res.json = takes in raw json, sends the raw json

app.get("/test", (req, res) => res.send("hello world"));


//SSE here
app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");

  // write only for stream
  // two new lines required
  send(res);
})

let i = 0;
function send (res) {
  i = i+1;
  res.write("data: " + `hello ${i} \n\n`);
  
  setTimeout(() =>  send(res), 1000);
}


app.listen(3032)
console.log("listening 8080");
console.log("hello world");



// frontend app
// {
// let sse = new EventSource("http://localhost:8080/stream")
// sse.onmessage = console.log
// } 


/*
express to send 

*/



/*
how to post request using frontend
  axios on frontend??
https://www.youtube.com/watch?v=1wXYg8Eslnc





*/