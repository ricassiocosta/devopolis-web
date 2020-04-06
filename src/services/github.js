const axios = require('axios')
const { PROTOCOL, API_URL } = require('../../env')

module.exports = {
  async getGithubToken (code) {
    const response = await axios.get(`${PROTOCOL}://${API_URL}/callback/github`, { params: { code } });
    return response.data.token
  }
}