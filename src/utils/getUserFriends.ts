import { AppDispatch } from './../redux/store';
import { taskCompleted } from '../redux/operations';

interface FriendsResponse {
  data: number;
}

interface TaskResponse {
  success: boolean;
}

interface TaskSubscription {
  success: boolean;
  message: string;
}

export const handleCheckClick = async (
  taskId: number,
  userId: number,
  dispatch: AppDispatch,
): Promise<TaskResponse | null> => {
  const response = await fetch(
    `https://telegram-phen-app-server-scjhs.ondigitalocean.app/user/getFriends`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userId }),
    },
  );

  const { data }: FriendsResponse = await response.json();
  const friendCount = data;

  const taskConditions: Record<number, number> = {
    154: 1,
    155: 5,
    156: 10,
  };

  if (
    taskConditions[taskId] !== undefined &&
    friendCount >= taskConditions[taskId]
  ) {
    dispatch(taskCompleted({ userId, taskId }));
  }

  return null;
};

// --------------------------------------

export const handleCheckSubscriptionClick = async (
  taskId: number,
  userId: number,
  dispatch: AppDispatch,
): Promise<TaskSubscription | null> => {
  try {
    const botToken = '7658159055:AAGVe_VIkp_slPPchxaAf6NM_ygffRcCI6E';
    const channelUsername = '@my_subscription_phenerium_bot';

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=${encodeURIComponent(
        channelUsername,
      )}&user_id=${userId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.result || !data.result.status) {
      throw new Error('Invalid response from Telegram API');
    }

    const status = data.result?.status;

    if (
      status === 'member' ||
      status === 'administrator' ||
      status === 'creator'
    ) {
      return dispatch(taskCompleted({ userId, taskId })).unwrap();
    } else {
      return { success: false, message: 'You are not subscribed yet.' };
    }
  } catch (error) {
    console.error('Error checking subscription:', error);
    return { success: false, message: 'Failed to verify subscription.' };
  }
};
