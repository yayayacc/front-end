<template>
    <el-tabs v-model="activeName"  @tab-click="handleClick">
        <el-tab-pane label="个人资料" name="first" >个人资料</el-tab-pane>
        <el-tab-pane label="我的收藏" name="second">我的收藏</el-tab-pane>
        <el-tab-pane label="我的足迹" name="third">我的足迹</el-tab-pane>
        <el-tab-pane label="我的上传" name="fourth">我的上传</el-tab-pane>
        <el-tab-pane label="我的下载" name="fifth">我的下载</el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>