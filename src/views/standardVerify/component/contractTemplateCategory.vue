<template>
  <div>
    <!-- 合同模板类型开始 -->

    <!-- filter区域开始 -->
    <div class="paddingb20">
      <el-row>
        <el-input v-show="showContractTemplateCategoryFilterArea" v-model="infoValue" placeholder="信息编号/名称" style="width: 203px;" class="marginr20" size="small">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
        <el-select v-show="showContractTemplateCategoryFilterArea" v-model="reasonValue" size="small" clearable placeholder="事由" class="marginr20">
          <el-option
            v-for="item in reasonList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-show="showContractTemplateCategoryFilterArea" v-model="contractRangeValue" size="small" clearable placeholder="合同期限" class="marginr20">
          <el-option
            v-for="item in contractRangeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-show="showContractTemplateCategoryFilterArea" v-model="lawValue" size="small" clearable placeholder="法律实体" class="marginr20">
          <el-option
            v-for="item in lawList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <i class="el-icon-arrow-up marginl20 text-blue float-right" @click="switchContractTemplateCategoryFilterArea" />
        <svg-icon icon-class="example" class="text-blue float-right" @click="switchContractTemplateCategoryFilterArea" />
      </el-row>
      <el-row v-show="showContractTemplateCategoryFilterArea" class="margint20">
        <el-select v-model="orderValue" size="small" clearable placeholder="签署顺序" class="marginr20">
          <el-option
            v-for="item in orderList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="digitalSignValue" size="small" clearable placeholder="是否支持电子签">
          <el-option
            v-for="item in digitalSignList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button size="small" round class="float-right marginl20">取消</el-button>
        <el-button size="small" round type="primary" class="float-right">应用</el-button>
      </el-row>
    </div>
    <!-- filter区域结束 -->

    <!-- table区域开始 -->
    <div class="flex-container">
      <div>
        模板类型（{{ contractTemplateCategoryListTotal }}）
        <el-button type="primary" icon="el-icon-plus" size="small" round>新建</el-button>
      </div>
      <div class="flex-container">
        <div class="fs-12 marginr10">2019 07 02  00:21  Bruce Bu 最后更新</div>
        <el-button type="primary" icon="el-icon-upload" size="small" plain>上传模板类型列表</el-button>
        <el-button type="primary" icon="el-icon-download" size="small" plain>下载模板类型列表</el-button>
      </div>
    </div>
    <div class="border margint10">
      <el-table
        v-loading="listLoading"
        :data="contractTemplateCategoryTableData"
        size="small"
        stripe
        style="width: 100%"
      >
        <el-table-column sortable prop="id" label="编号" width="80" align="center" />
        <el-table-column sortable prop="reason" label="事由" width="80" align="center" />
        <el-table-column sortable prop="tmplateName" label="模板类型名称" width="180" align="center" />
        <el-table-column sortable prop="exprise" label="合同期限" align="center" width="100" />
        <el-table-column sortable prop="law" label="法律实体" align="center" width="150" />
        <el-table-column sortable prop="signtory" label="签署人" class="flex-container" align="center" width="120">
          <template slot-scope="{row}">
            <el-popover
              ref="popover1"
              placement="bottom"
              width="120"
              trigger="hover"
              content="MC总监|MC计划副总监"
            >
              <div slot="reference" class="round border text-blue dis-i cell-round-container">{{ row.signtory }}</div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column sortable prop="emailTemplate" label="邮件模板" align="center" width="140">
          <template slot-scope="{row}">
            <el-popover
              ref="popover2"
              placement="bottom"
              width="120"
              trigger="hover"
              content="寄送邮件|签约邮件"
            >
              <div slot="reference" class="round border text-blue dis-i cell-round-container">{{ row.emailTemplate }}</div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column sortable prop="signtoryWay" label="签署方式" align="center" width="140" />
        <el-table-column sortable prop="isEsignature" label="是否支持电子签" align="center" width="140" />
        <el-table-column label="操作" align="center">
          <template slot-scope="{row}">
            <el-popover
              ref="popover3"
              placement="bottom"
              width="60"
              trigger="click"
            >
              <div><el-button type="text" icon="el-icon-edit" size="mini">编辑</el-button></div>
              <div><el-button class="text-red" type="text" icon="el-icon-delete" size="mini">删除</el-button></div>
              <i slot="reference" class="el-icon-edit" style="cursor: pointer;" />
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- table区域结束 -->

    <pagination v-show="contractTemplateCategoryListTotal>0" class="paddingb10" :total="contractTemplateCategoryListTotal" :page.sync="contractTemplateCategoryListQuery.page" :limit.sync="contractTemplateCategoryListQuery.limit" @pagination="getContractTemplateCategoryList" />
    <!-- 合同模板类型结束 -->
  </div>
</template>

<script>
import { fetchContractTemplateCategoryList } from '@/api/system'
import Pagination from '@/components/Pagination'
export default {
  name: 'ContractTemplateCategory',
  components: { Pagination },
  data() {
    return {
      showContractTemplateCategoryFilterArea: true,
      infoValue: '',
      contractRangeList: [
        {
          label: '一天',
          value: 'day'
        },
        {
          label: '一周',
          value: 'week'
        }
      ],
      contractRangeValue: '',
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
      reasonValue: '',
      lawList: [
        {
          label: '条例1',
          value: 'law1'
        },
        {
          label: '条例2',
          value: 'law2'
        }
      ],
      lawValue: '',
      orderList: [
        {
          label: '从高到底',
          value: 'reverse'
        },
        {
          label: '从低到高',
          value: 'order'
        }
      ],
      orderValue: '',
      digitalSignList: [
        {
          label: '全部',
          value: 'all'
        },
        {
          label: '支持电子签',
          value: 'support'
        },
        {
          label: '不支持电子签',
          value: 'no-support'
        }
      ],
      digitalSignValue: '',
      useRateList: [
        {
          label: 'A',
          value: 'all'
        },
        {
          label: 'B',
          value: 'run'
        },
        {
          label: 'C',
          value: 'stop'
        }
      ],
      contractTemplateCategoryListTotal: 0,
      contractTemplateCategoryTableData: null,
      listLoading: false,
      contractTemplateCategoryListQuery: {
        page: 1,
        limit: 10,
        sort: '+id'
      }
    }
  },
  computed: {

  },
  created() {
    this.getContractTemplateCategoryList()
  },
  methods: {
    switchContractTemplateCategoryFilterArea() {
      this.showContractTemplateCategoryFilterArea ? this.showContractTemplateCategoryFilterArea = false : this.showContractTemplateCategoryFilterArea = true
    },
    getContractTemplateCategoryList() {
      this.listLoading = true
      fetchContractTemplateCategoryList(this.contractTemplateCategoryListQuery).then(response => {
        this.contractTemplateCategoryTableData = response.data.items
        this.contractTemplateCategoryListTotal = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-round-container {
  border-color: #007bff;
  width: 30px;
  height:30px;
  line-height: 30px;
}
</style>
