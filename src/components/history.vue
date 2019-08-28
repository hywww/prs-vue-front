<template>
    <section class="history">
        <router-link class="return_prev" :to="{name:'detail', params:{name:macroName}}">返回上一页》</router-link>
        <h2>该宏版本历史列表如下：</h2>
        <table>
            <tr v-for="(item,idx) in parameterList_" :key="idx"  onclick="window.open('file:///E:/js/%E5%AE%8F%E5%B9%B3%E5%8F%B0%E7%AE%A1%E7%90%86/node/prs-vue-front-master/src/components/addtitle-v1-2.txt');">
                <td v-for="(i,index) in 1" :key="index">
                <div>
                {{parameterList}}
                {{item['macro_v']}}
                </div>
                </td>
            </tr>
        </table>  
    </section>
</template>
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 15px;
}

.history table{
    margin-top: 20px;
    border-spacing: 0;
    font-size: 14px;
    color: #0000FF;
}
.history table tr td,.history table tr th{
    border: 1px solid #efefef;
    padding: 12px 6px;
    text-align: left;
    color: #0000FF;
}
.return_prev{
    font-size: 12px;
}
</style>
<script>
export default {
    data(){
        return{
            parameterList_: [],
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
            AJAX.default.ajaxGet(API.default.getHistory,
                function(result){
                    let data = result.data;
                    if(data.root){
                        _that.parameterList_ = {...data.result};
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
    name: 'history'
}
</script>


