<template>
    <div class="content">
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.macroName}}">返回上一页》</router-link>
        <section v-for="item of sourceData.functionDemo">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
            <p><img v-bind:src="`${baseUrl}images/`+item.img"></p>
        </section>
        
    </div>
</template>
<style scoped>
.content{
    width: 1020px;
}
.return_prev{
    font-size: 12px;
}
</style>
<script>
export default {
    name:'functionDemoDetail',
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
            AJAX.default.ajaxGet(this.baseUrl+'data/'+this.$route.params.name+'.json',function(result){
                if(result.status == 200){
                    _that.sourceData = {...result.data};
                }
            })
        }
    },
}
</script>
