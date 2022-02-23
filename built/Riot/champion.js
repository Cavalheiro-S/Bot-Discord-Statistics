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
exports.embedChampions = exports.getInfoAllChampions = void 0;
var index_1 = require("../../node_modules/axios/index");
var PlayerInfo_1 = require("./embed/PlayerInfo");
var player_1 = require("./player");
function embedChampions(name) {
    return __awaiter(this, void 0, void 0, function () {
        var playerInfo, urlIcon, championsMastery;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, player_1.getInfoByNamePlayer)(name)];
                case 1:
                    playerInfo = _a.sent();
                    return [4 /*yield*/, (0, player_1.getUrlImageIcon)(playerInfo.profileIconId)];
                case 2:
                    urlIcon = _a.sent();
                    return [4 /*yield*/, getInfoAllChampions(playerInfo.id)];
                case 3:
                    championsMastery = _a.sent();
                    return [2 /*return*/, (0, PlayerInfo_1.embedChampionChestInfo)(playerInfo, urlIcon, championsMastery)];
            }
        });
    });
}
exports.embedChampions = embedChampions;
function getInfoAllChampions(playerId) {
    return __awaiter(this, void 0, void 0, function () {
        var listOfChampions, championsName, championsWithoutChest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMasteryChampions(playerId)];
                case 1:
                    listOfChampions = _a.sent();
                    return [4 /*yield*/, getNameOfAllChampionsMastery(listOfChampions)];
                case 2:
                    championsName = _a.sent();
                    return [4 /*yield*/, getChampionsWithoutChestGranted(listOfChampions)];
                case 3:
                    championsWithoutChest = _a.sent();
                    return [2 /*return*/, {
                            championsName: championsName,
                            championsWithoutChest: championsWithoutChest
                        }];
            }
        });
    });
}
exports.getInfoAllChampions = getInfoAllChampions;
function getNameOfAllChampionsMastery(listOfChampions) {
    return __awaiter(this, void 0, void 0, function () {
        var arrayOfInfoChampions;
        var _this = this;
        return __generator(this, function (_a) {
            arrayOfInfoChampions = listOfChampions.map(function (infoMasteryChampion, index) { return __awaiter(_this, void 0, void 0, function () {
                var name_1, image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(index <= 20)) return [3 /*break*/, 3];
                            return [4 /*yield*/, verifyWhichNameOfIdChampion(infoMasteryChampion.championId)];
                        case 1:
                            name_1 = _a.sent();
                            return [4 /*yield*/, getUrlImageChampion(name_1)];
                        case 2:
                            image = _a.sent();
                            return [2 /*return*/, {
                                    name: name_1,
                                    image: image
                                }];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/, Promise.all(arrayOfInfoChampions)];
        });
    });
}
function getChampionsWithoutChestGranted(listOfChampions) {
    return __awaiter(this, void 0, void 0, function () {
        var championsWithoutChest;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    championsWithoutChest = listOfChampions.map(function (championInfo) { return __awaiter(_this, void 0, void 0, function () {
                        var name_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!championInfo.chestGranted) return [3 /*break*/, 2];
                                    return [4 /*yield*/, verifyWhichNameOfIdChampion(championInfo.championId)];
                                case 1:
                                    name_2 = _a.sent();
                                    return [2 /*return*/, name_2];
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(championsWithoutChest)];
                case 1: return [2 /*return*/, (_a.sent()).filter(function (champion) { return champion ? champion : null; })];
            }
        });
    });
}
function verifyWhichNameOfIdChampion(idChampion) {
    return __awaiter(this, void 0, void 0, function () {
        var listOfChampions, infoOfChampions, nameOfChampion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllChampionsJson()];
                case 1:
                    listOfChampions = _a.sent();
                    infoOfChampions = Object.values(listOfChampions);
                    nameOfChampion = infoOfChampions.filter(function (info) { return info.key == idChampion ? info : null; });
                    return [2 /*return*/, nameOfChampion[0].id];
            }
        });
    });
}
function getAllChampionsJson() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, index_1.default.get("http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json")
                    .then(function (response) { return response.data.data; })];
        });
    });
}
function getMasteryChampions(playerId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.default.get("https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/".concat(playerId, "?api_key=").concat(process.env.RIOT_API_KEY))
                        .then(function (response) { return response.data; })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getUrlImageChampion(nameChampion) {
    return "http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/".concat(nameChampion, ".png");
}
