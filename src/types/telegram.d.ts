// telegram.d.ts

declare global {
  interface TelegramUser {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    language_code?: string;
  }

//   interface TelegramWebAppData {
//     user: TelegramUser;
//     [key: string]: any;  // Дополнительные поля, которые могут быть переданы
//   }

  interface Window {
    Telegram: {
      WebApp: {
        init: () => void;
        initDataUnsafe: TelegramWebAppData;  // Указываем тип данных, которые передаются через WebApp
      };
    };
  }
}

export {};
