import "reflect-metadata"
import "dotenv/config"
import path from "path"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        //configurações de conexão com o DB
        type: "postgres",
        host: process.env.PGHOST,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT!),
        database: process.env.DB,
        //inicia em false para trabalhar com o conceito de migrations
        synchronize: false,
        //mostra as querys que estão sendo feitas no DB
        logging: true,
        //se converte em um diretórios entities
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        //se converte em um diretórios migrations
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]
    }
)

export default AppDataSource