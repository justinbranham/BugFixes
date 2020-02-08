 //You can also create an account on bitcoinaverage.com. It's free even though it doesn't appear that way, 
 //then on your API key page you can get an API key. You should be able to copy and paste the whole app.post 
 //snippet below, put in your API key and rock and roll. Credit to Sergei in the next lesson questions 
 //for doing the heavy lifting.

app.post("/", function(req, res) {

  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  console.log(crypto);
  console.log(fiat);

request({
  url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + fiat,
  headers: {
    'x-ba-key': '---------YOUR API KEY---------'
  }
},
function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    var price = data.last;
    console.log(data.last);

    var currentDate = data.display_timestamp;

    res.write("<p>The current date is " + currentDate + "</p>");
    res.write("<h1>The current price of " + crypto + " is " + price + fiat + "</h1>");
    res.send();
  } else {
    console.log(error);
    res.send(error);
  }
  });
});
