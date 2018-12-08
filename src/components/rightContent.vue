<template>
    <div class="" v-if="sourceData.macroName">
        <header class="menu">
            <ul>
                <li>
                    <span class="name">宏名称</span>
                    <span class="text">{{sourceData.macroName}}</span>
                </li>
                <li>
                    <span class="name">版本号</span>
                    <span class="text">{{sourceData.version}}</span>
                </li>
                <li>
                    <span class="name">版本日期</span>
                    <span class="text">{{sourceData.time}}</span>
                </li>
                <li>
                    <span class="name">作者/更新人</span>
                    <span class="text">{{sourceData.author}}</span>
                </li>
                <li>
                    <span class="name">测试</span>
                    <span class="text">{{sourceData.test}}</span>
                </li>
                <li>
                    <span class="name">快捷键</span>
                    <span class="text">{{sourceData.keyboard}}</span>
                </li>
                <li>
                    <span class="name">功能</span>
                    <span class="text">{{sourceData.function}}</span>
                </li>
            </ul>
        </header>
        <section class="list"> 
            <p>
                <a href="javascript:void(0)" v-on:click="alert()">版本历史</a>
                <span>点击查看之前所有版本信息</span>
            </p>
            <p>
                <router-link :to="{'name':'parameter','params':{id:sourceData.macroName}}">参数说明</router-link>
                <span>点击查看参数说明</span>
            </p>
            
            <p>
                <router-link :to="{'name':'attention','params':{id:sourceData.macroName}}">注意事项</router-link>
                <span>点击查看注意事项</span>
            </p>
            
            <p>
                <router-link :to="{name:'functionDemoDetail','params':{id:sourceData.macroName}}">功能演示</router-link>
                <span>点击查看和编辑重要的注意事项</span>
            </p>
            <p>
                <a href="javascript:void(0)" v-on:click="alert()">实例应用</a>
                <span>可以在此直接修改测试参数条件，然后提交运行</span>
            </p>
            <p>
                <router-link :to="{name:'code','params':{id:sourceData.macroName}}">源码</router-link>
                <span>点此迅速查看源码</span>
            </p>
            <p>
                <router-link :to="{name:'problemList','params':{id:sourceData.macroName}}">问题反馈</router-link>
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
            AJAX.default.ajaxGet(this.baseUrl+'data/'+this.$route.params.name+'.json',function(result){
                if(result.status == 200){
                    _that.sourceData = {...result.data};
                }
            })
        },
        alert: function(){
            alert('暂无内容可以查看')
        }
    },
    name: 'rightContent'
}
</script>


