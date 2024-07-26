function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Do nothing
        }
    });
}

module.exports = getPaymentTokenFromAPI;
