Page({
  data: {
    imageUrl: '',
    inputText: '',
    currentMode: 0,
    modes: [
      { title: '绅士模式', class: 'love-coach', icon: 'gentle' },
      { title: '恋爱达人', class: 'emotion-analysis', icon: 'expert' },
      { title: '直击灵魂', class: 'conversation-suggestion', icon: 'soul' }
    ],
    mockResults: [
      "这是第一条建议，可能会有两到三行的文字内容。建议要有针对性和实用性。",
      "第二条建议会更加具体，针对用户的问题给出解决方案。记住要保持积极和鼓励的态度。",
      "最后一条建议可能会总结前面的内容，并给出一个长期的建议或者鼓励。加油！"
    ],
    showResults: false,
    inputLocked: false,
    actionButtonText: '教恋一下'
  },

  onLoad(options) {
    console.log('hello')
    console.log(options.imageUrl);
    if (options.imageUrl) {
      this.setData({
        imageUrl: decodeURIComponent(options.imageUrl)
      });
    }
  },

  chooseImage() {
    if (this.data.imageUrl) {
      return; // Don't open album if image is already uploaded
    }
    tt.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          imageUrl: res.tempFilePaths[0]
        });
      }
    });
  },

  handleInput(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  handleModeChange() {
    let newMode = (this.data.currentMode + 1) % this.data.modes.length;
    this.setData({
      currentMode: newMode
    });
  },

  handleAction() {
    if (!this.data.imageUrl) {
      tt.showToast({
        title: '请先上传聊天截图',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    console.log('Image URL:', this.data.imageUrl);
    console.log('Selected Mode:', this.data.modes[this.data.currentMode].title);
    console.log('Input Text:', this.data.inputText);

    this.setData({
      showResults: true,
      inputLocked: true,
      actionButtonText: '再来！'
    });
  }
});
