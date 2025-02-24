interface invoiceData {
  title: string;
  description: string;
  prices: [{label: string, amount: number}];
    currency: string;
    provider_token: string;
    payload: string;
}

export const createStarInvoice = async (invoiceData: invoiceData) => {
    const response = await fetch('https://telegram-phen-app-server-scjhs.ondigitalocean.app/payment/create-star-invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invoiceData) 
    });
    const result = await response.json();
    return result.data;
};