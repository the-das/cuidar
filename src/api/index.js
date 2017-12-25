import axios from 'axios'

export default {

  getMeta() {
    return axios.get('https://the-das.github.io/data.json/data/das.meta.json')
                .then(response => response.data)
  },

  getQuiz(level) {
    return axios.get(`https://the-das.github.io/data.json/data/das.${level}.json`)
                .then(response => response.data)
  },
}
