// PublicService.js
import AxiosInstance from './BaseService';

async function PublicService() {
  try {
    const response = await AxiosInstance.get('/public-api/swiper');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error,'Error! something when wrong');
  }
};

export default PublicService;
