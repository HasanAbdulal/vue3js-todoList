export default {
  apiURL: null,

  setApiURL(data) {
    this.apiURL = data;
  },

  async getAll() {
    const resp = await fetch(this.apiURL + '/todos');
    return await resp.json();
  },

  async addOne(data) {
    const resp = await fetch(this.apiURL + '/todos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await resp.json();
  },

  async deleteOneById(id) {
    const resp = await fetch(this.apiURL + '/todos/' + id, {
      method: 'delete',
    });
    return await resp.json();
  },

  async updateOneById(data) {
    const resp = await fetch(this.apiURL + '/todos/' + data.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await resp.json();
  },
};
