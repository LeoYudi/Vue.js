const api_url = process.env.API_URL || 'http://localhost:3333';

export default {
  post: async (path, body) => {
    return new Promise((resolve, reject) => {
      fetch(api_url + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).then(async response => {
        const data = await response.json();
        return resolve({ status: response.status, data });
      })
        .catch(error => reject(error));
    });
  },

  get: async (path) => {
    return new Promise((resolve, reject) => {
      fetch(api_url + path).then(async response => {
        const data = await response.json();
        return resolve({ status: response.status, data });
      })
        .catch(error => reject(error));
    });
  }
}