import { API_END_POINT } from "@app/const/common.const";
import { Http } from "@app/services/http";

interface AddressParam {
    address: string;
    phone: string;
    nameReceiver: string;
    userId:number
}

export const createAddress = (params: AddressParam) => {
    return Http.request({
        url: `${API_END_POINT}address/save`,
        method: 'POST',
        body: params,
    })
}