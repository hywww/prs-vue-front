<template>
    <div class="">
        <header class="menu">
            <ul>
                <li>
                    <span class="name">宏名称</span>
                    <span class="text">{{sourceData.MacroName}}</span>
                </li>
                <li>
                    <span class="name">版本号</span>
                    <span class="text">{{sourceData.Version}}</span>
                </li>
                <li>
                    <span class="name">版本日期</span>
                    <span class="text">{{sourceData.Version_date}}</span>
                </li>
                <li>
                    <span class="name">作者/更新人</span>
                    <span class="text">{{sourceData.Author}}</span>
                </li>
                <li>
                    <span class="name">测试</span>
                    <span class="text">{{sourceData.Tester}}</span>
                </li>
                <li>
                    <span class="name">快捷键</span>
                    <span class="text">{{sourceData.Shortcut_Key}}</span>
                </li>
                <li style="width: 100%">
                    <span class="name">功能</span>
                    <span class="text" style="width:78%">{{sourceData.Function}}</span>
                </li>
            </ul>
        </header>
        <section class="list"> 
            <p>
                <a href="javascript:void(0)" v-on:click="alert()">版本历史</a> &nbsp;
                <span>点击查看之前所有版本信息</span>
            </p>            

            <p>
                <router-link :to="{'name':'parameter','params':{id:sourceData.MacroName}}">参数说明</router-link> &nbsp;
                <span>点击查看参数说明</span>
            </p>

            <p>
                <router-link :to="{'name':'attention','params':{id:sourceData.MacroName}}">语法说明</router-link> &nbsp;
                <span>点击查看语法说明</span>
            </p>
            
            <p>
                <router-link :to="{name:'functionDemoDetail','params':{id:sourceData.MacroName}}">示例演示</router-link> &nbsp;
                <span>点击查看示例演示</span>
            </p>
            <p>
                <a href="javascript:void(0)" v-on:click="alert()">实例应用</a> &nbsp;
                <span>可以在此直接修改测试参数条件，然后提交运行</span>
            </p>
            <p>
                <router-link :to="{name:'code','params':{id:sourceData.MacroName, type: sourceData.Macro_Cat}}">源码</router-link> &nbsp;
                <span>点此迅速查看源码</span>
            </p>
            <p>
                <router-link :to="{name:'problemList','params':{id:sourceData.MacroName}}">问题反馈</router-link> &nbsp;
                <span>如遇到任何有关宏代码的问题，请在此留言</span>
            </p>
        </section>
    </div>
</template>
<style scoped>
    @import './right-content.css';
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
            // AJAX.default.ajaxGet(this.baseUrl+'data/'+this.$route.params.name+'.json',function(result){
            //     if(result.status == 200){
            //         _that.sourceData = {...result.data};
            //     }
            // })
            AJAX.default.ajaxGet(API.default.detail,
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
        },
        alert: function(){
            alert('暂无内容可以查看')
        }
    },
    name: 'rightContent'
}
</script>


