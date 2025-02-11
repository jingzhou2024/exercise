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

console.log('公钥:', publicKey);
console.log('私钥:', privateKey);