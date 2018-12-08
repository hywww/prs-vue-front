<template>
    <div>
        <h2>
            <img src="../assets/logo.png">
            普瑞盛SAS宏管理平台 V1.0</h2>
        <div class="left_menu">
            <el-tree :data="menuData" :props="defaultProps"  @node-click="handleNodeClick" node-key="id" default-expand-all></el-tree>
            <!-- <ul>
                <li v-for="(item,index) in menuData" :key="item.id" 
                v-bind:class="{ active:item.checked}" 
                v-on:click="fetchData(item,index)">{{item.macroName}}</li>
            </ul> -->
        </div>
        <div class="right_content">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
    h2{
        position: fixed;
        width: 100%;
        height: 55px;
        color: #fff;
        text-align: center;
        background: #0b70c1;
        margin: 0;
        line-height: 55px;
        top: 0;
    }
    h2 img{
        width: 178px;
        float: left;
    }
    .left_menu{
        width: 178px;
        /* background: #f8f8f8; */
        border-right: 2px solid #0b70c1;
        height: 100%;
        overflow-y: scroll;
        position: fixed;
        top: 55px;
        z-index: 100;
        padding-top: 30px;
    }
    /* .left_menu ul li{
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
    }
    .left_menu ul li:hover{
        background: #17609a;
        color: #fff;
    }
    .left_menu ul li.active{
        background: #17609a;
        color: #fff;
    } */
    .right_content{
        /* width: 100%; */
        margin-top: 55px;
        margin-left: 178px;
        padding: 30px;
    }
</style>
<script>
import menu from '../../public/data/menu.js'
export default {
    data(){
        return{
            menuData:[],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    mounted(){
        this.menuData = menu.result;
        this.checkedMenu = [1]
        // for(let i of this.menuData){
        //     i.checked = false;
        // }
        // this.menuData[0].checked = true;
        this.$router.push({name:'detail', params:{name:this.menuData[0].children[0].label}});
    },
    methods:{
        fetchData: function(name){
            // this.menuData = this.menuData.map((menuItem, menuItemIndex) => ({...menuItem, checked: menuItemIndex == index}))
            this.$router.push({name:'detail', params:{name:name}})
        },
        handleNodeClick(data) {
            let postName = '';
            if(data.children){
                postName = data.children[0].label;
            }
            else{
                postName = data.label;
            }
            this.fetchData(postName);
        }
    },
    // components:{
    //     rightContent
    // }
}
</script>


