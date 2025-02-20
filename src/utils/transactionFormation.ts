
export const transactionFormation = async (userId:number, idCollection: number, idItem: number, amount: number) => {

    const transaction = {
        validUntil: Date.now() + 5 * 60 * 1000,
        messages: [
            {
                address: "UQA8vghmZqzHzwfKtATNrFr7PwMZm_5-eF6dovod1b1vrsaz", 
                amount: (amount * 1_000_000_000).toString(),
                // payload: `ORDER_${userId}_${idCollection}_${idItem}`, 
            },
        ],
    };

    return transaction;

};