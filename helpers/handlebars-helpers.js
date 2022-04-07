const moment = require('moment')

module.exports = {
  today: function () {
    let a = new Date()
    return moment(a).format('YYYY-MM-DD')
  },
  date: function(a) {
    return moment(a).locale('zh-tw').format('L')
  }
}