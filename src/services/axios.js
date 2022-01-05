import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

class Call {
  baseUrl = Config.API_URL;

  constructor(endpoint) {
    this.endpoint = `http://192.168.0.12:8000/${endpoint}`;
  }

  getHeaders = async () => {
    const token = await AsyncStorage.getItem('authtoken');
    if (token) {
      var headers = {
        Authorization: `Token ${token}`,
      };
    } else {
      headers = null;
    }
    return headers;
  };

  get = async params => {
    return await axios({
      method: 'get',
      url: this.endpoint + `${params ? params : ''}`,
      headers: await this.getHeaders(),
    });
  };

  post = async params => {
    return await axios({
      method: 'post',
      url: this.endpoint,
      data: params,
      headers: await this.getHeaders(),
    });
  };

  put = async (id, params) => {
    return await axios({
      method: 'put',
      url: this.endpoint + id + '/',
      data: params,
      headers: await this.getHeaders(),
    });
  };

  patch = async (id, params) => {
    return await axios({
      method: 'patch',
      url: this.endpoint + id + '/',
      data: params,
      headers: await this.getHeaders(),
    });
  };

  delete = async params => {
    return await axios({
      method: 'delete',
      url: this.endpoint + `${params ? params : ''}`,
      headers: await this.getHeaders(),
    });
  };
}

export default Call;
