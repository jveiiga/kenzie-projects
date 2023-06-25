import "express-async-errors"
import express from "express"
import categoryRoutes from "./routes/categories.routes"
import productsRoutes from "./routes/products.routes"
import { errorHandler } from "./errors/errors"

const app = express()
app.use(express.json())

app.use("/categories", categoryRoutes)
app.use("/products", productsRoutes)

app.use(errorHandler)

export default app
