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
var hash4zero = "0000fc7d41c334f49f02ca6f9153433b209b7676bf0e4c754ae66ef22812e230";
var sign = crypto.createSign('SHA256');
sign.update(hash4zero);
var signature = sign.sign(privateKey, 'base64');
console.log('Name:', hash4zero);
console.log('Signature:', signature);
var verify = crypto.createVerify('SHA256');
verify.update(hash4zero);
var isVerified = verify.verify(publicKey, signature, 'base64');
console.log('Signature verified:', isVerified);
