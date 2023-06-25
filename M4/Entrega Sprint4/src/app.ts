import "express-async-errors"
import express from "express"
import handleError from "./errors/handleError"
import userRoutes from "./routes/users.routes"
import sessionRoutes from "./routes/session.routes"
import schedulesRoutes from "./routes/schedules.routes"
import addressesRoutes from "./routes/adresses.routes"
import propertiesRoutes from "./routes/properties.routes"
import categoriesRoutes from "./routes/categories.routes"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use("/schedules", schedulesRoutes)
app.use("/addresses", addressesRoutes)
app.use("/properties", propertiesRoutes)
app.use("/categories", categoriesRoutes)

app.use(handleError)

export default app