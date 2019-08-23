<template>
  <el-dialog title="填写输入信息" :visible.sync="showDialog" :close-on-click-modal="false" :show-close="true" class="editContractDialog" :before-close="handleCloseDialog">
    <div class="text-center paddingb40">
      <span class="text-blue fs-20">4</span>   /10
      <span class="marginl30 fw-bolder">江苏省医药有限公司国药商场</span>
    </div>
    <el-form :model="form" label-position="top" size="small" class="marginl50 paddingb50">
      <el-form-item label="生效时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.startDate"
          size="small"
          type="date"
          placeholder="生效日期"
        />
      </el-form-item>
    </el-form>
    <div slot="footer" class="flex-container">
      <div>
        <el-checkbox v-model="useAllBusiness">应用到全部商业</el-checkbox>
      </div>
      <div>
        <el-button type="primary" size="small" round @click="handleSubmitDialog">确 认</el-button>
        <el-button type="primary" size="small" plain round @click="handleSubmitDialog">下一个</el-button>
        <el-button round plain size="small" @click="handleCloseDialog">取 消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'EditContractInputInfo',
  props: {
    showDialog: Boolean
  },
  data() {
    return {
      form: {
        startDate: ''
      },
      useAllBusiness: false,
      formLabelWidth: '120px'
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    handleSubmitDialog() {
      this.$emit('closeDialog')
    },
    handleCloseDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="scss" scoped>
.editContractDialog /deep/ .el-dialog__body {
  background-color: rgb(243, 243, 245);
}

</style>
