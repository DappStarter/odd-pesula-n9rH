require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area this fire rival ranch champion coral light army gentle'; 
let testAccounts = [
"0xef57ec5016cb419054978bfa70911efd165dfd098da0b24a39c26da0833c7cc7",
"0x1bcfb8e158b4627d4408374c5d4a4e164d575a0d80ab8d610fc263ceba055675",
"0x63f6b35c71b81209b57b3e6fb349643fb24b2f8c5036dfa3e75150c9d3edae09",
"0xbb2e10c733d80c29540a7a155c90f3db5a6a221a5da5ac3137f8b0fe880920fc",
"0x09987e5b34978c8b6b19f5a81f8851ac23cb2e000e8078dcbb73006be883bcd8",
"0x77c7ee46fa06436ae40d1b36b7e1b1bd181ebdba34b6fdffb244937554d5dc6d",
"0x05d807e4169f5edc6eda13bf825f8ba389d3bffe589c03864c47b38b56c4beda",
"0x51f97d7818d267dc1d32d00ed3edaa8cf87514c0ea4097ef9dffe49d25e609a4",
"0x75c6570e46f116cbb300d40e03ac308666aa5a2cab78696fc2ce7b191e0ea9b3",
"0xd6b3758e68efd319606a0acce77b02955a2312fd508ea3d08cee0e65f34e59d2"
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

