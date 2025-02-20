import { beginCell } from '@ton/ton';
import { toNano } from '@ton/ton';



export const transactionFormation = async (userId: number, idCollection: number, idItem: number, amount: number) => {
    
    
const body = beginCell()
  .storeUint(0, 32) 
  .storeStringTail(`ORDER_${userId}_${idCollection}_${idItem}`) 
        .endCell();
    

    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 300,
        messages: [
            {
                address: "UQA8vghmZqzHzwfKtATNrFr7PwMZm_5-eF6dovod1b1vrsaz", 
                amount: toNano(amount).toString(),
                payload: body.toBoc().toString("base64"), 
            },
        ],
    };

    return transaction;

};