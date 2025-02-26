
declare global {
  interface TelegramUser {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    language_code?: string;
    photo_url?: string;
  }

  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        openTelegramLink: (url: string) => void;
        initDataUnsafe: TelegramWebAppData; 
        initData: string;
        MainButton: {
    setText: (text: string) => void;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    setParams: (params: {
      color?: string;
      text_color?: string;
    }) => void;
        };
        sendData: (data: string) => void;
        openInvoice: (invoiceUrl: string, callback: (status: string) => void) => void;
        openLink: (data: string) => void;
        version: number;
      };
    };
  }
}

export {};
