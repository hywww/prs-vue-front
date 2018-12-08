<template>
    <section class="parameterIntro" v-if="sourceData.macroName">
        <router-link class="return_prev" :to="{name:'detail', params:{name:sourceData.macroName}}">返回上一页》</router-link>
        <table>
            <tr>
                <th>参数功能分类</th>
                <th>宏参数</th>
                <th>参数说明</th>
                <th>默认值</th>
            </tr>
            <tr v-for="item in sourceData.parameterIntro" :key="item.name">
                <td>{{item.kinds}}</td>
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.default}}</td>
            </tr>
        </table>  
    </section>
</template>
<style scoped>
.parameterIntro table{
    margin-top: 20px;
    border-spacing: 0;
    font-size: 14px;
    color: #333;
}
.parameterIntro table tr td,.parameterIntro table tr th{
    border: 1px solid #efefef;
    padding: 12px 6px;
    text-align: center;
}
.return_prev{
    font-size: 12px;
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
    name: 'parameterIntro'
}
</script>


