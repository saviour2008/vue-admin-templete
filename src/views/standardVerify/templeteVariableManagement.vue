<template>
  <div class>
     <div class="page-title">模板变量列表</div>

     <div class="paddingh20">
       <el-card>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="系统信息" name="first">系统信息</el-tab-pane>
          <el-tab-pane label="输入信息" name="second">输入信息</el-tab-pane>
          <el-tab-pane label="表格信息" name="third">表格信息</el-tab-pane>
        </el-tabs>
      </el-card>
     </div>
     
  </div>
</template>

<script>

  export default {
    name: 'TempleteVariableManagement',
    data() {
      return {
        activeName: 'second'
      }
    },
    created() {
       
    },
    mounted() {
      
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>

</style>

