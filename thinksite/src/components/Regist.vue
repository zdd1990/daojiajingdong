
<template>
  <div>
    <div class="loginbox">
      <div class="loginheader">
        <i class="el-icon-arrow-left"></i>
        京东注册
      </div>
      <div class="loginheader_3">
       <form id="registerFrm">
			<fieldset>
				<p class="form-group">
					<label for="phone">手机</label>
					<input type="text" class="form-control" name='phone' id="phone">
				</p>
				<p class="form-group">
					<label for="password">密码</label>
					<input type="password" class="form-control" name="password" id="password">
				</p>
				<p class="form-group">
					<label for="repassword">确认密码</label>
					<input type="password" class="form-control" name="repassword" id="repassword">
				</p>
				<p class="form-group">
					<button type="submit" class="save btn btn-info btn-block">注册</button>
				</p>
			</fieldset>
		</form>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import infiniteScroll from "vue-infinite-scroll";
export default {
  props: ["addr", "uname", "add"],
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
.loginheader_3 {
  padding-top: 20px;
  padding-left: 10px;
  padding-right:10px;
}
#loginFrm3 input {
  width: 95%;
  float: right;
  border: 0;
  outline: none;
}
#loginFrm3 div {
  width: 90%;
  margin: 0 auto;
  line-height: 38px;
}
#loginFrm3 #username3 {
  width: 65%;
  float: left;
}

#loginFrm label,
#loginFrm3 label {
  display: inline;
  margin-right: 5px;
}
#loginFrm3 label {
  float: left;
}
.form-group input {
  width: 80%;
  float: right;
}
</style>


