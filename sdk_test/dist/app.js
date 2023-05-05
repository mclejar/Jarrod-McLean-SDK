"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lotr_sdk_1 = __importDefault(require("@mclejar/lotr_sdk"));
const client = new lotr_sdk_1.default({
    apiKey: "dTfPSSrx98s8dINTLptb",
});
client.getMovies().then((p) => {
    console.log(p);
});
