const path = require("path");
const hdwalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex=0;
require("dotenv").config({path:"./.env"});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545,
      host:"127.0.0.1",
      network: 5777
    },
    metamask_deployer_ganache:{
      provider: function (){
        return new hdwalletProvider(process.env.MENOMICS,"http://127.0.0.1:7545",AccountIndex);
      },
      network_id: 5777
    }
  },
  compilers:{
    solc:{
      version:"0.6.1"
    }
  }
};
//truffle migrate --network metamask_deployer_ganache