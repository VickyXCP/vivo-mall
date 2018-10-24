let Mock = require('mockjs')
let Random = Mock.Random
const courses = require('./data/test')
const login = require('./data/login')

module.exports = function () {
  let data = {
    news: [],
    type: {
      a: 'a',
      b: 'b'
    },
    article: [],
    courses,
    login
  }

  let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)))

  for (let i = 0; i < 10; i++) {
    let content = Random.cparagraph(0, 10)

    data.news.push({
      'id': i,
      'title': Random.cword(8, 20),
      'desc': content.substr(0, 40),
      'tag': Random.cword(2, 6),
      'views': Random.integer(100, 5000),
      'images': images.slice(0, Random.integer(1, 3))
    })
    data.article.push({
      'id': i,
      'title': Random.cword(8, 20),
      'desc': content.substr(0, 40),
      'tag': Random.cword(2, 6),
      'views': Random.integer(100, 5000),
      'images': images.slice(0, Random.integer(1, 3))
    })
  }

  return data
}
