const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const port = 3333


dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
  })
	.then(() => console.log("DB Connection Successfull!"))
	.catch((err) => {
		console.log(err);
	});



app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use("/api/auth", authRoute);//ok
app.use("/api/users", userRoute);//ok
app.use("/api/products", productRoute);//ok
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);//ok
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 3333, () => {
	console.log(`Backend server is running in ${port}!`);
});
