const moment = require('moment')

module.exports = {
  today: function () {
    let a = new Date()
    return moment(a).format('YYYY-MM-DD')
  }
}