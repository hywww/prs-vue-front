<template>
    <section class="parameterIntro">
        <router-link class="return_prev" :to="{name:'detail', params:{name:macroName}}">返回上一页》</router-link>
        <table>
            <tr>
                <th v-for="(item,index) in parameterKeys" :key="index">{{item}}</th>
            </tr>
            <tr v-for="(item,idx) in parameterList" :key="idx">
                <td v-for="(i,index) in parameterKeys" :key="index">{{item[i]}}</td>
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
            parameterList: [],
            parameterKeys: [],
            macroName: this.$route.params.name
            // baseUrl: process.env.BASE_URL
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
            AJAX.default.ajaxGet(API.default.getParam,
                function(result){
                    let data = result.data;
                    if(data.root){
                        _that.parameterList = {...data.result};
                        _that.parameterKeys = data.result[0] && Object.keys(data.result[0]);
                        console.log(_that.parameterKeys)
                    }
                },
                {
                    name: _that.$route.params.name
                }
            )
        }
    },
    name: 'parameterIntro'
}
</script>


