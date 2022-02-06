import axios from 'axios';

//Base api
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});