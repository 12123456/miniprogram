Component({
  mixins: [],
  data: {
    imgarr: ['../../image/avatar.png', '../../image/avatar.png', '../../image/avatar.png', '../../image/avatar.png', '../../image/avatar.png']
  },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    imgYu(event) {//图片点击事件
      var index = event.currentTarget.dataset.index;//获取data-index
      var imgList = event.currentTarget.dataset.list;//获取data-list
      //图片预览
      my.previewImage({
        current: index, // 当前显示图片的下标
        urls: imgList // 需要预览的图片http链接列表
      })
    },
  },

});
