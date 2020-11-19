<template>
    <div id="app">
        <simple-tree />
    </div>
</template>
<script>
import simpleTree from './components/simpleTree.vue'
export default {
    name: "app",
    components: { simpleTree }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
</style>