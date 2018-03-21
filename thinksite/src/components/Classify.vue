
<template>
  <div directives>
    <div class="header">
      <div class="searchtop" style="z-index:100">
        <div class="searbox">
          <i class="fa fa-search"></i>
          <i>搜索附近的商家,商品</i>  
        </div>
      </div>
      <div class="fixednav">
        <b-tabs vertical style="height:100%">
          <b-tab v-for="classnav in classnavs" :key="classnav.id" :title="classnav.text" active>
            <dl class="wo" v-for="navlist in classlists" :key="navlist.id">
              <dt class="wp">{{navlist.text}}</dt>
              <dd class="wq">
                <a v-for="classimg in classlists" :key="classimg.id" href="#index">
                  <img :src="'/static/b'+classimg.ss+'.jpg'" alt="">
                  <span>{{classimg.uname}}</span>
                </a>
              </dd>
            </dl>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="footer">
      <div class="fixedbottom" style="z-index:100">
        <a href="#/home">
          <i class="fa fa-home"></i>
          <p>首页</p>
        </a>
        <a href="#/index">
          <i class="fa fa-bars" style="color:green"></i>
          <p style="color:green">分类</p>
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
      classnavs: [],
      classlists: [],
      navimgs: []
    };
  },
  created() {
    //获取navlists
    $.get(
      "http://127.0.0.1/classnavs",
      res => {
        this.classnavs = res.data;
      },
      "json"
    );
    $.get(
      "http://127.0.0.1/classlists",
      res => {
        this.classlists = res.data;
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
.searbox {
  background: rgb(255, 255, 255);
  line-height: 30px;
  border: 1px solid rgba(128, 128, 128, 0.308);
  width: 95%;
  margin: 10px auto;
  color: rgb(177, 175, 175);
}
.searbox i {
  margin-left: 10px;
}
.searchtop {
  height: 44px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: #f8f8f8;
}
.fixednav {
  width: 100%;
  height: 100%;
  background:white;
}
.nav-item a {
  color: #333;
  font-size: 13px;
}
.col{
  min-height:596px;
}
.col-auto {
  position: fixed;
  top: 64px;
  left: 0;
  height:100%;
  background: #f8f8f8;
  padding-right: 0;
  z-index:10;
}
.nav-tabs .nav-link.active {
  color: rgba(6, 179, 6, 0.534);
}
.col div {
  font-size: 13px;
}
.wo {
  padding-top:48px;
  padding-left:95px;
}
.wp {
  height: 19px;
  margin-top: 9px;
  margin-bottom: 9px;
  margin-left: 7%;
  line-height: 19px;
  font-size: 13px;
  color: #666666;
}
.wq a {
  display: inline-block;
  width: 33%;
  min-height: 94px;
  margin-top: 6px;
}
.wq a img {
  display: block;
  width: 62px;
  height: 62px;
  margin: 0 auto;
  background-color: #f4f4f4;
}
.wq a span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #7d7d7d;
  padding: 8px 0;
}
.fixedbottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 54px;
  background: #f8f8f8;
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


