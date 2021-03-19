const  SHA256 = require('crypto-js/sha256');

/*===============BLOCK CLASS=======================
|  Class with constructor for block ---*----*
|=================================================*/

class Block {

    constructor(data) {
        this.hash = 0x0;
        this.height = "";
        this.body = data;
        this.time = 0;
        this.previousBlockHash = 0x0;
    } 

}


/*===============BLOCKCHAIN CLASS=======================
|  Class with constructor for new blockchain ---*----*
|=================================================*/
class Blockchain {
    constructor() {
        this.chain = [];
        this.addBlock(this.createGenesisBlock());
    }


    createGenesisBlock() {
        return new Block("First block in the chain - Genesis block");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    };

    getNewHeight() {
        return this.chain.length;
    }

    addBlock(newBlock) {
        newBlock.height = this.getNewHeight();
        // UTC timestamp
        newBlock.time = new Date().getTime().toString().slice(0,-3)
        if(this.chain.length > 0) newBlock.previousBlockHash = this.getLatestBlock().hash;
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        console.log(newBlock);
        this.chain.push(newBlock);
    }
}