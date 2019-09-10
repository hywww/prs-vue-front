<template>
    <section class="functionDemoDetail">
        <router-link class="return_prev" :to="{name:'detail', params:{name:macroName}}">返回上一页》</router-link>
        <div></div>
        <iframe :src="pa"  class="iframe-pdf"></iframe>
    </section>
</template>
<style scoped>
.return_prev{
    font-size: 12px;
}
.iframe-pdf {
  margin-top: 5px;
  width: 81%;
  height: 600px;
}
</style>
<script>
export default {
    data(){
        return{
            parameterList_: [],
            parameterKeys: [],
            macroName: this.$route.params.name,
            lpath: this.$route.params.lpath,
            pa: [],
        }
    },
    watch: {
        $route: function(mew, old){
            this.getData();
        }
    },
    created(){
        this.getData();
    },
    methods: {
        getData : function(){
            let _that = this;
            // AJAX.default.ajaxGet(this.baseUrl+'data/'+this.$route.params.id+'.json',function(result){
            //     if(result.status == 200){
            //         _that.sourceData = {...result.data};
            //     }
            // })
            AJAX.default.ajaxGet(API.default.getLink,
                function(result){
                    let data = result.data;
                    if(data.root){
                        _that.parameterList_ = {...data.result};
                        _that.parameterKeys = data.result[0] && Object.keys(data.result[0]);
                        _that.pa = data.result[0].lpath;
                        console.log(data.result[0].lpath)
                    }
                },
                {
                    name: _that.$route.params.name,
                    lpath: _that.$route.params.lpath
                }
            )
        },
    },
    name: 'functionDemoDetail'
}
</script>


