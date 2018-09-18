Page({
 data:{
   msg:'hello',
   list: [{ txt: 'aa', flag: false }, { txt: 'bb', flag: true }, { txt: 'cc', flag: true }],
   flag:true
 },
 input(e){
   var msg = e.detail.value
   this.setData({
     msg
   })
 },
 add(){
   this.data.list.push({txt:this.data.msg,flag:false})
   this.setData({
     list:this.data.list,
     msg:''
   })
   this.getCount()
 },
 del(e){
   var id = e.target.dataset.index
   this.data.list.splice(id,1)
   this.setData({
     list:this.data.list
   })
   this.getCount()
 },
  switch1Change(e){
    var flag = e.detail.value
    this.setData({
      flag
    })
  },
  checkboxChange(e){
    var idx = e.target.dataset.index;
    this.data.list[idx].flag = !this.data.list[idx].flag;
    this.setData({
      list:this.data.list
    })
    this.getCount()
  },
  getCount(){
    var count=0;
    this.data.list.forEach((item)=>{
        if(item.flag) count++
      })
      this.setData({
        count
      })
  },
  onLoad(){
    this.getCount()
  }
})