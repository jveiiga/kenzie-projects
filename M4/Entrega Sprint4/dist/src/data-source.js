"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test" ?
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
        port: parseInt(process.env.PGPORT),
        database: process.env.DB,
        //inicia em false para trabalhar com o conceito de migrations
        synchronize: false,
        //mostra as querys que estão sendo feitas no DB
        logging: true,
        //se converte em um diretórios entities
        entities: [path_1.default.join(__dirname, "./entities/**.{js,ts}")],
        //se converte em um diretórios migrations
        migrations: [path_1.default.join(__dirname, "./migrations/**.{js,ts}")]
    });
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map