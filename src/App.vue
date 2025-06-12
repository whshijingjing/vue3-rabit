<template>
    <router-view></router-view>
</template>
<script setup>
import { getList } from '@/apis/testapi'
getList().then(res=>{
  console.log(res);
})
</script>
<style scoped lang="scss">

</style>
