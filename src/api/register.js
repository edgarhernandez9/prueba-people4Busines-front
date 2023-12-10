import axios from 'axios';
import { ENV } from '../utils/constant';

export class Register {

    async register(data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;

            const response = await axios.post(url, {
                ...data
            });

            if (response.status !== 201) throw response;

            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAllBlog() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BLOG}`;
            const response = await axios.get(url);

            if (response.status !== 200) throw response;

            return response;
        } catch (error) {
            throw error;
        }
    }

}