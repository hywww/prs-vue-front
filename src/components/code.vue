<template>
    <div v-if="sourceData.macroName">
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.macroName}}">返回上一页》</router-link>
        <pre class="code">{{sourceData.code}}</pre>
    </div>
</template>
<style scoped>
.return_prev{
    font-size: 12px;
}
.code{
    font-size: 14px;
    color: #333;
    margin-top: 20px;
}
</style>
<script>
export default {
    data(){
        return{
            sourceData: {
                macroName: this.$route.params.name,
                code: ''
            }
        }
    },
    created(){
        this.getData();
    },
    methods: {
        getData : function(){
            let _that = this;
            AJAX.default.ajaxGet(API.default.getCode,function(result){
                // console.log(result)
                let data = result.data;
                if(data.status == 200){
                    _that.sourceData.code = data.result;
                }
            }, {
                name: _that.$route.params.name,
                type: _that.$route.params.type,
                version: _that.$route.params.version
            })
        }
    },
    name: 'attention'
}
</script>