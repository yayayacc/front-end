<template>
    <div class="common-layout">
    <el-container>

    <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><strong>主页</strong></el-menu-item>
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
              <el-menu-item index="3" ><strong>个人中心</strong></el-menu-item>
              <el-menu-item index="4" text @click="dialogVisible = true"><strong>文档发布</strong></el-menu-item>      
          </el-menu>


          <el-dialog
            v-model="dialogVisible"
            title="提示"
            width="30%"
            :before-close="handleClose"
          >
            

            <template #default>
              <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
              >
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
                  <el-input  v-model="input" placeholder="请输入文档名..." clearable />
                  <img src="word.png" width="100" height="60">
            </div>
          </el-aside>
          

      </el-header>

            <el-container>
            <el-container>
                <div class="blackground">
                    <el-aside width="100px">    
                    </el-aside>
                    </div>
                <div class="blackground">
                    <el-aside width="200px">
                        <el-col :span="12">
                            <div class="demo-basic--circle">
                                <div style="margin:auto;">
                                    <el-avatar :size="100" :src="circleUrl" />
                                </div>
                                <div style="font-size: large;">用户名有七个字</div>
                                <div style="font-size: medium;">文档碎片：999</div>
                                <el-button @click="pay">充值</el-button>
                            </div>
                        </el-col>
                    </el-aside>
                </div></el-container>
                <el-container>
                    <el-header height="30px"><el-container>
                            <h3 tag="b">最近浏览</h3>
                        </el-container></el-header>
                    <el-main class="main" style="height: 400px">
                        <el-container><el-table :data="rolePageList" style="width: 100%; margin-top: 10px;" table
                                layout="auto" size="large" border stripe>

                                <el-table-column prop="roleName" label="角色名" sortable visable="false" />
                                <el-table-column prop="roleDesc" label="角色描述" />
                                <el-table-column label="状态" sortable>
                                    <template #default="props">
                                        <span :class="{ red: props.row.roleState == '0' }">
                                            {{ props.row.roleState == "0" ? "禁用" : "启用" }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="creatorCode" label="创建人" sortable />
                                <el-table-column prop="createTime" label="创建时间" sortable />

                            </el-table>
                        </el-container>
                    </el-main>
                    <el-header height="30px"><el-container>
                            <h3 tag="b">我的收藏</h3>
                        </el-container></el-header>
                    <el-main class="main" style="height: 400px">
                        <el-container><el-table :data="rolePageList" style="width: 100%; margin-top: 10px;" table
                                layout="auto" size="large" border stripe>

                                <el-table-column prop="roleName" label="角色名" sortable />
                                <el-table-column prop="roleDesc" label="角色描述" />
                                <el-table-column label="状态" sortable>
                                    <template #default="props">
                                        <span :class="{ red: props.row.roleState == '0' }">
                                            {{ props.row.roleState == "0" ? "禁用" : "启用" }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="creatorCode" label="创建人" sortable />
                                <el-table-column prop="createTime" label="创建时间" sortable />

                            </el-table>
                        </el-container>
                    </el-main>
                    <el-header height="30px"><el-container>
                            <h3 tag="b">我的上传</h3>
                        </el-container></el-header>
                    <el-main class="main" style="height: 400px">
                        <el-container><el-table :data="rolePageList" style="width: 100%; margin-top: 10px;" table
                                layout="auto" size="large" border stripe>

                                <el-table-column prop="roleName" label="角色名" sortable visable="false" />
                                <el-table-column prop="roleDesc" label="角色描述" />
                                <el-table-column label="状态" sortable>
                                    <template #default="props">
                                        <span :class="{ red: props.row.roleState == '0' }">
                                            {{ props.row.roleState == "0" ? "禁用" : "启用" }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="creatorCode" label="创建人" sortable />
                                <el-table-column prop="createTime" label="创建时间" sortable />

                            </el-table>
                        </el-container>
                    </el-main>
                    <el-header height="30px"><el-container>
                            <h3 tag="b">我的下载</h3>
                        </el-container></el-header>
                    <el-main class="main" style="height: 400px">
                        <el-container><el-table :data="rolePageList" style="width: 100%; margin-top: 10px;" table
                                layout="auto" size="large" border stripe>

                                <el-table-column prop="roleName" label="角色名" sortable visable="false" />
                                <el-table-column prop="roleDesc" label="角色描述" />
                                <el-table-column label="状态" sortable>
                                    <template #default="props">
                                        <span :class="{ red: props.row.roleState == '0' }">
                                            {{ props.row.roleState == "0" ? "禁用" : "启用" }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="creatorCode" label="创建人" sortable />
                                <el-table-column prop="createTime" label="创建时间" sortable />

                            </el-table>
                        </el-container>
                    </el-main>
                    <el-footer style="height: 20px">关于我们</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup>


const router = useRouter(); // 获取路由器
const input = ref('');
const pay = () => {
 // 跳转1 追加历史记录，可以返回
router.push({path: '/pay'})
 // 跳转2 替换当前历史记录，不能返回
// router.replace({path: '/login'})
 }
 import { ref } from 'vue'
  import { Search, StarFilled, UploadFilled} from '@element-plus/icons-vue'
  import { get } from '@/common'
  import { ElMessageBox } from 'element-plus'
  import { useRouter } from 'vue-router'
  const jump = () => {
    get(`/document/document-selectname/${input.value}`).then(res => {
          filePageList.value = res.data.resList;
          console.log(filePageList.value)
      });

  }

  const count = ref(0);
  const load = () => {if(count.value <=45){count.value +=5}else{}
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

import { reactive, toRefs } from 'vue'

const state = reactive({
    circleUrl:
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    sizeList: ['small', '', 'large'],
})

const { circleUrl, sizeList } = toRefs(state)


const rolePageList = ref([
    {
        roleId: 1, roleName: '学生1', roleCode: 'student1', roleDesc: '学生很帅！',
        roleState: 1, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 2, roleName: '学生2', roleCode: 'student2', roleDesc: '学生很美！',
        roleState: 0, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 1, roleName: '学生1', roleCode: 'student1', roleDesc: '学生很帅！',
        roleState: 1, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 2, roleName: '学生2', roleCode: 'student2', roleDesc: '学生很美！',
        roleState: 0, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 1, roleName: '学生1', roleCode: 'student1', roleDesc: '学生很帅！',
        roleState: 1, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 2, roleName: '学生2', roleCode: 'student2', roleDesc: '学生很美！',
        roleState: 0, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 1, roleName: '学生1', roleCode: 'student1', roleDesc: '学生很帅！',
        roleState: 1, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 2, roleName: '学生2', roleCode: 'student2', roleDesc: '学生很美！',
        roleState: 0, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },

])
</script>
  
  
<style scoped>
.blackground {
    background-color: #ffffff;
}

.common-layout{
  
  
  overflow: hidden;
}

.box-card {
  width: 800px;
  height: 500px;
  opacity: 0.92;
}

.search-container{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.file{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
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
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

.mx-1{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  color:red;
}

.mx-2{
  display: flex;
  justify-content: center;
}


.main{
  display: flex;
  align-content: space-around;
}

.item{
  display: flex;
  flex-wrap:wrap 
}




.dialog-footer button:first-child {
  margin-right: 10px;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}


.demo-basic {
    text-align: center;
}

.demo-basic .demo-basic--circle {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.demo-basic .block:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
    /* position: absolute;
    margin: auto; */

    display: flex;
    justify-content:center;
}

.demo-basic .block {
    flex: 1;
    display: flex;
    justify-content:center;
}

.demo-basic .el-col:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}</style>