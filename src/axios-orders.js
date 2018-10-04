import axios from 'axios'; // npm install --save axios 

const instance = axios.create({
    baseURL: 'https://my-pizza-maker1.firebaseio.com/'
})

export default instance; 