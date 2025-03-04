import { checkChatMember, taskCompleted } from "../redux/operations";
import { AppDispatch } from "../redux/store";

const checkTelegramSub = async (userId: number, taskId: number, channelId: string, dispatch: AppDispatch,) => {

    const data = await checkChatMember(userId, channelId);
    
    if (data.data.status === 'member' || data.data.status === 'creator' || data.data.status === 'administrator') {
        dispatch(taskCompleted({ userId, taskId }));
    }
    
    return null;
}

export default checkTelegramSub;
