<template>
    <div class="scroll" :style="`height:${scrollHeight}px`" @scroll="scroll($event)">
        <div class="wrap" :style="`height:${wrapHeight}px`">
            <div class="nodes" :style="`top:${nodesTop}px`">
                <div 
                    class="node" 
                    :style="`height:${nodeHeight}px`"
                    v-for="(n, i) in nodes" 
                    :key="i">
                        {{n.name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "simpleTree",
    data() {
        return {
            scrollHeight: 150,
            wrapHeight: 0,
            nodesTop: 0,
            nodeHeight: 30,
            nodesCache: [],
            nodes: []
        }
    },
    computed: {
        viewCount() {
            return Math.ceil(this.scrollHeight / this.nodeHeight);
        }
    },
    mounted() {
        let num = 5000;
        for (let i = 0;i < num;i++) {
            this.nodesCache.push({
                name: `node-----${i + 1}`
            })
        }
        this.wrapHeight = num * this.nodeHeight;
        this.nodes = this.nodesCache.slice(0, this.viewCount);
    },
    methods: {
        scroll(e) {
            let target = e.target;
            let scrollTop = target.scrollTop;
            let start = Math.ceil(scrollTop / this. nodeHeight);
            let end = start + this.viewCount;
            this.nodesTop = scrollTop;
            this.nodes = this.nodesCache.slice(start, end + 1);
        }
    }
}
</script>
<style scoped>
.scroll {
    width: 200px;
    margin: 10px auto;
    overflow-y: scroll;
}
.wrap {
    width: 100%;
    position: relative;
}
.nodes {
    width: 100%;
    position: absolute;
}
.node {
    width: 100%;
    display: flex;
    align-items: center;
}
</style>