import express from "express"
import cors from "cors"
import productRouter from "./products/routes.js";

export const PORT = 3000
export const app = express()

const MiddleWare = (req, res, next) => {
  if (req.url === "/bad") {
    res.status(400).send("Smth went wrong")
    return
  }
  next()
}

app.use(MiddleWare)
app.use(express.json())
app.use(cors({origin: `http://localhost:${PORT}`,}))
app.use("/products", productRouter)

// app.get("/:id", (req, res) => {
//   res.send(req.params.id)
// })
//
// app.get("/", (req, res) => {
//   res.send("Hello")
// })

// app.get("/blog", (req, res) => {
//   res.status(301).redirect('/news')
// })

// app.post("/api", (req, res) => {
//   console.log(req.body)
//   console.log(req.query)
//
//   res.json({message: "OK"})
// })
