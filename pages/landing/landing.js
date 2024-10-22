Page({
  data: {
    activeTab: "love-dialogue",
    categories: ['随机', '赞美', '笑话', '音乐', '美食', '电影', '邀约', '游戏'],
    categoryEmojis: {
      '随机': '🎲',
      '赞美': '❤️',
      '笑话': '😂',
      '音乐': '🎵',
      '美食': '🍔',
      '电影': '🎬',
      '邀约': '📅',
      '游戏': '🎮'
    }
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.currentTarget.dataset.tab
    });
  },

  onUploadChat() {
    // Implement chat upload functionality
    console.log("Upload chat screenshot");
  },

  onManualDialog() {
    // Implement manual dialog functionality
    console.log("Open manual dialog");
  }
});
