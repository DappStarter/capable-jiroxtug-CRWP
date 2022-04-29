require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note predict comic hunt senior bubble soda'; 
let testAccounts = [
"0x85604366defdbe908c163e242588dab37ee21c4feebe2f61f5b86cc5d7d68a55",
"0xf67af91b564e9a8d3411eda039c228bbccd7dcb49f6b4710e05ba148d5af38ad",
"0x8b8de085d5d031af0b6010e7bc4b55578ab8fd3536282f0886de4eae4c3ce142",
"0x58892a6d226d32df3c312d55fa5d0daec77c0b6d9823607b18e48164f25b3ea1",
"0x1851d21af7b8dfa721534eb151a2c117da5965d85231dacd28dca5a05b5ebf1b",
"0x2e46bdc2436cd930f4b02c31f356d134237ce2a6fcdc65de09955534461d5246",
"0x08688b68a6f2dafdf225d170e041d2fa246d73557bfa8dc63115347c0f645934",
"0x4946540edc9ca8b2ba8e1d7b59056618e023a6131e085e91fc6e1056742b8654",
"0x3953eb1f6571638e141ca27c59284353baa50a48ddcaac87bae5733b67d934b5",
"0x313a487e5280d7e336c3a49f30c7a2edebb00461628b26ad22fb5453ff198233"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

