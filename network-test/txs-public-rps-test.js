const {
    config,
} = require('./test-helper.js');

const {
    sendTxsViaPublicRpc
} = require('./txs-public-rpc-helper.js');

sendTxsViaPublicRpc(config.txsNumber, false)
    .then(result => {
        console.log("sendTxsViaPublicRpc done ");
    })
    .catch(err => {
        console.log("Error in sendTxsViaPublicRpc: " + err);
    });