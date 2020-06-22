import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-cocoontechlab.cloudfunctions.net/api',
});
