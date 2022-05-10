const Migrations = artifacts.require("./Migrations.sol");
const Exchange = artifacts.require("./Exchange.sol");
const Token = artifacts.require("./Token.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Exchange, "0x809c8c6444c43e99A72efFD5Cd98e3B76c2AD8F2");
  deployer.deploy(Token, "testcoin", "TST", 13, 1000000000000000); // 인자에 name, symbol, demical, initialSupply 작성
};
