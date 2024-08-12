const express = require('express');
const bip39 = require('bip39');
const { Keypair } = require('@solana/web3.js');
const app = express();
const port = 3000;
const keypairStore = {};
const cors = require('cors');
app.use(cors());
const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

app.get('/generate-keypair', (req, res) => {
    try {

        const mnemonic = bip39.generateMnemonic();
        const seed = bip39.mnemonicToSeedSync(mnemonic);
        const keypair = Keypair.fromSeed(seed.slice(0, 32));
        const publicKeyString = keypair.publicKey.toString();
        const sectetKeyString = keypair.secretKey.toString(hex);
        keypairStore[publicKeyString] = keypair;
        res.json({
            mnemonic: mnemonic,
            publicKey: publicKeyString,
            secretKey: sectetKeyString
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
