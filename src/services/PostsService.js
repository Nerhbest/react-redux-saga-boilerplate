import axios from "axios";

export default class PostsService
{
    static fetchPosts()
    {
        return axios.get("https://jsonplaceholder.typicode.com/users").then(resp => resp.data);
    }
}