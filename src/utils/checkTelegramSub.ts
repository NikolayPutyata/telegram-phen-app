import { checkChatMember } from "../redux/operations";

const checkTelegramSub = async (userId: number, channelId: string) => {
    const data = await checkChatMember(userId, channelId);

    return data.data.status;
}

export default checkTelegramSub;
