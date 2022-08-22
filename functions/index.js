import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getDogs, testApi } from "./src/dogs.js"

const app = express() // this sets up our express app
app.use(cors()) // this allow it to cross origin resource sharing
app.use(express.json()) //allows posts with JSON bodies

//now we set up some routes..
app.get("/dogs", getDogs)

app.get("/test", testApi)

// instead of app.listen(PORT)..

// we need to 1. make a cloud function, and 2. point it to app
export const api = functions.https.onRequest(app)