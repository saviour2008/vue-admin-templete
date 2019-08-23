<template>
  <el-dialog title="输入信息" :visible.sync="showDialog" :close-on-click-modal="false" :show-close="true" class="editContractDialog" :before-close="handleCloseDialog">

    <el-form :model="form" label-position="top" size="small" class="marginh30 paddingb50">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="类型" :label-width="formLabelWidth">
            <el-select v-model="form.category" clearable placeholder="类型">
              <el-option
                v-for="item in categoryList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="格式" :label-width="formLabelWidth">
            <el-select v-model="form.format" clearable placeholder="格式">
              <el-option
                v-for="item in formatList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="字数限制" :label-width="formLabelWidth">
            <el-input v-model="form.limit" clearable placeholder="字数限制" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="信息名称" :label-width="formLabelWidth">
          <el-input v-model="form.infoName" clearable placeholder="XXX日期" />
        </el-form-item>
      </el-row>
    </el-form>
    <div slot="footer">
      <div>
        <el-button type="primary" size="small" round @click="handleSubmitDialog">保存</el-button>
        <el-button round plain size="small" @click="handleCloseDialog">取 消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'NewContractInputInfo',
  props: ['showDialog'],
  data() {
    return {
      form: {
        category: '',
        limit: '',
        format: '',
        infoName: ''
      },
      categoryList: [
        {
          label: '日期',
          value: 'date'
        },
        {
          label: '天气',
          value: 'weather'
        }
      ],
      formatList: [
        {
          label: '年/月/日',
          value: 'date'
        },
        {
          label: '月/日/年',
          value: 'weather'
        }
      ],
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
