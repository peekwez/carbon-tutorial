class GDXClient {
  constructor() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  async call({ method, path, body }) {
    var raw = JSON.stringify(body);
    var requestOptions = {
      method: method,
      headers: this.headers,
      body: raw,
      redirect: 'follow',
    };
    return await fetch(path, requestOptions);
  }

  async get({ path, body }) {
    return await this.call({ method: 'GET', path, body });
  }

  async post({ path, body }) {
    return await this.call({ method: 'POST', path, body });
  }
}

const gdxAPI = new GDXClient();
export default gdxAPI;
