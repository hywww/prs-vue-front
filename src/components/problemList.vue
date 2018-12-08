<template>
    <div class="container">
        <router-link class="return_prev" :to="{name:'detail', params:{name:name}}">返回上一页》</router-link>
        <ul>
            <li v-for="(item, index) in dataList" v-bind:key="index">
                <div class="feedback_text">{{item.text}}</div>
                <p class="oprate">
                    <span>反馈人：{{item.userName}} &nbsp;&nbsp;&nbsp;</span>
                    <span>反馈时间：{{item.time}} &nbsp;&nbsp;&nbsp;</span>
                    <span class="response" v-on:click="handleResponse(index)"><i class="iconfont">&#xe609;</i> 回复</span>
                </p>
                <div v-if="item.showResponBox">
                    <el-row :gutter="24">
                        <el-col :span="2" class="font_13 grey">我要回复:</el-col>
                        <el-col :span="4" class="font_13" style="padding-left:0">
                            <el-input size="small" v-model="item.responseName" placeholder="请输入姓名"></el-input>
                        </el-col>
                        <el-col :span="16" class="font_13" style="padding-left:0">
                            <el-input size="small" v-model="item.responseText" placeholder="请输入回复内容"></el-input>
                        </el-col>
                        <el-col :span="2" class="font_13">
                            <el-button size="small" type="primary" v-on:click='submitResponse(item)' class="pull-right">提交</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="response_box" v-for="list in item.children" v-bind:key="list.resId">
                    <p>
                        <span class="pull-left font_13 grey">{{list.person}}</span>
                        <span class="pull-right grey font_13">{{list.time}}</span>
                    </p>
                    <p>{{list.text}}</p>
                </div>
            </li>
        </ul>

        <h3>我也要反馈</h3>
        <el-row :gutter="20">
            <el-col :span="2" :offset="2" class="font_13">反馈人：</el-col>
            <el-col :span="15" class="font_13" style="padding-left:0">
                <el-input v-model="person" placeholder="请输入姓名"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="2" :offset="2" class="font_13">反馈问题：</el-col>
            <el-col :span="15" style="padding-left:0">
                <el-input v-model="problemData" placeholder="请输入相关问题反馈" type="textarea" cols="100" rows="7"></el-input><br><br>
                <el-button type="primary" v-on:click='submit()' class="pull-right">提交</el-button>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {

    data(){
        return{
            dataList: [],
            name: this.$route.params.name,
            problemData: '',
            person: ''
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        getList: function(){
            let _that = this;
            AJAX.default.ajaxPost(
                API.default.problemList,
                {
                    name: this.name
                },
                function(result){
                    let data = result.data;
                    if(data.status == 200 && data.result){
                        const _result = data.result.map((item) => {
                            return {...item, showResponBox: false, problemData: '', person: ''}
                        })
                        _that.dataList = _result;
                    }
                }
            )
        },
        handleResponse: function(index){
            this.dataList[index].showResponBox = !this.dataList[index].showResponBox;
        },
        submitResponse: function(item){
            let _that = this;
            if(!item.responseName || !item.responseText){
                this.$message.error('反馈人和反馈问题不能为空');
                return false;
            }
            AJAX.default.ajaxPost(
                API.default.addResponse,
                {
                    id: item.id,
                    resId: item.resId,
                    person: item.responseName,
                    text: item.responseText,
                    time: (new Date()).toLocaleString()
                },
                function(result){
                    let data = result.data;
                    if(data.status == 200){
                        _that.getList();
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                    }
                }
            )
        },
        submit: function(status){
            let _that = this;
            if(!this.problemData || !this.person){
                this.$message.error('反馈人和反馈问题不能为空');
                return false;
            }
            AJAX.default.ajaxPost(
                API.default.addQuestion,
                {
                    id: this.name,
                    userName: this.person,
                    text: this.problemData,
                    time: (new Date()).toLocaleString()
                },
                function(result){
                    let data = result.data;
                    if(data.status == 200){
                        _that.problemData = '';
                        _that.getList();
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                    }
                }
            )
        }
    }
}
</script>
<style scoped>
    .container{
        width: 1020px;
    }
    .el-row{
        margin-bottom: 20px;
    }
    h3{
        color: #0b70c1;
    }
    ul{
        margin: 20px 0;
        margin-bottom: 60px;
    }
    ul li{
        margin-bottom: 10px;
        padding: 5px 15px 15px;
        background: #fff;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 0 1px 3px #dcdfe6;
        box-sizing: border-box;
        position: relative;
    }
    .feedback_text{
        width: 58%;
        word-break: break-all;
        margin-bottom: 10px;
    }
    .oprate{
        font-size: 13px;
        color: #919191;
        position:absolute;
        right: 15px;
        top: -8px;
    }
    .response{
        color: #0b70c1;
        cursor: pointer;
    }
    .response_box{
        padding: 5px 15px 5px;
        background: #fff;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 0 1px 3px #dcdfe6;
        box-sizing: border-box;
        margin-bottom: 5px;
    }
    .response_box p {
        margin: 5px 0;
    }
</style>


