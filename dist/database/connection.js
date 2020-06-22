"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var connection = knex_1.default({
    client: 'pg',
    connection: {
        host: 'ruby.db.elephantsql.com',
        database: 'vmecbbnk',
        port: Number(5432),
        user: 'vmecbbnk',
        password: 'zcx3SJXkDCdxu4HCVZqeXljDsU5CIjDH'
    },
    useNullAsDefault: true
});
exports.default = connection;
