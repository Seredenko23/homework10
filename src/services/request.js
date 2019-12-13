// @flow
import type { response } from "../types/response";

const BASE_URL: string = "https://jsonplaceholder.typicode.com";

async function request(url: string) {
    const res: Response = await fetch(BASE_URL + url);
    const resBody: Array<Object> = await res.json();
    const data: response<Object> = {
        status: res.status,
        body: resBody
    };
    return data;
}

export default request;