const Migrations = artifacts.require("./Migrations.sol");
const Exchange = artifacts.require("./Exchange.sol");
const Token = artifacts.require("./Token.sol");
require("dotenv").config();

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Exchange, process.env.TOKEN_CONTRACT);
  deployer.deploy(Token, "URUtoken", "URU", 0, 100000000);
};
