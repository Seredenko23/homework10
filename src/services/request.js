// @flow
import type { response } from "../types/response";
import user from "../types/user";
import post from "../types/post";
import comment from "../types/comment";

const BASE_URL:string = "https://jsonplaceholder.typicode.com"

async function getUsers() {
    const res: Response = await fetch(BASE_URL + "/users");
    const resBody: Array<user> = await res.json();
    const data: response<user> = {
        status: res.status,
        body: resBody
    };
    return data;
}

async function getPosts(userId: number) {
    const res: Response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    const resBody: Array<post> = await res.json();
    const data: response<post> = {
        status: res.status,
        body: resBody
    };
    return data;
}

async function getComments(postId: number) {
    const res: Response = await fetch(`${BASE_URL}/comments?postId=${postId}`);
    const resBody: Array<comment> = await res.json();
    const data: response<comment> = {
        status: res.status,
        body: resBody
    };
    return data;
}

export default getUsers;
export {getUsers ,getPosts ,getComments};