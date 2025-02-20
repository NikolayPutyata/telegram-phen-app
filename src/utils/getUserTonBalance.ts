

export const getUserTonBalance = async (address: string) => {
    const response = await fetch(`https://ton-mainnet.core.chainstack.com/f2a2411bce1e54a2658f2710cd7969c3/api/v2/getAddressBalance?address=${address}`);
    const data = await response.json();

    const balance = Number(data.result) / 1e9;

    return balance;
    

};