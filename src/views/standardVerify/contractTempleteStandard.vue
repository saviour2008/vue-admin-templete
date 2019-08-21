<template>
  <div class>
    <div class="page-title">合同模板规范</div>
    <div class="paddingh20">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="switchContractTemplateTabs">
          <el-tab-pane label="合同模板类型" name="contractTemplateCategory">
            <ContractTemplateCategory />
          </el-tab-pane>

          <el-tab-pane label="合同模板命名" name="contractTemplateNamed">
            合同模板命名
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import ContractTemplateCategory from './component/contractTemplateCategory'
export default {
  name: 'ContractTempleteStandard',
  components: {
    ContractTemplateCategory
  },
  data() {
    return {
      activeName: 'contractTemplateCategory'
    }
  },
  created() {
    // this.getSystemInfoList();
  },
  mounted() {

  },
  methods: {
    switchContractTemplateTabs(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

</style>

