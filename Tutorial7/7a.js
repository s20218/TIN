const re1 = /^[0-9]+$/;
const re2 = /^[0-9]+$/;

let http = require("http");
let url = require("url");

let server = http.createServer(function(req, res) {
  try {
    let operation = url.parse(req.url, true).pathname;

    if (!(operation in operations)) {
      res.statusCode = 400;
      res.end("Operation " + operation + " is not supported. Please, pass one of these operations: add, substract, multiply, divide");
    }

    var q = url.parse(req.url, true).query;
    let num1 = q.parameter1;
    let num2 = q.parameter2;

    if (!re1.test(num1) || !re2.test(num2)) {
      res.statusCode = 400;
      res.end("Invalid parameters passed.");
    }

    let result = operations[operation].action(parseInt(num1), parseInt(num2));
    res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>Result</title><h style="font-size:300%;">Your result is:</h></head><body><h1>
            <h1 style="font-size:200%;">${num1} ${operations[operation].sign} ${num2} = ${result}</h1></h1></body></html>`);
  
  } catch (er) {
    res.end("Server error");
  }

}).listen(8080, "localhost");

const operations = {
    "/add": {
        sign: "+",
        action: (a, b) => {
          return a + b;
        }
      },
      "/substract": {
        sign: "-",
        action: (a, b) => {
          return a - b;
        }
    },
    "/multiply": {
      sign: "*",
      action: (a, b) => {
        return a * b;
      }
    },
    "/divide": {
      sign: "/",
      action: (a, b) => {
        return a / b;
      }
    }
  };
