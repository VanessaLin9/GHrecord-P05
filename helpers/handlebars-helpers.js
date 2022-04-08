const moment = require('moment')

module.exports = {
  today: function () {
    let a = moment().format('YYYY-MM-DD')
    return a
    
  },
  date: function(a) {
    return moment(a).format('L')
  }
}