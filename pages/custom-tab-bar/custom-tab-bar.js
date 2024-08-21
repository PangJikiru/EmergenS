// custom-tab-barf/custom-tab-bar.js
Component({
  data: {
    selected: 0,
    color: "#707070",
    selectedColor: "#00A0E9",
    list: [
      {
        pagePath: "/pages/home/home",
        text: "Home",
        iconPath: "/images/home.png",
        selectedIconPath: "/images/home.png"
      },
      {
        pagePath: "/pages/messages/messages",
        text: "Messages",
        iconPath: "/images/messages.png",
        selectedIconPath: "/images/messages.png"
      },
      {
        pagePath: "/pages/notifications/notifications",
        text: "Notifications",
        iconPath: "/images/notifications.png",
        selectedIconPath: "/images/notifications.png"
      },
      {
        pagePath: "/pages/profile/profile",
        text: "Profile",
        iconPath: "/images/profile.png",
        selectedIconPath: "/images/profile.png"
      }
    ],
    translate: 0 // To control the sliding of the highlight background
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      const index = data.index;

      this.setData({
        selected: index,
        translate: index * 25 + '%' // Move the background based on tab index
      });

      wx.switchTab({ url });
    }
  }
})
