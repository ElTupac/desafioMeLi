const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

try {
    app.listen(PORT, () => {
        console.log(`Server en puerto ${PORT}`);
    })
} catch (error) {
    console.log(`Fallo en puerto ${PORT}`, error);
}