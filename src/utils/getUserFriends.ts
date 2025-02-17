interface FriendsResponse {
  data: number;
}

interface TaskResponse {
  success: boolean;
  message?: string;
}

export const handleCheckClick = async (
  taskId: number,
  userId: number
): Promise<TaskResponse | null> => {

    const response = await fetch(
      `https://telegram-phen-app-server-scjhs.ondigitalocean.app/user/getFriends`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      }
    );

    const { data }: FriendsResponse = await response.json();
  const friendCount = data;

    const taskConditions: Record<number, number> = {
      154: 1,
      155: 5,
      156: 10,
    };

    if (taskConditions[taskId] !== undefined && friendCount >= taskConditions[taskId]) {
      const taskResponse = await fetch(
        `https://telegram-phen-app-server-scjhs.ondigitalocean.app/tasks/completed`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId, taskId: taskId }),
        }
      );
      return await taskResponse.json();
    }

  return null;
};
