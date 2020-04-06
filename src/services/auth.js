const axios = require('axios')
const { PROTOCOL, API_URL } = require('../../env')

module.exports = {
  async authenticate (githubToken) {
    const response = await axios.post(`${PROTOCOL}://${API_URL}/auth`, { github_token: githubToken });
    return response.data.token
  }
}