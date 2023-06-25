import app from "./app"
import AppDataSource from "./data-source"

(async () => {
    await AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!")
        app.listen(3000, () => {
            console.log("Server running in port 3000")
        })    
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
})()