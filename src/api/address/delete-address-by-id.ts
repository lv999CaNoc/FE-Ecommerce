import { API_END_POINT } from "@app/const/common.const";
import { Http } from "@app/services/http";

export const deleteAddressById = (id:number) => {
    return Http.request({
        url: `${API_END_POINT}address/delete?id=${id}`,
        method: 'DELETE',
    })
}