export const transactionFormation = async (userId: number, collectionId: number, idItem: number, price: number) => {
    const response = await fetch('http://localhost:3000/payment/form-transaction', {
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