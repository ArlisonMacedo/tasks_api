"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: Number(5433),
        database: 'tasks_api',
        user: 'postgres',
        password: 'root'
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'database', 'migrations')
    },
    useNullAsDefault: true
};
