"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const cast_1 = __importDefault(require("../util/functions/cast"));
const compile_1 = __importDefault(require("../util/functions/compile"));
const option_1 = __importDefault(require("../util/functions/option"));
class Command {
    #manager;
    id;
    data;
    compiler;
    path = (0, option_1.default)();
    constructor(id, manager, data, compiler) {
        this.#manager = manager;
        this.data = data;
        this.id = id;
        this.compiler = compiler ?? (0, compile_1.default)(data.code, this.#manager.client.options.insensitive);
    }
    as() {
        return (0, cast_1.default)(this);
    }
    setPath(str) {
        this.path = str;
        return this;
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map