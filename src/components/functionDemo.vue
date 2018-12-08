<template>
    <div class="func">
        <div class="iconfont add_icon">&#xe631;
            <ul class="icon_list">
                <li>
                    <span class="iconfont">&#xe62b;</span><br>
                    <span>标题</span>
                </li>
            </ul>
        </div>
        <div class="btn_div">
            <div class="btn_inner"><button type="submit">保存</button></div>
        </div>
    </div>
</template>
<style scoped>
    .func{
        width: 1020px;
        margin: auto;
    }
    .func .btn_div{
        width: 100%;
        height: 68px;
        box-shadow: -1px 0px 3px 0px #efefef;
        padding-top: 13px;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
    }
    .func .btn_div .btn_inner{
        width: 1020px;
        margin: auto;
        margin-top: 8px;
    }
    .func .btn_div .btn_inner button{
        float: right;
        background: #0b70c1;
        width: 120px;
        height: 40px;
        text-align: center;
        color: #fff;
        font-size: 16px;
    }
    .func .add_icon{
        font-size: 26px;
        text-align: center;
        cursor: pointer;
    }
</style>
<script>
export default {
    name: 'functionDemo',
    data(){
        return {

        }
    },
}
</script>

