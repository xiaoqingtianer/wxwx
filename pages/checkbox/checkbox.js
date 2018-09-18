// pages/checkbox/checkbox.js
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    length:1
  },
  checkboxChange: function (e) {
    var length = e.detail.value.length
    this.setData({
      length
    })
  }
})