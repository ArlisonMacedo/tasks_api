"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskDelete = exports.taksIndexCompleted = exports.taksCompleted = exports.taskStore = exports.taskIndex = void 0;
var connection_1 = __importDefault(require("../database/connection"));
exports.taskIndex = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.headers.authorization;
                return [4, connection_1.default('users')
                        .where('id', String(id))
                        .select('*')
                        .first()];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, response.json({ message: 'User not found' })];
                }
                return [4, connection_1.default('tasks')
                        .join('users', 'users.id', 'tasks.user_id')
                        .where('users.id', String(user.id))
                        .where('completed', null)
                        .select('tasks.*', 'users.name', 'users.email')];
            case 2:
                tasks = _a.sent();
                if (!tasks) {
                    return [2, response.status(404).send()];
                }
                return [2, response.json(tasks)];
        }
    });
}); };
exports.taskStore = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, user_id, _a, title, description, task;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.headers.authorization;
                return [4, connection_1.default('users')
                        .where('id', String(id))
                        .select('*')
                        .first()];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2, response.json({ error: 'Not found User with is ID' })];
                }
                user_id = user.id;
                _a = request.body, title = _a.title, description = _a.description;
                return [4, connection_1.default('tasks').insert({
                        title: title,
                        description: description,
                        user_id: user_id
                    })];
            case 2:
                task = _b.sent();
                return [2, response.json(task)];
        }
    });
}); };
exports.taksCompleted = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                return [4, connection_1.default('tasks').update({
                        completed: true
                    }).where('id', id)];
            case 1:
                tasks = _a.sent();
                return [2, response.json(tasks)];
        }
    });
}); };
exports.taksIndexCompleted = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, user, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_id = request.headers.authorization;
                return [4, connection_1.default('users')
                        .where('id', String(user_id))
                        .select('*')
                        .first()];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, response.status(404).send()];
                }
                return [4, connection_1.default('tasks')
                        .join('users', 'users.id', 'tasks.user_id')
                        .where('users.id', String(user.id))
                        .where('completed', true)
                        .select('tasks.*')];
            case 2:
                tasks = _a.sent();
                return [2, response.json(tasks)];
        }
    });
}); };
exports.taskDelete = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user_id, user, task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                user_id = request.headers.authorization;
                return [4, connection_1.default('users')
                        .where('id', String(user_id))
                        .select('*')
                        .first()];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, response.status(400).send()];
                }
                return [4, connection_1.default('tasks')
                        .where('id', String(id))
                        .select('*')
                        .first()];
            case 2:
                task = _a.sent();
                if (!task) {
                    return [2, response.status(400).send()];
                }
                return [4, connection_1.default('tasks').where('id', String(task.id)).delete()];
            case 3:
                _a.sent();
                return [2, response.status(204).send()];
        }
    });
}); };
