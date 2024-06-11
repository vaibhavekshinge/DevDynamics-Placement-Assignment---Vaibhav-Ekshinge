import { Router } from "express";
import { applyDiscountCoupon } from "../controllers/coupons.controller.js";

const router = Router();

router.route("/applyDiscount").post(applyDiscountCoupon);

export default router;
