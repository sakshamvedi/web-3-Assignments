document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const walletInfo = document.getElementById('walletInfo');
    const mnemonicField = document.getElementById('mnemonic');
    const publicKeyField = document.getElementById('publicKey');
    const secretKeyField = document.getElementById('secretKey');

    generateButton.addEventListener('click', async () => {
        try {

            const response = await fetch('https://web-3-assignments-1.onrender.com/generate-keypair');
            const data = await response.json();


            mnemonicField.value = data.mnemonic;
            publicKeyField.value = data.publicKey;
            secretKeyField.value = data.secretKey;


            walletInfo.classList.remove('hidden');
        } catch (error) {
            console.error('Error generating keypair:', error);
            alert('Failed to generate keypair. Please try again.');
        }
    });
});
