<template>
    <div id="app">
        <simple-tree />
    </div>
</template>
<script>
export default {
    name: "app",
    components: {
        simpleTree: () => import('./components/simpleTree.vue')
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
</style>