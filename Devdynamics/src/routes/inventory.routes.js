import {Router} from "express"
import { addItemToInventory, removeItemFromInventory } from "../controllers/product.controller.js";

const router = Router();

router.route("/addItem").post(addItemToInventory)
router.route("/removeItem").delete(removeItemFromInventory)

export default router;