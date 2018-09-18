// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ txt: 'aa', flag: false }, { txt: 'ss', flag: true }, { txt: 'dd', flag: true }, { txt: 'ff', flag: true}],
    msg:'Hi~',
    flag:true
  },
  input(e){
    this.setData({
      msg:e.detail.value
    })
  },
  add(){
    this.data.list.push({txt:"this.data.msg",flag:false})
    this.setData({
      list:this.data.list,
      msg:''
    })
    this.getCount()
  },
  switch1Change: function (e) {
    var flag = e.detail.value;
    this.setData({
      flag
    })
  },
  del(e){
    var id = e.target.dataset.index;
    this.data.list.splice(id,1)
    this.setData({
      list:this.data.list
    })
    this.getCount()
  },
  checkboxChange(e){
    // console.log(e)
    var idx = e.target.dataset.index;
    this.data.list[idx].flag = !this.data.list[idx].flag
    this.setData({
      list:this.data.list
    })
    this.getCount()
  },
  getCount(){
    var count = 0;
    this.data.list.forEach((item)=>{
      if(item.flag) count++
    })
    this.setData({
      count
    })
  },
  onLoad() {
    this.getCount()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})