const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const usersRouter = require("./routes/users");
const mainRouter = require("./routes/main");

app.use("/", mainRouter);
app.use("/users", usersRouter);



app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});


app.listen (process.env.PORT || 3000, () =>{console.log("Servidor corriendo en el puerto 3000")});