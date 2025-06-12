<template>
    <div>
        <header class="test">我是layout</header>
        <Home></Home>
    </div>
</template>
<script setup>
    import Home from '@/views/Home/index.vue'
</script>
<style scoped lang="scss">
    .test {
        color: $priceColor;
    }
</style>