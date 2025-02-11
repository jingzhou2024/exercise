"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
// 生成 RSA 密钥对
var _a = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // 密钥长度
    publicKeyEncoding: {
        type: 'spki', // 公钥格式
        format: 'pem', // 编码格式
    },
    privateKeyEncoding: {
        type: 'pkcs8', // 私钥格式
        format: 'pem', // 编码格式
    },
}), publicKey = _a.publicKey, privateKey = _a.privateKey;
console.log('公钥:', publicKey);
console.log('私钥:', privateKey);
