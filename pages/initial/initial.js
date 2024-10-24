// /Users/hanningwang/miniprograms/ai_coach_love/pages/initial/initial.js
Page({
  data: {
    imageSrc: '/images/placeholder.svg',
  },
  onLoad: function (options) {
    // You can add any initialization logic here if needed
  },
  navigateToUpload: function() {
    tt.chooseImage({
      count: 1,
      sourceType: ['album'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        console.log('Selected file path ' + encodeURIComponent(tempFilePath))
        tt.navigateTo({
          url: `/pages/upload/upload?imageUrl=${encodeURIComponent(tempFilePath)}`
        });
      },
      fail: (err) => {
        console.error('Failed to choose image:', err);
        tt.showToast({
          title: '选择图片失败',
          icon: 'none'
        });
      }
    });
  },
  navigateToManualChat: function() {
    // Implement navigation to manual chat page
    tt.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },
  navigateToLoveQuotes: function() {
    // Implement navigation to love quotes page
    tt.navigateTo({
      url: '/pages/landing/landing?activeTab=love-words'
    });
  }
})
