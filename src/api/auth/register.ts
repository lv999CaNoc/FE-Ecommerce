import { API_END_POINT } from "@app/const/common.const";
import { Http } from "@app/services/http";

interface RegisterParam {
    username: string;
    password: string;
    email: string;
    name: string;
    isSeller: boolean;
}

export const register = (params: RegisterParam) => {
    return Http.request({
        url: `${API_END_POINT}auth/register`,
        method: 'POST',
        body: params,
    })
}