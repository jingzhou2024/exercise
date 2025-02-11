"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
function computeHash(prevHashStr, data) {
    var hash = crypto.createHash('sha256');
    if (prevHashStr !== "") {
        hash.update(prevHashStr, 'utf8');
    }
    hash.update(data, 'utf8');
    return hash.digest('hex');
}
function pow(nickname, prefixZero) {
    var nonce = 0;
    var hashResult = "";
    var beginTime = Date.now();
    while (true) {
        hashResult = computeHash(hashResult, "".concat(nickname).concat(nonce));
        if (hashResult.startsWith('0'.repeat(prefixZero))) {
            console.log("Nonce: ".concat(nonce));
            console.log("Hash: ".concat(hashResult));
            console.log("Time: ".concat(Date.now() - beginTime, " ms"));
            break;
        }
        nonce++;
    }
}
var nickname = "0xdeaADF91881EC521385c45959556C026F4804884";
pow(nickname, 4);
pow(nickname, 5);
