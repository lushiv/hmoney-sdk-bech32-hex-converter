var express = require("express");
var app = express();
const { fromBech32 } = require("@harmony-js/crypto");


app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("/api/:id", (req, res, next) => {
	var id = req.params.id;
    console.log('The wallet address is : ' + fromBech32(id));
 res.json({"success": true ,"address": fromBech32(id)});
});