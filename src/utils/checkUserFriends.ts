import { AppDispatch } from '../redux/store';
import { taskCompleted } from '../redux/operations';


interface TaskResponse {
  success: boolean;
}

export const handleCheckClick = async (
  taskId: number,
  userId: number,
  friendCount: number,
  dispatch: AppDispatch,
): Promise<TaskResponse | null> => {

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

