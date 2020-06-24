"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = require("./controllers/UserController");
var TaskController_1 = require("./controllers/TaskController");
var routes = express_1.default.Router();
routes.post('/v1/api/users', UserController_1.store);
routes.post('/v1/api/users/session', UserController_1.login);
routes.get('/v1/api/tasks', TaskController_1.taskIndex);
routes.post('/v1/api/tasks', TaskController_1.taskStore);
routes.get('/v1/api/tasks/completed', TaskController_1.taksIndexCompleted);
routes.put('/v1/api/tasks/:id', TaskController_1.taksCompleted);
routes.delete('/v1/api/tasks/:id', TaskController_1.taskDelete);
exports.default = routes;
