<template>
    <div>
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.MacroName}}">返回上一页》</router-link>
        <section class="attention">{{sourceData.M_Example}}</section>
    </div>
</template>
<style scoped>
.return_prev{
    font-size: 12px;
}
.attention{
    font-size: 14px;
    color: #333;
    margin-top: 20px;
}
</style>
<script>
export default {
    data(){
        return{
            sourceData: {},
            baseUrl: process.env.BASE_URL
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
            AJAX.default.ajaxGet(API.default.getSyntax,
                function(result){
                    let data = result.data;
                    if(data.root){
                        _that.sourceData = {...data.result};
                    }
                },
                {
                    name: _that.$route.params.name
                }
            )
        }
    },
    name: 'attention'
}
</script>