
<template>
  <div>
    <div class="contentbox">
      <div @click="message1" directives class="shopheader" style="min-height:718px;">
        <div class="a07 clearfix">
          <img class="s5" :src="'/static/s'+addr+'.jpg'" alt="">
          <div class="s6">
            <div class="a3f clearfix">
              <h2 class="s7" style="width:100%">{{uname}}-{{uadd}}店</h2>
            </div>
            <p class="a08">
              达达转送
              <var class="line-split"></var>
              <span>50分钟</span>
            </p>
            <p class="a08">
              <span class="a3t">
                基础运费
              </span>
            </p>
          </div>
          <div class="a1j a1k">
            <i class="a11"></i>
          </div>
          <div class="a0f a02 a1g">
            店铺信息
          </div>
          <div class="a2d">
            <ul class="a3h dt">
              <li class="dv a2w">
                <i class="ik" style="background:#FF6C57">首单</i>
                <span class="du">满58减5</span> 
              </li>
              <li class="dv a2w">
                <i class="ik" style="background:#5CA7FF">运费</i>
                <span class="du">满59免运费</span> 
              </li>
            </ul>
            <div class="wz">
              <span>2个活动</span>
              <i class="a2e a02"></i>
            </div>
          </div>
        </div>
        <div style="display:none;" class="a18">
          <div class="store-new-sales-warp">
            <div class="a0a">
              <h2>店铺优惠券</h2>
            </div>
            <div class="a0h">
              <div class="a0i">
                <ul class="a1t">
                  <li class="clearfix">
                    <a href="#index">
                      <div class="aek">
                        <div class="aed">
                          <div class="a1x">
                            <div class="a3s">
                              <div class="aee">满39元可用</div>
                              <div class="aef">2018.03.07 23:59-2018.03.09 23:00</div>
                            </div>
                          </div>
                        </div>
                        <div class="a1y">
                          <span class="a2f">20</span>
                          <span class="a2i">元</span>
                        </div>
                      </div>
                      <div class="a1w">
                        <div class="a1v">
                          <div class="a2q">领券</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="clearfix">
                    <a href="#index">
                      <div class="aek">
                        <div class="aed">
                          <div class="a1x">
                            <div class="a3s">
                              <div class="aee">满29元可用</div>
                              <div class="aef">2018.03.07 23:59-2018.03.09 23:00</div>
                            </div>
                          </div>
                        </div>
                        <div class="a1y">
                          <span class="a2f">15</span>
                          <span class="a2i">元</span>
                        </div>
                      </div>
                      <div class="a1w">
                        <div class="a1v">
                          <div class="a2q">领券</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="a0b a0d">
            <div class="a0a">
              <h2 class="a09">店铺评价</h2>
            </div>
            <ul class="a04 a2">
              <li>
                <div class="a2 commentWrap clearfix">
                  <dl class="scoreWrap k">
                    <dt>4.6</dt>
                    <dd>综合评分</dd>
                  </dl>
                  <dl class="numberWrap">
                    <dt>175</dt>
                    <dd>评论数</dd>
                  </dl>
                </div>
              </li>
              <li class="a0e clearfix">
                <ul class="evaluateListWrap">
                  <li class="list_li">
                    <div class="headerPic">
                      <img class="pic" src="" alt="">
                    </div>
                    <dl class="evaluateList">
                      <dt>
                        <div class="pName">c***8</div>
                        <span class="DateTime">2018-03-08 09:23:42</span>
                      </dt>
                      <dd>
                        <span class="a9a clearfix"></span>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </li>
              <li class="h a3j clearfix">
                <a href="#index">查看用户的全部评价&nbsp;</a>
              </li>
            </ul>
          </div>
          <div class="a0b">
            <div class="a0a">
              <h2 class="a09">店铺信息</h2>
            </div>
            <ul class="a04 a2">
              <li class="aoc clearfix">
                <div class="a2c clearfix">
                  <span class="a05">商品数量</span>
                  <var class="a06">82件</var>
                </div>
                <div class="a2c clearfix">
                  <span class="a05">商品数量</span>
                  <var class="a06">82件</var>
                </div>
                <div class="a2c clearfix">
                  <span class="a05">商品数量</span>
                  <var class="a06">82件</var>
                </div>
                <div class="a2c clearfix">
                  <span class="a05">商品数量</span>
                  <var class="a06">82件</var>
                </div>
                <div class="a2c clearfix">
                  <span class="a05">商品数量</span>
                  <var class="a06">82件</var>
                </div>
                <div class="a2c clearfix">
                  <span class="a05">商品数量</span>
                  <var class="a06">82件</var>
                </div>
              </li>
              <li class="aoc a1a h clearfix">
                <a class="clearfix a1c" href="#index">
                  <span class="a05 a3o">商家资质</span>
                  <strong class="a1b a02"></strong>
                </a>
              </li>
              <li class="aoc a1a h clearfix">
                <a class="clearfix a1c" href="#index">
                  <span class="a05 a3o">举报商家得红包</span>
                  <strong class="a1b a02"></strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style="display:block;" class="fixednav">
        <div class="w6 x2">
          <div class="x3">
            <span class="xb">搜索店内商品</span>
          </div>
        </div>
        <div class="a13 clearfix">
          <div class="shopnavbox"> 
            <ul>
              <li @click="change" style="line-height:28px;" v-for="nav in lists" :key="nav.id">
                <div class="shopnav">{{nav.text}}</div>
              </li>
            </ul>
          </div>
          <div class="a12 store-origin-title">
            <div class="a24">芭比蛋糕(14)</div>
          </div>
          <div class="a1s">
            <div class="a0z x0" style="height:auto">
              <div class="a1l ra ale">
                <ul>
                  <li v-for="shop in shops" :key="shop.id">
                    <a class="linksGood a2" href="#index">
                      <span class="aen">
                        <img class="pic" :src="'/static/l'+shop.ss+'.jpg'" alt="">
                      </span>
                      <dl>
                        <dt>{{shop.text}}</dt>
                        <dd class="aep store-des-h2"></dd>
                        <dd class="aep">
                          <strong class="line_pre">月售1件</strong>
                          <var class="line_split"></var>
                          <strong class="line_after">好评100%</strong>
                        </dd>
                        <dd>
                          <span class="a1f" style="background:#FFCE0B">直降</span>
                        </dd>
                        <dd class="a21 store-good-price-wrap-padding">
                          <label>
                            <em>￥</em>
                            {{shop.price}}
                          </label>
                          <strong class="a2m">
                            <em>￥</em>
                            {{shop.aprice}}
                          </strong>
                        </dd>
                      </dl>
                    </a>
                    <div class="Box">
                      <span @click="reduce(shop)" class="reduce show">-</span>
                      <label>1</label>
                      <span @click="add(shop)" class="add storeSearchCart">+</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cartbox">
        <a @click="message3" style="display:block" class="noshops a4f incartcontent light" href="#index">
          <i class="ag4 nag4"></i>
        </a>
        <i class="mes">购物车是空的</i>
        <router-link :to="'shopcar/'+cars" class="gopay nopay" style="float:right">
          去结算
        </router-link>
        <div class="shopcar">
          <ul>
          <li v-for="car in cars" :key="car.id">
            <a class="linksGood a2" href="#index">
              <el-checkbox v-model="checked"></el-checkbox>
              <span class="aen">
                <img class="pic" :src="'/static/l'+car.ss+'.jpg'" alt="">
              </span>
              <dl>
                <dt>{{car.uname}}</dt>
                <dd class="aep store-des-h2"></dd>
                <dd>
                  <span class="a1f" style="background:#FFCE0B">直降</span>
                </dd>
                <dd class="a21 store-good-price-wrap-padding">
                  <label>
                    <em>￥</em>
                    {{car.price}}
                  </label>
                  <strong class="a2m">
                    <em>￥</em>
                    {{car.aprice}}
                  </strong>
                </dd>
              </dl>
            </a>
            <div class="Box">
              <span class="reduce show">-</span>
              <label></label>
              <span class="add storeSearchCart">+</span>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </div>
    <div class="a0j">
      <i class="a02 a0k"></i>
      <span @click="message2">点击继续购物</span>
    </div>
  </div>
</template>
<script>
import store from "storejs";
import $ from "jquery";
import infiniteScroll from "vue-infinite-scroll";
export default {
  data() {
    return {
      lists: [],
      shops: [],
      cars: [],
      checked: true
    };
  },
  methods: {
    open7() {
      this.$notify({
        title: "自定义位置",
        message: "右上角弹出的消息",
        position: "bottom"
      });
    },
    //添加到购物车
    add(shop) {
      this.cars.push(shop);
      var l = this.cars.length;
      var h = (Number(l) + 1) * 80;
      var a = Number(l) - 1;
      $(".cartbox").css("height", h);
      $(".cartbox").css("bottom", -h + 48);
      $(".cartbox .a4f").removeClass("noshops");
      $(".cartbox .ag4").removeClass("nag4");
      $(".cartbox .gopay").removeClass("nopay");
      $(".cartbox .mes").html(" ");
      $(".cartbox .ag4").html(l);
      $(".shopcar").css("marginTop", "48px");
    },
    //减少购车的商品
    reduce(shop) {
      this.cars.pop(shop);
      var l = this.cars.length;
      var h = (Number(l) + 1) * 80;
      var a = Number(l) - 1;
      if (l == 0) {
        $(".cartbox .ag4").html("");
        $(".cartbox .a4f").addClass("noshops");
        $(".cartbox .ag4").addClass("nag4");
        $(".cartbox .gopay").addClass("nopay");
      } else {
        $(".cartbox").css("height", h);
        $(".cartbox").css("bottom", -h + 48);
        $(".cartbox .a4f").removeClass("noshops");
        $(".cartbox .ag4").removeClass("nag4");
        $(".cartbox .gopay").removeClass("nopay");
        $(".cartbox .mes").html(" ");
        $(".cartbox .ag4").html(l);
        $(".shopcar").css("marginTop", "48px");
      }
    },
    //导航栏的点击事件
    change() {
      $(".shopnav").click(function() {
        $(this).addClass("change");
        $(this).css("background", "white");
      });
    },
    //商铺信息展示
    message1() {
      $(".contentbox .fixednav").hide();
      $(".shopheader .a18").show();
      $(".a0j").css("z-index", "200");
    },
    //商铺信息展示
    message2() {
      $(".shopheader .a18").hide();
      $(".contentbox .fixednav").show();
      $(".a0j").css("z-index", "0");
    },
    //点击购物车
    message3() {
      var l = this.cars.length;
      var h = Number(l) * 60;
      var a = Number(l) - 1;
      if (l > 0) {
        $(".cartbox").css("bottom", "2px");
        $(".shopcar").css("marginTop", "48px");
      } else {
        return;
      }
    }
  },
  props: ["addr", "uname", "uadd"],
  directives: { infiniteScroll },
  created() {
    //获取navlists
    $.get(
      "http://127.0.0.1/shopnavs",
      res => {
        this.lists = res.data;
      },
      "json"
    );
    $.get(
      "http://127.0.0.1/shopshops",
      res => {
        this.shops = res.data;
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
p {
  margin-bottom: 0 import!;
}
li,
ul,
ol,
dl,
dt,
dd {
  list-style: none;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
.shopheader {
  width: 100%;
  padding: 5px 10px;
  background: #d6aa9f url(/static/service.jpg) 0 0 no-repeat;
}
.a07 {
  position: relative;
  color: #fff;
  min-height: 62px;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.s5 {
  position: absolute;
  left: 2px;
  top: 6px;
  width: 52px;
  height: 53px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background-color: #fff;
}
.s6 {
  padding-left: 66px;
  line-height: 20px;
  padding-right: 58px;
  min-height: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shopheader .s7 {
  float: left;
  line-height: 25px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 1px;
  margin-top: 5px;
}
.a08 {
  position: relative;
  line-height: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 10px;
}
.a08 .line-split {
  padding: 0 2px;
}
.line_split {
  display: inline-block;
  width: 8px;
  height: 10px;
  background: url(/static/split.jpg) no-repeat center 2px;
}
.a1k {
  position: absolute;
  right: 0;
}
.a1j {
  top: 10px;
  font-size: 12px;
  color: #fff;
  text-align: right;
}
.a11 {
  float: left;
  width: 22px;
  height: 18px;
  background-image: url(/static/focus.png);
  background-repeat: no-repeat;
  background-position: 0px -2px;
  -webkit-background-size: 60px auto;
  background-size: 60px auto;
  margin-left: 12px;
}
.a02 {
  background-image: url(/static/sprites_4.6.png);
  background-repeat: no-repeat;
  background-size: 220px auto;
}
.a0f {
  position: absolute;
  top: 30px;
  right: 0;
  width: 60px;
  height: 28px;
  font-size: 11px;
  color: #4a9f37;
  text-align: center;
  background-position: -58px -9px;
}
.a07 .a1g {
  width: 54px;
  height: 16px;
  top: 42px;
  text-align: left;
  padding-left: 5px;
  color: #fff;
  font-size: 10px;
  line-height: 14px;
  vertical-align: baseline;
  border-radius: 4px;
  background: rgba(70, 70, 70, 0.5);
}
.ag1:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 15px;
  background-image: url(/static/sprites_4.6.png);
  background-size: 220px auto;
  background-repeat: no-repeat;
  background-position: -150px -146px;
}
.a2d {
  position: relative;
  color: #666666;
  font-size: 0px;
}
.a07 .a2d {
  position: relative;
  padding-top: 14px;
  border-top: none;
  margin-top: 0;
}
.dt {
  display: inline-block;
  width: 86%;
  font-size: 10px;
}
.a07 .dt {
  width: 76%;
}
.dv {
  margin-top: 10px;
  font-size: 10px;
  position: relative;
  color: #999999;
  -webkit-text-size-adjust: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.a2w {
  position: relative;
  padding-left: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  -webkit-line-clamp: 2;
  -ms-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  -ms-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  display: -webkit-box;
  display: -ms-box;
  display: -moz-box;
  display: box;
  line-height: 16px;
  white-space: normal;
}
.a07 .dv {
  margin-bottom: 8px;
  margin-top: 0;
}
.ik {
  display: inline-block;
  padding: 0 2px;
  margin-right: 4px;
  border-radius: 2px;
  color: #ffffff;
  height: 14px;
  line-height: 14px;
  background-color: #fdc44c;
}
.a2w .ik {
  margin-left: -29px;
}
.wz {
  position: absolute;
  top: 3px;
  right: -10px;
  width: 14%;
  font-size: 10px;
  vertical-align: top;
  text-align: right;
  padding-top: 24px;
  height: 40px;
  margin-top: -16px;
  padding-right: 10px;
}
.a07 .wz {
  width: 24%;
  margin-top: 10px;
  padding-top: 1px;
  padding-right: 4px;
  color: #fff;
}
.a02 {
  background-image: url(/static/sprites_4.6.png);
  background-repeat: no-repeat;
  background-size: 220px auto;
}
.a2e {
  display: inline-block;
  width: 18px;
  height: 10px;
  text-align: right;
  background-position: 2px -183px;
}
.a07 .a2e {
  background-position: -148px -148px;
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
  top: 10px;
  right: 0;
  width: 100%;
  background: #f8f8f8;
}
.fixednav {
  position: fixed;
  top: 108px;
  bottom: 48px;
  left: 0;
  padding-bottom: 45px;
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.4);
  transform: translate3d(0, 0, 0);
  transition: transform 400ms ease-in-out;
}
.nav-item a {
  color: #333;
  font-size: 13px;
}
.col {
  min-height: 596px;
}
.col-auto {
  position: fixed;
  top: 100px;
  left: 0;
  height: 100%;
  background: #f8f8f8;
  padding-right: 0;
  z-index: 10;
}
.nav-tabs .nav-link.active {
  color: rgba(6, 179, 6, 0.534);
}
.col div {
  font-size: 13px;
}
.wo {
  padding-top: 48px;
  padding-left: 95px;
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
.a0j {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 46px;
  padding-top: 10px;
  color: #666;
  text-align: center;
  background: #f2f8f3;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
}
.a02 {
  background-image: url(/static/sprites_4.6.png);
  background-repeat: no-repeat;
  background-size: 220px auto;
}
.a0k {
  display: block;
  width: 15px;
  height: 8px;
  margin: 0 auto 5px;
}
.a0j .a02 {
  background-position: -15px -18px;
}
.el-menu {
  width: 84px;
}

.w6 {
  position: fixed;
  z-index: 12;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  color: #555;
  font-size: 17px;
  text-align: center;
  line-height: 44px;
  background-color: #fff;
}
.x2 {
  position: relative;
  padding-top: 1px;
  background: #eaeaea;
  height: 40px;
  line-height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
}
.x2:after {
  height: 1px;
  content: "";
  width: 100%;
  border-bottom: 1px solid #cfcfcf;
  position: absolute;
  bottom: 0px;
  right: 0;
  left: 0;
  transform: scaleY(0.5);
  z-index: 10;
}
.x3 {
  position: relative;
  background: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 2px;
}
.x2 .x3 {
  height: 28px;
  line-height: 26px;
  text-align: left;
}
.xb {
  font-size: 13px;
  color: #999;
  text-align: center;
  background: url(/static/sprites.png) no-repeat;
  background-size: 44px auto;
  background-position: -6px -13px;
  padding-left: 28px;
}
.a13 {
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.a13 .shopnavbox {
  position: absolute;
  left: 0px;
  top: 0;
  bottom: 50px;
  z-index: 10;
  background-color: #fff;
  overflow: auto;
}
.a13 .shopnav {
  min-width: 0px;
  width: 84px;
  font-size: 14px;
  text-align: center;
  line-height: 48px;
  background: #e8e8e8;
}
.el-icon-arrow-down:before {
  content: "";
}
.a12 {
  position: absolute;
  left: 84px;
  right: 0;
  top: 0;
  height: 31px;
  color: #666666;
  font-size: 12px;
  line-height: 30px;
  background-color: #f4f4f4;
  white-space: nowrap;
  overflow: hidden;
  z-index: 11;
  text-overflow: ellipsis;
}
.a24 {
  padding-left: 12px;
}
.a1s {
  position: absolute;
  left: 84px;
  right: 0;
  top: 0;
  bottom: 20px;
  z-index: 10;
  background-color: #fff;
  overflow: auto;
}
.x0 {
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 40px;
  position: relative;
}
.a0z {
  padding-top: 51px;
}
.ra {
  margin-right: 5px;
}
.a0z .a1l {
  padding-bottom: 20px;
  background: #fff;
  overflow: auto;
}
.x0 .ra {
  clear: both;
  background-color: #fff;
  margin: 0;
}
.x0 .ra li {
  position: relative;
  padding-left: 8px;
}
.a2 {
  position: relative;
}
.a2:before {
  height: 1px;
  content: "";
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  position: absolute;
  bottom: -1px;
  right: 0;
  transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5);
  z-index: 10;
}
.x0 .ra li .linksGoods {
  display: block;
  overflow: hidden;
  padding: 10px 10px 10px 0;
}
.aen {
  display: inline-block;
  position: relative;
  float: left;
  padding-top: 10px;
}
img {
  border: 0;
  vertical-align: auto;
}
.ra .pic {
  width: 65px;
  height: 65px;
  display: inline-block;
  border-radius: 2px;
  float: left;
}
.ale .pic {
  width: 110px;
  height: 110px;
}
.ra dl {
  margin-left: 70px;
}
.ale dl {
  margin-left: 120px;
}
.ra dl dt {
  font-size: 14px;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 5px;
  max-height: 42px;
  line-height: 21px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.aep {
  font-size: 0;
  color: #999;
}
.ra dl dd {
  padding-left: 5px;
  overflow: hidden;
  padding-top: 1px;
  padding-bottom: 1px;
}
.ra dl .store-des-h2 {
  padding-top: 0;
  margin-bottom: 0;
  font-size: 11px;
  max-height: 20px;
  line-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.line_pre {
  display: inline-block;
  font-size: 11px;
}
.line_split {
  display: inline-block;
  width: 8px;
  height: 10px;
  background: url(/static/split.jpg) no-repeat center 2px;
}
.line_after {
  display: inline-block;
  padding-left: 2px;
  font-size: 11px;
}
.ra dl dd span {
  color: #fff;
  border-radius: 2px;
  display: inline-block;
  padding: 1px 2px;
  line-height: 14px;
  font-size: 10px;
}
.ale .a21 {
  padding-right: 0;
}
.ale .store-good-price-wrap-padding {
  padding-bottom: 30px;
}
.ra li label {
  font-size: 16px;
  color: #ff3434;
  padding-top: 0;
  white-space: nowrap;
  display: inline-block;
}
.ra li label em {
  font-style: normal;
  font-size: 10px;
}
.a2m {
  padding-left: 5px;
  color: #999;
  font-size: 13px;
  text-decoration: line-through;
  display: inline-block;
}
.a2m em {
  text-decoration: line-through;
  font-size: 10px;
}
.ra .Box {
  position: absolute;
  right: 0;
  bottom: 32px;
}
.ra .Box span {
  position: absolute;
  right: 52px;
  padding: 6px;
  text-indent: -99999px;
  background-image: url(/static/addNumSprite.png);
  background-repeat: no-repeat;
  -webkit-background-size: 400% 100%;
  background-size: 400% 100%;
  width: 28px;
  height: 28px;
  vertical-align: top;
  border: 0 none;
}
.als .ra .Box span.reduce {
  background: #fff;
}
.ra .Box span.reduce {
  background-position: -42px 0;
}
.ra .Box .show {
  display: inline-block;
}
.ale .Box span {
  background-color: transparent;
}
.ra .Box span.add {
  background-position: 0 0;
  right: 0;
}
.ra .Box label {
  position: absolute;
  right: 30px;
  margin-top: 0;
  color: #333333;
  font-size: 12px;
  padding: 0;
  width: 24px;
  height: 28px;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  line-height: 28px;
  vertical-align: top;
  -webkit-background-origin: content-box;
  background-origin: content-box;
  background-color: transparent;
}
.cartbox {
  position: fixed;
  z-index: 101;
  left: 0;
  width: 100%;
  height: 50px;
  bottom: 0px;
  transition: transform 0.5s ease-out 0s;
  background-color: #e8e8e8;
}
.a4f {
  position: absolute;
  z-index: 102;
  left: 0;
  top: -13px;
  width: 80px;
  height: 58px;
  background: url(/static/cart.png) 10px 5px no-repeat;
  background-position: 10px -70px;
  background-size: 50px 125px;
  transition: transform 0.5s ease-out 0s;
}
/* 有购物商品的时候 */
.ag4 {
  position: absolute;
  top: 5px;
  left: 44px;
  padding: 0 5px;
  height: 15px;
  line-height: 15px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: #ff5d5c;
  border-radius: 7px;
  font-size: 10px;
}
.cartbox .gopay {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 30%;
  height: 50px;
  background: rgb(68, 190, 68);
  text-align: center;
  line-height: 50px;
  color: white;
}
/* 没有购物商品的时候 */
.noshops {
  position: absolute;
  z-index: 50;
  left: 0;
  top: 0;
  width: 80px;
  height: 48px;
  background: url(/static/cart.png) 10px 5px no-repeat;
  background-size: 50px 125px;
}
.cartbox .nopay {
  background: rgb(192, 194, 192);
}
.nag4 {
  display: none;
}
.mes {
  display: block;
  clear: both;
  width: 30%;
  margin-left: 50px;
  text-align: center;
  line-height: 48px;
  color: gray;
}
.shopcar {
  position: absolute;
  clear: both;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
}
.shopcar .pic {
  width: 60px;
  height: 60px;
}
.shopcar a {
  display: block;
}
.el-checkbox {
  float: left;
  line-height: 60px;
  margin: 5px;
}
.shopcar li {
  position: relative;
}
.shopcar .Box {
  position: absolute;
  right: 0;
  bottom: 32px;
}
.change {
  color: green;
  background: white;
}
</style>


