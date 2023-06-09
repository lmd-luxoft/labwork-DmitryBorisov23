const http = require("http");
const url = require("url");


const host = "localhost";
const port = 8000;

function ajax(request, response)
{
   let html = `<html>
   <head>

   </head>
   <body>
       <button id="btn">click for load</button>
       <div id="state"></div>
       <script>
           let btn  = document.getElementById("btn");
           btn.addEventListener("click", async () => {
                   let response = await fetch("http://localhost:8000/json", {
                       headers : {
                          
                       }
                   });
                   let view = '';
                   if(response.ok)
                     {
                       let data = await response.json();
                       view = \`Id = \${data.id} User name = \${data.detail.user} \`;
                       
                     }
                   else {
                       view = \`Error in http request \${response.status}\`;    
                   }
                   let state = document.getElementById("state");
                   state.innerHTML = view;
           });
       </script>
   </body>
</html>`;
response.setHeader("Content-Type","text/html");
response.writeHead(200);
response.write(html);
}

function root(request, response)
{
    response.setHeader("Content-Type","text/html");
    response.writeHead(200);
    response.write("<html><head><link rel='stylesheet' href='/css' type='text/css'/><title>Sandbox</title></head><body><h1>Hi!</h1><body>");
}

function json(request, response)
{
    response.setHeader("Content-Type","application/json");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200);
    response.write('{ "id" : 2, "detail" : { "user" : "test", "tag" : 5}, "data" : [0,6,1,5,4]}');
}

function calc(num, response)
{
    response.setHeader("Content-Type","text/plain");    
    response.writeHead(200);
    response.write(`${num * 20}`);
}

function css(request, response)
{
    response.setHeader("Content-Type","text/css");
    response.writeHead(200);
    response.write("H1 { background-color : yellow}");
}
const handlerRequest = (request, response) =>
{
    console.log(`Request with URL ${url}`);
    const requestQuery = url.parse(request.url).path;
    console.log(`with query params ${requestQuery}`);
    switch(requestQuery)
    {
     case "/json" :
        json(request,response);
        break;
     case "/css" :
        css(request, response);
        break;
     case "/ajax" :
        ajax(request, response);
        break;
     default:
        {
        if(requestQuery.indexOf("/number/") >= 0)
          calc(requestQuery.substring(8), response);
        else 
          root(request, response);
        }
    }    
    response.end();
}

const server = http.createServer(handlerRequest);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});