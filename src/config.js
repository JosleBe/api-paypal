import { config } from "dotenv";
config();

// Paypal
export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
export const PAYPAL_API = process.env.PAYPAL_API;


// Server
export const PORT = process.env.PORT || 3002;
export const HOST =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:" + PORT;
