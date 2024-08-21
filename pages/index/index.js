// index.js
Page({
  data: {
    // Add data properties if needed
  },
  loginHandler () {
    // Logic for login button
    // Navigate to the final interface
    wx.navigateTo({
      url: '../pages/final/final'
    })
  },
  toRegister(){
    wx.navigateTo({
      url: '../register/register?username=' + this.data.username,
    })
  },
  

  registerHandler(){
    // Logic for register button
    // Navigate to the registration interface
    wx.navigateTo({
      url: '../pages/registration/registration'
    })
  }
})

