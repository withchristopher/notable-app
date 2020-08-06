const express = require("express");
const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use("/", htmlRoutes);

app.use("/notes", htmlRoutes);

app.use("/api", apiRoutes);

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});