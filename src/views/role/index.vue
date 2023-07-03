<template>
    <!-- 模糊查询表单 -->
    <el-form :inline="true" :model="params">
        <el-form-item>
            <el-input v-model="params.roleName" placeholder="角色名" style="width:
    120px;" clearable />
        </el-form-item>
        <el-form-item>
            <el-input v-model="params.roleCode" placeholder="角色代码" style="width:
    120px;" clearable />
        </el-form-item>
        <el-form-item>
            <el-select v-model="params.roleState" placeholder="角色状态" style="width:
    120px;" clearable>
                <el-option label="禁用" :value="0" />
                <el-option label="启用" :value="1" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="getRoleList">
                <el-icon style="vertical-align: middle">
                    <Search />
                </el-icon>
                <span style="vertical-align: middle"> 查询 </span>
            </el-button>
        </el-form-item>
    </el-form>
    <!-- 添加角色按钮和导出数据按钮 -->
    <div>
        <el-button type="primary" @click="getRoleList">
            <el-icon style="vertical-align: middle">
                <Plus />
            </el-icon>
            <span style="vertical-align: middle"> 添加角色 </span>
        </el-button>
        <el-button type="warning" @click="getRoleList">
            <el-icon>
                <svg t="1686794703831" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2399" width="200" height="200">
                    <path d="M917.6 615.7v262.4H106.4V615.7C105.6 587 82.1 564 53.2 564
24.3 564 0.8 587 0 615.7V921c0 35 28.5 63.5 63.5 63.5h897c35 0 63.5-28.5 63.5-
63.5V615.7c-0.8-28.7-24.3-51.6-53.2-51.6-28.9-0.1-52.4 22.9-53.2 51.6z m0 0" pid="2400"></path>
                    <path d="M474.3 55L276 253.3c-20.7 20.7-20.7 54.5 0 75.2 20.7
20.7 54.5 20.7 75.2 0l103.6-103.7v380.7c0 31.4 25.8 57.1 57.1 57.1 31.4 0 57.1-
25.8 57.1-57.1V225l103.7 103.6c20.7 20.7 54.5 20.7 75.2 0 20.7-20.7 20.7-54.5 0-
75.2L549.6 55.1c-20.7-20.8-54.6-20.8-75.3-0.1z m0 0" p-id="2401"></path>
                </svg>
            </el-icon>
            <span style="vertical-align: middle">导出数据 </span>
        </el-button>
    </div>
    <!-- 表格数据 -->
    <el-table :data="rolePageList" style="width: 100%; margin-top: 10px;" tablelayout="auto" size="large" border stripe>
        <el-table-column prop="roleId" label="角色ID" sortable />
        <el-table-column prop="roleName" label="角色名" sortable />
        <el-table-column prop="roleDesc" label="角色描述" />
        <el-table-column prop="roleCode" label="角色代码" sortable />
        <el-table-column label="状态" sortable>
            <template #default="props">
                <span :class="{ red: props.row.roleState == '0' }">
                    {{ props.row.roleState == "0" ? "禁用" : "启用" }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="creatorCode" label="创建人" sortable />
        <el-table-column prop="createTime" label="创建时间" sortable />
        <el-table-column label="操作">
            <template #default="props">
                <el-button type="primary" title="修改角色" :icon="Edit" circle @click="openRoleUpdate(props.row)" />
                <el-button type="danger" title="删除角色" :icon="Delete" circle @click="deleteRole(props.row.roleId)" />
                <el-button type="warning" @click="updateState(props.row)">
                    {{ props.row.roleState == "1" ? "禁用" : "启用" }}</el-button>
                <el-button type="primary" v-if="props.row.roleState == 1"
                    @click="openUpdateAuth(props.row)">更改权限</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background style="margin-top: 20px;" v-model:current-page="params.pageNum"
        v-model:page-size="params.pageSize" :page-sizes="[5, 10, 15, 20]" layout="total, sizes, prev, pager, next, jumper"
        :total="params.totalNum" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>
<script setup>
import { reactive } from "vue";
import { Search, Plus, Edit, Delete } from '@element-plus/icons-vue'
// 定义查询参数
const params = reactive({
    roleName: '',
    roleCode: '',
    roleState: '',
    pageNum: 1, // 当前是第几页
    pageSize: 5, // 一页显示几条
    totalNum: 0 // 数据总条数
})
// 表格初始数据
const rolePageList = ref([
    {
        roleId: 1, roleName: '学生1', roleCode: 'student1', roleDesc: '学生很帅！',
        roleState: 1, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
    {
        roleId: 2, roleName: '学生2', roleCode: 'student2', roleDesc: '学生很美！',
        roleState: 0, creatorCode: '超级管理员', createTime: '2023-05-15 13:34:00'
    },
])
const handleSizeChange = size => {
    console.log(`一页显示${size}条数据`)
}
const handleCurrentChange = pn => {
    console.log(`当前页码：${pn}`)
}
</script>
<style scoped>
.red {
    color: red;
}
</style>