import api from './api';

export async function getAllActivities(token) {
  const response = await api.get('/activities/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
