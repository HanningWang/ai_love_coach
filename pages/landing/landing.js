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
    // Navigate to the upload page
    tt.navigateTo({
      url: '/pages/upload/upload'
    });
  },

  onManualDialog() {
    // Implement manual dialog functionality
    console.log("Open manual dialog");
  }
});
