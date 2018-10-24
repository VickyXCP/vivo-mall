const Mock = require('mockjs')

function getdata () {
  return {
    name: 'Vicky'
  }
}

const login = Mock.mock(/\/user\/login/, 'post', getdata)

module.exports = {login}
