import axios from 'axios'
import {baseURL} from './Constance/Constance'
const instance = axios.create({
    baseURL: baseURL,
  });

  export default instance;