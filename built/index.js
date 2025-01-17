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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var Riot_1 = require("./Riot");
var _a = require("discord.js"), Client = _a.Client, Intents = _a.Intents;
var prefix = '/';
var client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.once("ready", function () {
    console.log("Bot is ready");
});
client.on("messageCreate", function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, whiteSpace, commandMessage, _b, commandName, commandSuffix, _c, attachment, error_1, attachment, error_2;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!message.content.startsWith(prefix) || message.author.bot)
                    return [2 /*return*/];
                _a = message.content.split(prefix), whiteSpace = _a[0], commandMessage = _a[1];
                _b = commandMessage.split(" "), commandName = _b[0], commandSuffix = _b[1];
                if (commandSuffix === " " || commandSuffix === "")
                    return [2 /*return*/];
                _c = commandName;
                switch (_c) {
                    case "info": return [3 /*break*/, 1];
                    case "chest": return [3 /*break*/, 5];
                }
                return [3 /*break*/, 9];
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, Riot_1.embedPlayerInfo)(commandSuffix)];
            case 2:
                attachment = _d.sent();
                message.channel.send({
                    embeds: [attachment]
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _d.sent();
                console.log(error_1);
                message.channel.send("Jogador não encontrado");
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 9];
            case 5:
                _d.trys.push([5, 7, , 8]);
                return [4 /*yield*/, (0, Riot_1.embedChampions)(commandSuffix)];
            case 6:
                attachment = _d.sent();
                message.channel.send({ embeds: [attachment] });
                return [3 /*break*/, 8];
            case 7:
                error_2 = _d.sent();
                console.log(error_2);
                message.channel.send("Erro encontrado");
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
client.login(process.env.DISCORD_BOT_TOKEN);
