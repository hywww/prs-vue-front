<template>
    <div class="content">
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.macroName}}">返回上一页》</router-link>
        <iframe src="http://pv33lxmbm.bkt.clouddn.com/dsoutput.pdf" :style="styles" class="iframe-pdf"></iframe>
    </div>
</template>
<style scoped>
.content{
    width: 1020px;
}
.return_prev{
    font-size: 12px;
}
.iframe-pdf {
  margin-top: 20px;
  width: 100%;
}
</style>
<script>
export default {
    name:'functionDemoDetail',
    data(){
        return{
            sourceData: {
              macroName: this.$route.params.name
            },
            baseUrl: process.env.BASE_URL,
            styles: {
              height: '500px'
            },         
        }
    },
    watch: {
        $route: function(mew, old){
            // this.getData();
        }
    },
    created(){
      this.styles.height = window.screen.height - 240 + 'px';
        // this.getData();
    },
    methods: {
    },
}
</script>
