const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.json("OK");
});
app.listen(8080, () => 
    console.log("listening on port 8080")
);