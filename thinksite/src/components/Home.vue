
<template>
  <div v-infinite-scroll="loadmore">
    <div class="header">
      <div class="fixedtop" style="z-index:100">
        <a class="map" href="#/index">
          <i class="fa fa-map-marker"></i>
          您当前的位置
          <i class="fa fa-caret-down"></i>
        </a>
        <a class="message" href="#/index">
          <i class="fa fa-commenting-o"></i>
        </a>
      </div>
    </div>
    <div class="main">
      <div class="search">
        <div class="searchbox">
          <i class="fa fa-search"></i>搜索
        </div>
        <div class="hotword">
          <a v-for="hotword in hotwords" :key="hotword.id" href="">{{hotword.text}}</a>
        </div>
      </div>
      <a href="#index" style="display:block">
        <img style="width:100%" src="/static/fb.gif" alt="">
      </a>
      <div class="nav">
        <div class="navbox">
          <ul>
            <li class="navlist" v-for=" nav in navlists" :key="nav.id">
              <a href="#index">
                <img :src="'/static/d'+nav.addr+'.png'" alt="">
                <div>{{nav.text}}</div> 
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="slideshow">
        <div class="slideshowbox">
          <el-carousel style="height:100%">
            <el-carousel-item v-for="item in slideimg" :key="item.id">
              <a href="/#index">
                <img style="width:100%;" :src="'/static/c'+item.addr+'.jpg'" alt="">
              </a>  
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="recomment">
        <ul>
          <li v-for="recom in recoms" :key="recom.id" style="width:32%">
            <a href="/#index">
              <h3>{{recom.text}}</h3>
              <span>{{recom.hot}}</span>
              <img :src="'/static/a'+recom.addr+'.png'" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="seckill">
        <div class="secnav">
          <a href="#index">更多</a>
        </div>
        <div class="seclist">
          <a v-for="seckill in seckills" :key="seckill.id" href="#index">
            <p class="secimg">
            <img :src="'/static/'+seckill.addr+'.jpg'" alt="">
            <span>11</span>
            </p>
            <p class="secp">
              ￥
              <i>{{seckill.price}}</i>
            </p>
            <p class="secd">
              ￥
              <i>{{seckill.d}}</i>
            </p>
          </a>
        </div>
      </div>
      <div class="slidehot">
        <div class="slidehotbox">
          <el-carousel style="height:100%;">
            <el-carousel-item style="trigger:click" v-for="slidehot in slidehots" :key="slidehot.id">
              <a href="/#index">
                <img style="width:100%;" :src="'/static/h'+slidehot.addr+'.jpg'" alt="">
              </a>  
            </el-carousel-item>
          </el-carousel>
       
        </div>
      </div>
    </div>
    <div class="shops">
      <div class="shopbox">
        <div class="nearshops">
          <div>
            <span class="el-icon-minus"></span>
            <span>附近的店铺</span>
            <span class="el-icon-minus"></span>
          </div>
        </div>
        <ul>
          <li class="shoplists" v-for="shopcon in shopimgs" :key="shopcon.id">
            <div class="shop_a">
              <router-link :to="'shop/'+shopcon.addr+'/'+shopcon.uname+'/'+shopcon.uadd" class="shop_b">
                <a class="shop_photo" href="#index">
                  <span class="clearfix">
                    <img :src="'/static/s'+shopcon.addr+'.jpg'" alt="">
                  </span>
                </a>
                <div class="shop_con">
                  <a class="shop_conbox" href="#index">
                    <div class="shop_name clearfix">
                      <h2>{{shopcon.uname}}-{{shopcon.uadd}}店</h2>
                    </div>
                    <div class="send_con">
                      <strong class="sending">
                        <span class="sender">大大转送</span>
                        <span class="send_">-</span>
                        <span class="send_time">51分钟</span>
                      </strong>
                    </div>
                    <div class="sales">
                      <p class="number">
                        <span class="star">{{shopcon.star}}</span>
                        <span class="l"></span>
                        月销售量{{shopcon.num}}单
                      </p>
                    </div>
                    <span class="freight">
                      0元起送，距离2km,基础运费4元</span>
                  </a>
                  <div>
                    <div class="discounts">
                      <div class="disbox">
                        <a href="#index">
                          <ul>
                            <li class="discount">
                              <i>领劵</i>
                              <span>满39减12,满29减8</span>
                            </li>
                            <li class="carriage">
                              <i>运费</i>
                              <span>满49减4元运费</span>
                            </li>
                          </ul>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </li>
          <button @click="loadmore">加载更多.....</button>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="fixedbottom" style="z-index:100">
        <a href="#/home">
          <i class="fa fa-home" style="color:green"></i>
          <p style="color:green">首页</p>
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
          <i class="fa fa-smile-o"></i>
           <p>我的</p>
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
      users: [],
      navlists: [],
      hotwords: [],
      slideimg: [],
      recoms: [],
      seckills: [],
      slidehots: [],
      shopimgs: []
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
    //获取热门词汇
    $.get(
      "http://127.0.0.1/hotword",
      res => {
        this.hotwords = res.data;
      },
      "json"
    );
    //获取轮播图
    $.get(
      "http://127.0.0.1/slideimg",
      res => {
        this.slideimg = res.data;
      },
      "json"
    );
    //获取recoms
    $.get(
      "http://127.0.0.1/recoms",
      res => {
        this.recoms = res.data;
      },
      "json"
    );
    //获取限时秒杀相关内容
    $.get(
      "http://127.0.0.1/seckills",
      res => {
        this.seckills = res.data;
      },
      "json"
    );
    //获取轮播图热门
    $.get(
      "http://127.0.0.1/slidehots",
      res => {
        this.slidehots = res.data;
      },
      "json"
    );
    //获取 店铺图片
    $.get(
      "http://127.0.0.1/shopimgs",
      res => {
        this.shopimgs = res.data;
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
  background: rgba(75, 199, 84, 1);
  overflow: hidden;
}
.main {
  overflow: hidden;
}
.search {
  margin-top: 44px;
  overflow: hidden;
  background: rgba(75, 199, 84, 1);
}
.searchbox {
  background: rgb(255, 255, 255);
  line-height: 30px;
  border-radius: 14px;
  width: 95%;
  margin: 0 auto;
  text-align: center;
  color: rgb(177, 175, 175);
}
.hotword {
  width: 95%;
  color: white;
  margin: 0 auto;
  text-align: center;
  height: 30px;
  overflow: hidden;
}
.hotword a {
  color: white;
  padding: 0 8px;
  font-size: 0.5rem;
  line-height: 30px;
  /* display:inline-block;设置以块的模式显示 */
  display: inline-block;
}
.fixedtop {
  height: 44px;
  background: rgb(75, 199, 84);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
}
.fixedtop a {
  color: white;
  font-size: 1rem;
  line-height: 44px;
  padding: 0 10px;
}
.map {
  float: left;
}
.message {
  float: right;
}
.nav {
  width: 100%;
}
.navbox {
  padding-bottom: 15px;
  position: relative;
  text-align: left;
  overflow: hidden;
}
.navbox ul {
  position: relative;
  overflow: hidden;
  white-space: normal;
}
.navlist {
  list-style: none;
  position: relative;
  width: 20%;
  text-align: center;
  font-size: 15px;
  color: #333;
  font-weight: 700;
  margin-left: 0;
  vertical-align: top;
  position: relative;
  display: inline-block;
}
.navlist a {
  display: block;
  width: 82px;
  margin-top: 15px;
  vertical-align: top;
  line-height: 12px;
  padding: 0;
  font-size: 15px;
}
.navlist a img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 40px;
}
.navlist a div {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.733);
}
.slideshow {
  padding: 0px 10px 0 10px;
  background: #fff;
}
.slideshowbox {
  height: 100px;
  position: relative;
  z-index: 8;
  white-space: nowrap;
  text-align: left;
  overflow: hidden;
}
.el-carousel__container {
  height: 100px;
  /* list-style-type: disc; */
}
.el-carousel__indicator {
  list-style-type: disc;
}
.recomment {
  padding: 0px 10px 0px 10px;
  background: #fff;
}
.recomment ul {
  display: -webkit-box;
  -webkit-box-pack: justify;
}
.recomment ul li {
  background-color: #fbfbfb;
  text-align: center;
  padding-bottom: 6px;
  display: -moz-box;
  display: -webkit-box;
  -moz-box-pack: center;
  -webkit-box-pack: center;
}
.recomment ul li a {
  display: inline-block;
  width: 100%;
}
.recomment ul li h3 {
  margin-top: 13px;
  color: #333333;
  font-size: 14px;
}
.recomment ul li span {
  margin-top: 5px;
  font-size: 12px;
  color: #ff5757;
  display: block;
  height: 12px;
  line-height: 12px;
}
.recomment ul li img {
  border: 0;
  width: 60px;
  height: 60px;
  margin-top: 10px;
}
.seckill {
  background: #fff;
}
.secnav {
  height: 30px;
  line-height: 30px;
  padding: 5px 10px;
  background: url(/static/seckill-title.png) 10px center no-repeat;
  background-size: auto 20px;
}
.secnav a {
  float: right;
  color: #ff5757;
  font-size: 12px;
  background: url(/static/seckill-right.png) center right no-repeat;
  background-size: auto 12px;
  padding-right: 10px;
}
.seclist {
  margin-top: 5px;
  padding-bottom: 5px;
  width: auto;
  white-space: nowrap;
  overflow: auto;
  font-size: 0;
  position: relative;
  padding-right: 10px;
}
.seclist a {
  display: inline-block;
  font-size: 12px;
  text-align: center;
  margin: 0 0 0 10px;
  width: 20%;
  overflow: hidden;
}
.seclist a p {
  margin: 0;
}
.secimg {
  position: relative;
}
.secimg img {
  border: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.secimg span {
  position: absolute;
  z-index: 10;
  height: 11px;
  line-height: 11px;
  font-size: 9px;
  color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 87, 87, 0.6);
  padding: 1px 5px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.secp {
  color: #ff5757;
}
.secp i {
  font-size: 16px;
  font-weight: bold;
}
.secd {
  color: #999;
}
.secd i {
  font-size: 12px;
  text-decoration: line-through;
}
.slidehot {
  background: #ffffff;
}
.slidehotbox {
  margin: 0 10px;
}
.slidehotbox ul {
  position: relative;
  width: 500%;
  left: -200%;
  transform: translate3d(0px, 0px, 0px);
}
.slidehotbox ul li {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 20%;
  text-align: center;
}
.slidehotbox ul li a {
  display: block;
  width: 100%;
}
.slidehotbox ul li a img {
  display: block;
  width: 100%;
}
.slidehotimg {
  float: left;
  width: 100%;
}
.nearshops {
  font-size: 14px;
  line-height: 48px;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #70704e;
  text-align: center;
  position: relative;
  background-color: #fff;
}
.nearshops span {
  position: relative;
  padding: 0 5px;
  background-color: #fff;
  display: inline-block;
  height: 48px;
  line-height: 48px;
  font-size: 17px;
  font-weight: bold;
  color: #333;
}
.shoplists {
  position: relative;
  padding: 15px 10px;
  min-height: 70px;
  border-top: 1px solid #e7e9e4;
  background: #fff;
}
.shop_a {
  position: relative;
  font-size: 0;
  min-height: 55px;
}
.shop_b {
  position: relative;
}
.shop_photo {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  float: none;
}
.shop_photo span {
  position: relative;
  display: block;
}
.shop_photo span img {
  float: left;
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  display: inline-block;
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
.shop_con {
  font-size: 12px;
  color: #999;
  margin-left: 76px;
}
.shop_conbox {
  display: block;
  min-height: 66px;
}
.shop_name {
  height: 20px;
  overflow: hidden;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: flex;
  -moz-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.shop_name h2 {
  font-size: 16px;
  color: #333;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin-top: 0;
  font-weight: bold;
  flex: 1;
}
.send_con {
  font-size: 0;
  padding-top: 10px;
  overflow: hidden;
}
.sending {
  display: inline-block;
  border: 1px solid #16a9ff;
  font-size: 0;
  border-radius: 2px;
  color: #16a9ff;
  line-height: 0;
  height: 15px;
  overflow: hidden;
}
.sender {
  display: inline-block;
  line-height: 1;
  padding: 2px;
  font-size: 10px;
}
.send_ {
  line-height: 1;
  font-size: 10px;
}
.send_time {
  display: inline-block;
  padding: 2px;
  line-height: 1;
  font-size: 10px;
}
.sales {
  height: 14px;
  margin-top: 8px;
  overflow: hidden;
  font-size: 0;
}
.number {
  font-size: 11px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  display: inline-block;
}
.number .l {
  display: inline-block;
  width: 8px;
  height: 10px;
  background: url(/static/split.jpg) no-repeat center 2px;
}
.number .star {
  height: 12px;
  color: red;
  overflow: hidden;
  display: inline-block;
  position: relative;
}
.freight {
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.discounts {
  position: relative;
  padding-bottom: 0;
  margin-top: 12px;
}
.disbox {
  position: relative;
  color: #666666;
}
.disbox a {
  position: relative;
  color: #666666;
}
.disbox i {
  color: white;
  border-radius: 2px;
  display: inline-block;
  padding: 0 2px;
  margin-right: 4px;
  color: #ffffff;
  height: 14px;
  line-height: 14px;
}
.discount i {
  background: #5fbc65;
}
.carriage i {
  background: #5ca7ff;
}
.fixedbottom{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  height: 54px;
  background: rgb(234, 240, 234);
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
}
.fixedbottom a{
  margin-top:10px;
  display: inline;
  text-align:center;
  float:left;
  padding: 0 10px;
}
.fixedbottom a i{
  font-size:18px;
  color:gray;
}
.fixedbottom a p{
  font-size:12px;
  color:#333;
}
</style>


