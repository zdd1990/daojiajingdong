
<template>
  <div>
    <div class="loginbox">
      <div class="loginheader">
        <a href="#/my">
          <i class="el-icon-arrow-left"></i>
        </a>
        京东登录
      </div>
      <div class="loginheader_1">
        <div class="loginheader_1box">
          <span class="lg active" @click="lshow">账号密码登录</span>
          <span class="rg" @click="rshow">短信验证码登录</span>
        </div>
      </div>
      <div class="loginheader_2">
        <form id="loginFrm" onsubmit="return false">
					<fieldset>
							<p class="form-group">	
                <div>
                  <label for="username">账号</label>
                  <input type="text" class="form-control" name='username' id="username" placeholder="用户名/邮箱/已验证手机">
                </div>	
							</p>
							<p class="form-group">
                <div>
                  <label for="password">密码</label>
								  <input type="password" class="form-control" name="password" id="password" placeholder="请输入密码">
                </div>	
							</p>
							<div class="form-group">
								<button @click="login2" type="button" class="btn btn-info btn-block">登录</button>
							</div>
					</fieldset>
				</form>
      </div>
      <div class="loginheader_3" style="display:none">
        <form id="loginFrm3" onsubmit="return false">
					<fieldset>
							<p class="form-group">	
                <div>
                  <label for="username3">+86</label>
                  <input type="text" class="form-control" name='username3' id="username3" placeholder="用户名/邮箱/已验证手机">
                  <i class=""></i>
                  <button onclick="return false">获取验证码</button>
                </div>	
							</p>
							<p class="form-group">
                <div>
								  <input type="password" class="form-control" name="password3" id="password3" placeholder="请输入收到的验证码">
                </div>
							</p>
							<div class="form-group">
								<button @click="login3" type="button" class="btn btn-info btn-block">登录</button>
							</div>
					</fieldset>
				</form>
      </div>
      <div class="login_other">
        <span class="forget">
          <i class="el-icon-goods"></i>
          <span>忘记密码</span>
        </span>
        <span class="regist">
          <a href="#/regist">
            <i class="el-icon-mobile-phone"></i>
            <span>手机快速注册</span>
          </a>
        </span>
      </div>
      <div class="login_style">
        <span></span>
        <i>其他登录方式</i>
        <span></span>
        <div class="log">
          <div class="qq"></div>
          <div class="agr">
            <i class="agree">登录即代表您已经同意</i>
            <a class="agree" href="">京东隐私政策</a>
          </div>
        </div>
        
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
  data() {
    return {
      lists: [],
      shops: []
    };
  },
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
  },
  methods: {
    lshow() {
      $(".lg").addClass("active");
      $(".rg").removeClass("active");
      $(".loginheader_2").show();
      $(".loginheader_3").hide();
    },
    rshow() {
      $(".rg").addClass("active");
      $(".lg").removeClass("active");
      $(".loginheader_3").show();
      $(".loginheader_2").hide();
    },
    login2() {
      $.post(
        "/login_message",
        {
          username: loginFrm.username.value,
          password: loginFrm.password.value
        },
        function(res) {
          console.log(res);
        }
      );
    },
    login3() {
      $.post(
        "/login_message",
        {
          username: loginFrm3.username3.value,
          password: loginFrm3.password3.value
        },
        function(res) {
          console.log(res);
        }
      );
    }
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
a {
  color: rgb(53, 52, 50);
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
.loginheader {
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  background: rgb(235, 233, 233);
  text-align: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.842);
}
.loginheader i {
  display: inline;
  float: left;
  line-height: 48px;
  font-size: 18px;
  margin-left: 10px;
}
.loginheader_1 {
  border-bottom: 1px solid rgb(235, 227, 227);
}
.loginheader_1box {
  height: 50px;
  width: 80%;
  margin: 0 auto;
  line-height: 50px;
}
.loginheader_1box .rg {
  float: right;
}
#loginFrm input,
#loginFrm3 input {
  width: 90%;
  float: right;
  border: 0;
  outline: none;
}
#loginFrm div,
#loginFrm3 div {
  width: 90%;
  margin: 0 auto;
  line-height: 38px;
}
#loginFrm3 #username3 {
  width: 65%;
  float: left;
}
#loginFrm3 #password3 {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5px;
}
#loginFrm label,
#loginFrm3 label {
  display: inline;
  margin-right: 5px;
}
#loginFrm3 label {
  float: left;
}
.active {
  display: inline-block;
  border-bottom: 2px solid red;
  line-height: 48px;
}
.login_other {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.login_other .regist {
  float: right;
  display: inline;
}
.login_style {
  width: 90%;
  margin: 0 auto;
  padding-top: 80px;
  padding-left: 25px;
  color: rgb(179, 176, 176);
}
.login_style span {
  float: left;
  display: block;
  width: 30%;
  height: 1px;
  margin-top: 10px;
  border-bottom: 1px solid rgb(170, 169, 169);
}
.login_style i {
  float: left;
  display: block;
  width: 30%;
  text-align: center;
}

.log {
  clear: both;
  width: 95%;
  margin: 0 auto;
  margin-top: 80px;
}
.qq {
  margin: 0 auto;
  width: 40px;
  height: 28px;
  background: url(/static/iconBg.png) no-repeat 0px -113px;
  background-size: 50%;
  margin-bottom: 20px;
}
.log .agr {
  width: 100%;
  margin: 0 auto;
}
.login_style .agree {
  width: 50%;
  border: 0;
}
</style>


