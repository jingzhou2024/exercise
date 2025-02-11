import * as crypto from 'crypto';

function computeHash(data: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(data, 'utf8');
    return hash.digest('hex');
}


function pow(nickname: string, prefixZero: number): void {
    var nonce: number = 0;
    var hashResult: string = "";
    const beginTime = Date.now();
    while (true) {
        hashResult = computeHash(`${nickname}${nonce}`);
        if (hashResult.startsWith('0'.repeat(prefixZero))) {
            console.log(`Nonce: ${nonce}`);
            console.log(`Hash: ${hashResult}`);
            console.log(`Time: ${Date.now() - beginTime} ms`);
            break;
        }
        nonce++;
    }
}
let nickname: string = "0xdeaADF91881EC521385c45959556C026F4804884";
pow(nickname, 4);
pow(nickname, 5);


