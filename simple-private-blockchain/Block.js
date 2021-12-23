class Block {
    constructor(data){
      this.hash = '';
      this.height = '';
      this.timeStamp = new Date().getTime().toString().slice(0,-3);
      this.data = data;
      this.previousHash = '0x';
    }
  }

  module.exports.Block = Block;
