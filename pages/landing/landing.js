Page({
  data: {
    activeTab: "love-dialogue",
    categories: ['随机', '夸赞', '笑话', '音乐', '美食', '电影', '邀约', '游戏'],
    categoryImages: {
      '随机': 'random',
      '夸赞': 'complishment',
      '笑话': 'joke',
      '音乐': 'music',
      '美食': 'food',
      '电影': 'movie',
      '邀约': 'invite',
      '游戏': 'game'
    },
    loveWords: [] // We'll populate this in onLoad
  },

  onLoad: function(options) {
    if (options.activeTab) {
      this.setData({
        activeTab: options.activeTab
      });
    }

    // Populate the loveWords array
    const loveWords = this.data.categories.map(category => ({
      text: category,
      src: `/assets/${this.data.categoryImages[category]}.png`
    }));

    this.setData({ loveWords });
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.currentTarget.dataset.tab
    });
  },

  onUploadChat() {
    tt.chooseImage({
      count: 1,
      sourceType: ['album'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        console.log('Selected file path is ' + tempFilePath);
        tt.navigateTo({
          url: `/pages/upload/upload?imageUrl=${encodeURIComponent(tempFilePath)}`
        });
      },
      fail: (err) => {
        console.error('Failed to choose image:', err);
      }
    });
  },

  onManualDialog() {
    // Implement manual dialog functionality
    console.log("Open manual dialog");
  },

  navigateToDictionary(event) {
    const { category, src } = event.currentTarget.dataset;
    console.log(category);
    console.log(src);
    tt.navigateTo({
      url: `/pages/dictionary/dictionary?category=${encodeURIComponent(category)}&src=${encodeURIComponent(src)}`,
    });
  }
});
