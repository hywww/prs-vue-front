<template>
    <div>
        <ul>
            <li v-for='list in netList' :key="list.id">
                {{list.name}} + {{list.url}}
            </li>
        </ul>
    </div>
</template>
<style scoped>
    h2{
        color: blue;
    }
</style>
<script>
export default {
    name: 'list',
    data () {
        return {
            netList : []
        };
    },
    created: function(){
        this.getList();
    },
    methods: {
        getList : function(){
            let _that = this;
            AJAX.default.ajaxGet(API.default.netList,function(result){
                let data = result.data;
                if(data.code == 200){
                    _that.netList = data.list;
                }
            })
        }
    }
    

}
</script>


