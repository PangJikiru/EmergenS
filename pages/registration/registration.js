// pages/registration/registration.js
Page({
  data: {
    // Add data properties if needed
  },
  registerHandler: function () {
    // Logic for register button
    // Navigate to the final interface
    wx.navigateTo({
      url: '/pages/final/final'
    })
  },
  backHandler: function () {
    // Logic for back button
    // Navigate back to the initialization interface
    wx.navigateBack({
      delta: 1
    })
  }
})
