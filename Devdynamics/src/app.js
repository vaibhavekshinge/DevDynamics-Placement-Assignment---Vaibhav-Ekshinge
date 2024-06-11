import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors());
app.use(cookieParser());

import productRouter from "./routes/inventory.routes.js"
app.use("/api/v1/product",productRouter)

import cartRouter from './routes/cart.routes.js';
app.use('/api/v1/cart', cartRouter);

import couponRouter from "./routes/coupon.routes.js";
// Use the coupon router
app.use("/api/v1/coupon", couponRouter);

export default app;
