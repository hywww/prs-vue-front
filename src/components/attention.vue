<template>
    <div v-if="sourceData.macroName">
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.macroName}}">返回上一页》</router-link>
        <pre class="attention">{{sourceData.attention}}</pre>
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
                attention: ''
            }
        }
    },
    created(){
        this.getData();
    },
    methods: {
        getData : function(){
            let _that = this;
            AJAX.default.ajaxGet(API.default.getSyntax,function(result){
                // console.log(result)
                let data = result.data;
                if(data.status == 200){
                    _that.sourceData.attention = data.result;
                }
            }, {
                name: _that.$route.params.name,
                type: _that.$route.params.type
            })
        }
    },
    name: 'attention'
}
</script>