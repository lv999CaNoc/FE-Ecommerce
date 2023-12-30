import { API_END_POINT } from "@app/const/common.const";
import { Http } from "@app/services/http";

interface AddressParam {
    address: string;
    phone: string;
    nameReceiver: string;
    userId:number
}

export const updateAddress = (params: AddressParam, id: number) => {
    return Http.request({
        url: `${API_END_POINT}address/update?id=${id}`,
        method: 'PUT',
        body: params,
    })
}