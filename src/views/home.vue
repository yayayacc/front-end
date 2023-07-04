<template>
  <div class="common-layout">
    <el-container>

      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="jumpHome"><strong>主页</strong></el-menu-item>
          <el-sub-menu index="2">
            <template #title><strong>网站导航</strong></template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" @click="jumpUser"><strong>个人中心</strong></el-menu-item>
          <el-menu-item index="4" text @click="dialogVisible = true"><strong>文档发布</strong></el-menu-item>
        </el-menu>


        <el-dialog v-model="dialogVisible" title="提示" width="30%" :before-close="handleClose">


          <template #default>
            <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple>
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                拖拽文件上传或者 <em><ins>点击此处上传</ins></em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  请上传 pdf 或 word 文件
                </div>
              </template>
            </el-upload>
          </template>


        </el-dialog>



      </el-header>


      <el-header class="mx-2">

        <el-aside width="1200px">
          <div class="search-container">
            <el-button type="primary" @click="jump">
              <el-icon style="vertical-align: middle">
                <Search />
              </el-icon>
              <span style="vertical-align: middle"> 点击搜索 </span>
            </el-button>
            <el-input v-model="input" placeholder="请输入文档名..." clearable />
            <img src="word.png" width="100" height="60">
          </div>
        </el-aside>


      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-container class="mx-2">
            <img src="hot.png" width="130" height="25">
          </el-container>
          <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">文档名{{ i }}</li>
          </ul>
        </el-aside>
        <el-container>
          <el-main class="main" style="height: 400px">

            <div class="item"  >
              
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档1
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档2
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档3
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档4
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档5
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档6
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档7
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档8
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档9
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档10
              </el-container> 
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档11
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档12
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档13
              </el-container>
              <el-container class="file" width="460px" height="300px">
                <img src="./white.png" width="155" height="200">
                文档14
              </el-container>

            </div>

          </el-main>

          <el-divider>
            <el-icon><star-filled /></el-icon>
          </el-divider>
          <el-footer style="height: 20px">
            <ins><i>关于我们: @暑期实习小组</i></ins>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>


import { ref } from 'vue'
import { Search, StarFilled, UploadFilled } from '@element-plus/icons-vue'
import { get } from '@/common'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter(); // 获取路由器
const input = ref('');


const jump = () => {
  get(`/document/document-selectname/${input.value}`).then(res => {
    filePageList.value = res.data.resList;
    console.log(filePageList.value)
  });

}

const count = ref(0);
const load = () => {
  if (count.value <= 45) { count.value += 5 } else { }
  //count.value += 2
}

const activeIndex = ref('1');
const activeIndex2 = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}


const dialogVisible = ref(false)
const handleClose = (done) => {
  ElMessageBox.confirm('确定取消上传文件吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const jumpHome = () => {
  router.push({ path: '/home' })
}

const jumpUser = () => {
  router.push({ path: '/user' })
}



// 下面这一部分是从login登录跳转过来后应该做的事
import { ElNotification } from 'element-plus'
import { useRoute } from 'vue-router'

const from_login_route = useRoute();

const open2 = () => {
  ElNotification({
    title: '',
    message: `登录成功，获得${from_login_route.query.fragment}个文档碎片`,
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

const checkLogin = () => {
  if (from_login_route.query.loginFlag) {
    if (from_login_route.query.fragment) {
      if (from_login_route.query.fragment > 0) {
        open2();
      }
      else {
        open1();
      }
    }
  }
}
checkLogin();









</script>


<style scoped>
.common-layout {
  height: 100vh;

  overflow: hidden;
}

.box-card {
  width: 800px;
  height: 500px;
  opacity: 0.92;
}

.search-container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.file {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.infinite-list {
  height: 600px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
  margin-top: 10px;
}

.mx-1 {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  color: red;
}

.mx-2 {
  display: flex;
  justify-content: center;
}


.main {
  display: flex;
  align-content: space-around;
}

.item {
  display: flex;
  flex-wrap: wrap
}




.dialog-footer button:first-child {
  margin-right: 10px;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>