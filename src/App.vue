<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html,body{
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .font_13{
      font-size: 13px;
  }
  .pull-right{
    float: right;
  }
  .grey{
    color: #919191;
  }
  .iconfont{
    font-size: 14px;
    font-family: 'iconfont'
  }
  @font-face {
    font-family: 'iconfont';  /* project id 717514 */
    src: url('//at.alicdn.com/t/font_717514_hm5h6fx1s.eot');
    src: url('//at.alicdn.com/t/font_717514_hm5h6fx1s.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_717514_hm5h6fx1s.woff') format('woff'),
    url('//at.alicdn.com/t/font_717514_hm5h6fx1s.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_717514_hm5h6fx1s.svg#iconfont') format('svg');
  }
  .el-tree-node__content{
    height: 35px;
  }
  
</style>
