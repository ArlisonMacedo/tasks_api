"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    client: 'pg',
    connection: {
        host: 'ruby.db.elephantsql.com',
        database: 'vmecbbnk',
        port: Number(5432),
        user: 'vmecbbnk',
        password: 'zcx3SJXkDCdxu4HCVZqeXljDsU5CIjDH'
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'database', 'migrations')
    },
    useNullAsDefault: true
};
