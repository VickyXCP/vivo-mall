// mock.js
const Mock = require('mockjs')
const Random = Mock.Random

// Random.extend 用于自定义扩展
Random.extend({
  courses: ['音乐课', '舞蹈课', '地理课'],
  course: function (date) {
    return this.pick(this.courses)
  }
})

const courses = Mock.mock({
  startClass: '@bool', // 布尔值，可以传入参数设置频率
  token: '@string("upper", 2, 8)', // 随机字符串
  createData: '@datetime("yyyy-MM-dd A HH:mm:ss")', // 返回日期
  image: '@image("200x100")', // 模拟图片 'x'链接
  manager: '@cname', // 中文名
  'partners|3': [
    '@name' // 英文名
  ],
  website: '@url',
  email: '@email',
  'password|2': '**', // 数据模板下，值为字符串表示按照规则重复字符串
  'contents|1-20': [{ // 数据模板下，值为数组或者对象 rule 部分都规定了显示的元素数量
    'id|+1': 0, // 数据模板下，值为数值表示初始值或者底数（按招规则细分）
    courseType: '@COURSE ', // 使用扩展
    courseName () { // 值可以是一个函数，用来细致模拟数据
      return this.courseType + ' ' + Random.natural(1, 10) + '班'
    },
    name: '@courseType @natural(1, 10) 班', // 可以同时使用多个占位符，用空格隔开
    'teacher': '@cname',
    position: '@courseType 第 @id 教室', // 引用当前数据模板中的内容
    students: /\d{5,10}/, // 使用正则规定数据格式
    classTime: '@datetime("M月d日起 每周三 HH:mm")'
  }]
})

module.exports = {courses}
