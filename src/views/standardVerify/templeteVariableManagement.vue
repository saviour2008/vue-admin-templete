<template>
  <div class>
    <div class="page-title">模板变量列表</div>
    <div class="paddingh20">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="switchVariableTabs">
          <el-tab-pane label="系统信息" name="systemInfoTab">
            <SystemInfo />
          </el-tab-pane>

          <el-tab-pane label="输入信息" name="inputInfoTab">
            <InputInfo />
          </el-tab-pane>

          <el-tab-pane label="表格信息" name="tableInfoTab">
            <TableInfo />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import SystemInfo from './components/systemInfo'
import InputInfo from './components/inputInfo'
import TableInfo from './components/tableInfo'
export default {
  name: 'TempleteVariableManagement',
  components: {
    SystemInfo,
    InputInfo,
    TableInfo
  },
  data() {
    return {
      activeName: 'systemInfoTab'
    }
  },
  created() {
    // this.getSystemInfoList();
  },
  mounted() {

  },
  methods: {
    switchVariableTabs(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

</style>

