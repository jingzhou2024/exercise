import * as crypto from 'crypto';

// 生成 RSA 密钥对
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // 密钥长度
  publicKeyEncoding: {
    type: 'spki', // 公钥格式
    format: 'pem', // 编码格式
  },
  privateKeyEncoding: {
    type: 'pkcs8', // 私钥格式
    format: 'pem', // 编码格式
  },
});


const hash4zero = "0000fc7d41c334f49f02ca6f9153433b209b7676bf0e4c754ae66ef22812e230";
const sign = crypto.createSign('SHA256');
sign.update(hash4zero);

const signature = sign.sign(privateKey, 'base64');

console.log('Name:', hash4zero);
console.log('Signature:', signature);

const verify = crypto.createVerify('SHA256');
verify.update(hash4zero);
const isVerified = verify.verify(publicKey, signature, 'base64');

console.log('Signature verified:', isVerified);