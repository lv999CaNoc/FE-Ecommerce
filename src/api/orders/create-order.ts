import { API_END_POINT } from "@app/const/common.const";
import { Http } from "@app/services/http";


export const createOrderPayment = (params: any) => {
    return Http.request({
        url: `${API_END_POINT}orders/create`,
        method: 'POST',
        body: params,
    })
}