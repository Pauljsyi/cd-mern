const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

require("./config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyAuthorRoutes = require("./routes/author.routes");
AllMyAuthorRoutes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
