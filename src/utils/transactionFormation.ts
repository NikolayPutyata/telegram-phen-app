export const transactionFormation = async (userId: number, collectionId: number, idItem: number, price: number) => {
    const response = await fetch('https://telegram-phen-app-server-scjhs.ondigitalocean.app/payment/form-transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, idCollection: collectionId, idItem, amount: price }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch transaction');
    }

    const transaction = await response.json();
    return transaction;
};