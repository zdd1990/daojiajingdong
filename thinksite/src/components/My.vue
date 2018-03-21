
<template>
  <div>
    <div class="header">
      <div class="fixedtop1" style="z-index:100">
        <a class="map" href="#/index">
          <i class="fa fa-cog"></i>
        </a>
        <a class="message" href="#/index">
          <i class="fa fa-qrcode"></i>
          <i class="fa fa-bell-o"></i>
        </a>
      </div>
    </div>
    <div class="user_message">
      <a class="user_photo" href="#/mlogin"></a>
      <span class="login">登录/注册</span>
    </div>
    <div class="tt user_wallet tu">
      <ul class="p tv widthLength2">
        <li class="walletdata a3">
          <a href="#index">
            <i class="v0"></i>
            <b>我的钱包</b>
          </a>
        </li>
        <li style="width:24%">
          <a href="#index">
            <i class="ty">--</i>
            <b>优惠券</b>
          </a>
        </li>
        <li style="width:24%">
          <a href="#index">
            <i class="ty">--</i>
            <b>白条</b>
          </a>
        </li>
        <li style="width:24%">
          <a href="#index">
            <i class="ty">--</i>
            <b>鲜豆</b>
          </a>
        </li>
      </ul>
    </div>
    <div class="tw">
      <div class="swipe7 b2 tx">
        <ul class="swipe7list">
          <li class="swipe7item">
            <a href="#index">
              <img class="imgstyle" src="/static/0a1.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tt q">
      <a v-for="wicon in wicons" :key="wicon.id" class="tz" href="#index">
        <img class="user_list" :src="'/static/w'+wicon.addr+'.png'" alt="">
        {{wicon.text}}
      </a>
    </div>
    <div class="footer">
      <div class="fixedbottom" style="z-index:100">
        <a href="#/home">
          <i class="fa fa-home"></i>
          <p>首页</p>
        </a>
        <a href="#/classify">
          <i class="fa fa-bars"></i>
          <p>分类</p>
        </a>
        <a href="#/index">
          <i class="fa fa-cart-plus"></i>
           <p>购物车</p>
        </a>
        <a href="#/index">
          <i class="fa fa-calendar"></i>
           <p>订单</p>
        </a>
        <a href="#/my">
          <i class="fa fa-smile-o" style="color:green"></i>
           <p style="color:green">我的</p>
        </a>
      </div>
    </div> 
  </div>
</template>
<script>
import $ from "jquery";
import infiniteScroll from "vue-infinite-scroll";
export default {
  directives: { infiniteScroll },
  //mounted  先加载html,后执行mounted内容
  mounted() {
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      if (top < 60) {
        $(".search").css(
          "backgroundColor",
          "rgba(75,199,84," + (1 - top / 60) + ")"
        );
      }
    });
  },
  methods: {
    loadmore() {
      $.get(
        "http://127.0.0.1/shopimgs",
        res => {
          this.shopimgs = this.shopimgs.concat(res.data);
        },
        "json"
      );
    }
  },
  data() {
    return {
      navlists: [],
      wicons:[]
    };
  },
  created() {
    //获取navlists
    $.get(
      "http://127.0.0.1/navlists",
      res => {
        this.navlists = res.data;
      },
      "json"
    );
    //获取icon
    $.get(
      "http://127.0.0.1/wicons",
      res => {
        this.wicons = res.data;
      },
      "json"
    );
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: normal;
  font-style: normal;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.header {
  overflow: hidden;
}
.fixedtop1 {
  height: 34px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
}
.fixedtop1 a {
  color: white;
  font-size: 1rem;
  line-height: 34px;
  padding: 0 10px;
}
.map {
  float: left;
}
.message {
  float: right;
}
.message i {
  margin-right: 8px;
}
.clearfix :after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.user_message {
  position: relative;
  padding-top: 34px;
  min-height: 108px;
  color: #fff;
  background: #fff url(/static/bgnew.png) center bottom no-repeat;
  background-size: cover;
  overflow: hidden;
}
.user_photo {
  background: url(/static/head_new.png) no-repeat;
  -webkit-background-size: auto 61px;
  background-size: auto 61px;
  display: inline-block;
  width: 61px;
  height: 61px;
  margin: 0 0 0 16px;
  border-radius: 50px;
  vertical-align: middle;
  text-align: center;
}
.tu {
  height: 70px;
}
.tt {
  margin-bottom: 10px;
  padding-left: 15px;
  background-color: white;
}
.p {
  padding-top: 20px;
  padding-bottom: 12px;
  position: absolute;
  left: 0;
  top: 103px;
  width: 100%;
  z-index: 15;
}
.tv {
  background: url(/static/wallet_bg.png) no-repeat;
  background-size: 100%;
  background-position: 0 0;
}
.p .walletdata {
  position: relative;
  text-align: center;
}
.p li {
  display: inline-block;
  width: 32%;
  text-align: center;
}
.tt a {
  display: block;
  position: relative;
  color: #323232;
  font-size: 13px;
  line-height: 44px;
}
.p a {
  line-height: 25px;
  text-align: center;
  font-size: 12px;
}
.widthLength2 li {
  width: 24%;
}
.v0 {
  position: relative;
  left: 50%;
  background: url(/static/icon_packet.png) no-repeat;
  background-size: 25px 25px;
  display: block;
  width: 25px;
  height: 25px;
  margin-left: -12px;
}
.ty {
  display: block;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #323232;
}
.tw {
  padding-left: 0;
}
.tx {
  width: 100%;
  height: 75px;
}
.b2 {
  margin-top: 0;
}
.swipe7 {
  position: relative;
  z-index: 8;
  white-space: nowrap;
  text-align: left;
  overflow: hidden;
}
.swipe7list {
  position: relative;
}
.swipe7item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  text-align: center;
}
.swipe7 a {
  display: block;
  width: 100%;
}
.imgstyle {
  width: 100%;
  height: 75px;
  border: 0;
}
.q {
  padding-left: 0;
  font-size: 0;
}
.q .tz {
  display: inline-block;
  padding: 1px 0 25px 0;
  width: 25%;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  line-height: 35px;
}
.user_list {
  display: block;
  width: 47px;
  height: 47px;
  margin: 0 auto;
}
.fixedbottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 54px;
  background: rgb(234, 240, 234);
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
}
.fixedbottom a {
  margin-top: 10px;
  display: inline;
  text-align: center;
  float: left;
  padding: 0 10px;
}
.fixedbottom a i {
  font-size: 18px;
  color: gray;
}
.fixedbottom a p {
  font-size: 12px;
  color: #333;
}
</style>


