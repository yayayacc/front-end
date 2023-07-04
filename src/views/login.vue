<template>
  <div class="login">
    <el-card class="box-card" shadow="always">
      <div
        style="
          padding: 10px 0px 20px 0px;
          text-align: center;
          color: #325d89;
          font-size: 40px;
          font-weight: bold;
          letter-spacing: 3px;
        "
      >idiot文库
      </div>
      <el-form
        ref="loginForm"
        :model="loginUser"
        :rules="rules"
        size="large"
        label-position="right"
        label-width="70px"
        style="width: 360px; margin: 0px auto"
      >
        <el-form-item label="账号" prop="userName">
          <el-input v-model="loginUser.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input type="password" v-model="loginUser.userPwd" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verificationCode">
          <el-input v-model="loginUser.verificationCode">
            <template #suffix>
              <el-image
                style="overflow: visible; position: relative; left: 16px;"
                :src="codeSrc"
                @click="getCode"
                ></el-image>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <div style="text-align: right; width: 360px; margin: 40px auto 0px">
        <el-button
          @click="login"
          type="primary"
          size="large"
          style="width: 300px"
          >登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { get, post, tip, setLocalToken, API_BASE_URL} from "@/common";

const loginForm = ref();

const router = useRouter(); // 获取路由器

const loginUser = reactive({ 
  userName: "", 
  userPwd: "",
  verificationCode: "",
  verificationKey: ''
});

// 验证码后台接口
// const codeSrc = ref(API_BASE_URL + "/captcha/captchaImage");
const codeSrc = ref(); // 验证码图片url
// 获取验证码
const getCode = () => {
  get('/captcha/captchaImage').then(res => {
    // 图片的src属性显示为：前缀+后台传递的Base64验证码图片编码
    // 验证码可以正常显示
    codeSrc.value = 'data:image/jpg;base64,' + res.data.imgUrl;
    loginUser.verificationKey = res.data.imgKey; // redis存储验证码的key
  })
}
getCode();

const rules = reactive({
  userName: [
    {
      required: true,
      message: "请输入账号！",
      trigger: "blur"
    },
  ],
  userPwd: [
    {
      required: true,
      message: "请输入密码！",
      trigger: "blur"
    },
  ],
  verificationCode: [
    {
      min: 4,
      max: 4,
      required: true,
      message: "请输入正确的验证码！",
      trigger: "blur"
    }
  ]
});

// 回车登录
window.onkeydown = ($event) => {
  if($event.key && $event.key == 'Enter'){
    login();
  }
}


import { useRouter } from 'vue-router'
const homepage_router = useRouter(); // 获取路由器
let fragments = 0;
// let myLoginFlag = false; // true 代表第一次登录， false 代表非今日第一次登录
const login = () => {
  loginForm.value.validate((valid) => {
    // Console.log(login)
    if (valid) {
      // 向服务端发出post请求
      post("/login", loginUser).then(result => {
        // 从回送结果中取出令牌，并将令牌存于客户端
        // Console.log(loginUser.userCode);
        setLocalToken(result.data);
        
        post().then( res=> { // TODO: 这里还需要填写post里面的参数
          fragments = res;
        })
        tip.success("登录成功！");

        // 通过路由导航到home页面
        homepage_router.push({ path: "/home", query: {loginFlag: true, fragment: fragments} });
      });
    }
  });
};




// 下面是要加入到home页面的代码
import { h } from 'vue'
import { ElNotification } from 'element-plus'

let aaa = 1; // aaa是今日获得的文档碎片个数
const open2 = () => {
  ElNotification({
    title: '',
    message: `登录成功，获得${ aaa }个文档碎片`,
    duration: 0,
  })
}
const open1 = () => {
  ElNotification({
    title: '',
    message: `登录成功`,
    duration: 0,
  })
}
// open2();
// const route = useRoute();
// let loginFlag = route.query.loginFlag;
// let myLoginFlag = false; // true 代表第一次登录， false 代表非今日第一次登录
const checkLogin = (myLoginFlag) => {
  if(myLoginFlag){
    open2();
  }
  else{
    open1();
  }
} 
// checkLogin(myLoginFlag); 




</script>


<style scoped>
.login {
  background-image: url("src/assets/yinshuisiyuan.jpg");
  background-size: 100% 100%;
  background-color: grey; 

  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  width: 450px;
  height: 400px;
  opacity: 0.92;
}
</style>
