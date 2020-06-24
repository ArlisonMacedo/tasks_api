"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var connection = knex_1.default({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: Number(5433),
        database: 'tasks_api',
        user: 'postgres',
        password: 'root'
    },
    useNullAsDefault: true
});
exports.default = connection;
