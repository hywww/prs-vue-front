<template>
    <div v-if="sourceData.macroName">
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.macroName}}">返回上一页》</router-link>
        <section class="attention">{{sourceData.attention}}</section>
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
            AJAX.default.ajaxGet(this.baseUrl+'data/'+this.$route.params.id+'.json',function(result){
                if(result.status == 200){
                    _that.sourceData = {...result.data};
                }
            })
        }
    },
    name: 'attention'
}
</script>