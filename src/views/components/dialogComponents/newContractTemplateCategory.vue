<template>
  <el-dialog title="新建合同模板类型" :visible.sync="showNewContractDialog" :close-on-click-modal="false" :show-close="false" width="60%" :center="true">
    <el-form :model="form" label-position="top" size="small">
      <el-form-item label="事由" :label-width="formLabelWidth">
        <el-select v-model="form.reasonValue" clearable placeholder="事由" style="width:100%">
          <el-option
            v-for="item in reasonList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="合同模板类型" :label-width="formLabelWidth">
        <el-select v-model="form.contractTemplateCategory" clearable placeholder="合同模板类型" style="width:100%">
          <el-option
            v-for="item in contractTemplateCategoryList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="合同期限" :label-width="formLabelWidth">
            <el-select v-model="form.contractDateRange" clearable placeholder="合同期限" style="width:100%">
              <el-option
                v-for="item in contractDateRangeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法律实体" :label-width="formLabelWidth">
            <el-select v-model="form.lawCompany" clearable placeholder="法律实体" style="width:100%">
              <el-option
                v-for="item in lawCompanyList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="签署人" :label-width="formLabelWidth">
        <el-select v-model="form.signPersons" clearable placeholder="签署人" multiple style="width:100%">
          <el-option
            v-for="item in signPersonList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="邮件模板用途" :label-width="formLabelWidth">
        <el-select v-model="form.mailTemplateUse" clearable placeholder="邮件模板用途" multiple style="width:100%">
          <el-option
            v-for="item in mailTemplateUseList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="签署方式" :label-width="formLabelWidth">
            <el-select v-model="form.signMode" clearable placeholder="签署方式" style="width:100%">
              <el-option
                v-for="item in signModeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电子签" :label-width="formLabelWidth">
            <el-select v-model="form.isDigitalSign" clearable placeholder="电子签" style="width:100%">
              <el-option
                v-for="item in isDigitalSignList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <div slot="footer">
      <el-button @click="handleCloseNewContractTemplate">取 消</el-button>
      <el-button type="primary" @click="handleSubmitNewContractTemplate">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'NewContractTemplateCategory',
  props: {
    showNewContractDialog: Boolean
  },
  data() {
    return {
      reasonList: [
        {
          label: '事由1',
          value: 'reason1'
        },
        {
          label: '事由2',
          value: 'reason2'
        }
      ],
      contractTemplateCategoryList: [
        {
          label: '模板1',
          value: 'contractTemplate1'
        },
        {
          label: '模板2',
          value: 'contractTemplate2'
        }
      ],
      contractDateRangeList: [
        {
          label: '长期',
          value: 'long'
        },
        {
          label: '短期',
          value: 'short'
        }
      ],
      lawCompanyList: [
        {
          label: '罗氏',
          value: 'luoshi'
        },
        {
          label: '王氏',
          value: 'wangshi'
        }
      ],
      signPersonList: [
        {
          label: 'MACA总监',
          value: 'MACAchangjiang'
        },
        {
          label: 'MACA计划副总裁',
          value: 'MACAhuangshan'
        }
      ],
      mailTemplateUseList: [
        {
          label: '邮寄至签署',
          value: 'changjiang1'
        },
        {
          label: '邮寄待签署',
          value: 'huangshan2'
        },
        {
          label: '邮寄已签署',
          value: 'huangshan3'
        }
      ],
      signModeList: [
        {
          label: '罗氏先签',
          value: 'luoshixianqian'
        },
        {
          label: '罗氏后签',
          value: 'luoshihouqian'
        }
      ],
      isDigitalSignList: [
        {
          label: '支持电子签',
          value: true
        },
        {
          label: '不支持电子签',
          value: false
        }
      ],
      form: {
        reasonValue: '',
        contractTemplateCategory: '',
        contractDateRange: '',
        lawCompany: '',
        signPersons: [],
        mailTemplateUse: [],
        signMode: '',
        isDigitalSign: false
      },
      formLabelWidth: '120px'
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    handleSubmitNewContractTemplate() {
      this.$emit('closeDialog')
    },
    handleCloseNewContractTemplate() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
