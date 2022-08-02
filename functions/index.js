const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51L2e6mIrIWnrxOHiptCZIYj0GzyTFKO3rSVLgyfvnGSInzVEQM1FB0hxuRCTHxDsswrUBNzmuiV7voBbG2junW4f00fgzOJTnG");

//API

// - App config
const app = express();
// - Middlewares
app.use(cors());
app.use(express.json());
// - API roots
app.get("/", (req, res) => {
    return res.status(200).send("Hello World!");
});
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment request recieved ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    //OK - created payment intent
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});
// - Listen
exports.api = functions.https.onRequest(app);