<template>
   <div>我是登录页</div>
   <el-button type="primary" @click="toLogin()">登录</el-button>
</template>

<script setup>
import router from '@/router';

function toLogin() {
  // 登录逻辑
  console.log('登录按钮被点击');
  $router.push('/'); // 跳转到首页
}
</script>   