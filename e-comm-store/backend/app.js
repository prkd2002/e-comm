const express = require('express');
const server = express();
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerOptions');
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/product");

const port = 3000;
const cors = require('cors');

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server Running ...");

});

server.use("/category",categoryRoutes);
server.use("/brand",brandRoutes);
async function connectDb() {
    console.log("Connect Db.....");
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "e-comm-store-db"
    });
    console.log("Db Connected");
    
}


connectDb().catch((err) => {
    console.log(err);
});

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
server.listen(port, () => {
    console.log("Server running on port", port);

});