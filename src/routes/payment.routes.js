import { Router } from "express";
import {
  createOrder,
  captureOrder,
  cancelPayment,
  getTransactionDetails
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/cancel-order", cancelPayment);

router.get('/transaction/:transactionId', getTransactionDetails);


export default router;
