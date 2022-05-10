const Migrations = artifacts.require("./Migrations.sol");
const Exchange = artifacts.require("./Exchange.sol");
const Token = artifacts.require("./Token.sol");
require("dotenv").config();

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Exchange, process.env.TOKEN_CONTRACT);
  // deployer.deploy(Token, "testcoin", "TST", 13, 1000000000000000); // 인자에 name, symbol, demical, initialSupply 작성
};
