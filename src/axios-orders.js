import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burgerbuilder-166d7.firebaseio.com/'
});

export default instance;