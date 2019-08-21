<template>
  <div>
    <!-- 表格信息内容开始 -->

    <!-- filter区域开始 -->
    <div class="paddingb20">
      <el-row>
        <el-input v-show="showTableInfoFilterArea" v-model="infoValue" placeholder="信息编号/名称" style="width: 300px;" class="marginr10" size="small">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
        <el-select v-show="showTableInfoFilterArea" v-model="tableValueCategory" size="small" class="marginr10" clearable placeholder="表格信息类型">
          <el-option
            v-for="item in tableValueCategoryList"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-date-picker
          v-show="showTableInfoFilterArea"
          v-model="editTimeValue"
          size="small"
          type="date"
          placeholder="编辑时间"
          class="marginr10"
        />
        <el-select v-show="showTableInfoFilterArea" v-model="useRateValue" size="small" clearable placeholder="使用频率">
          <el-option
            v-for="item in useRateList"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <i class="el-icon-arrow-up marginl20 text-blue float-right" @click="switchTableInfoFilterArea" />
        <svg-icon icon-class="example" class="text-blue float-right" @click="switchTableInfoFilterArea" />
      </el-row>
      <el-row v-show="showTableInfoFilterArea" class="margint20">
        <el-button size="small" round class="float-right marginl20">取消</el-button>
        <el-button size="small" round type="primary" class="float-right">应用</el-button>
        <el-button type="primary" size="small" round class="float-right marginr10">新建</el-button>
      </el-row>
    </div>
    <!-- filter区域结束 -->

    <!-- table区域开始 -->
    <div class="border">
      <el-table
        v-loading="listLoading"
        :data="tableInfoTableData"
        size="small"
        stripe
        style="width: 100%"
      >
        <el-table-column sortable prop="infoNum" label="信息编号" width="180" align="center" />
        <el-table-column sortable prop="useRate" label="使用频率" width="150" align="center" />
        <el-table-column sortable prop="infoName" label="信息名称" width="220" align="center" />
        <el-table-column sortable prop="tableInfoCategory" label="表格信息类型" width="200" align="center" />
        <el-table-column sortable prop="editDate" label="编辑时间" width="220" align="center" />
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

    <pagination v-show="tableInfoTableTotal>0" class="paddingb10" :total="tableInfoTableTotal" :page.sync="tableInfoListQuery.page" :limit.sync="tableInfoListQuery.limit" @pagination="getTableInfoList" />
    <!-- 表格信息内容结束 -->
  </div>
</template>

<script>
import { fetchTableInfoList } from '@/api/system'
import Pagination from '@/components/Pagination'
export default {
  name: 'TableInfo',
  components: { Pagination },
  data() {
    return {
      showTableInfoFilterArea: true,
      infoValue: '',
      editTimeValue: '',
      tableValueCategory: '',
      tableValueCategoryList: [
        {
          label: '通用表格',
          value: 'all'
        },
        {
          label: '非通用表格',
          value: 'none'
        }
      ],
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
      useRateValue: '',
      tableInfoTableTotal: 0,
      tableInfoTableData: null,
      listLoading: false,
      tableInfoListQuery: {
        page: 1,
        limit: 10,
        sort: '+id'
      }
    }
  },
  computed: {

  },
  created() {
    this.getTableInfoList()
  },
  methods: {
    switchTableInfoFilterArea() {
      this.showTableInfoFilterArea ? this.showTableInfoFilterArea = false : this.showTableInfoFilterArea = true
    },
    getTableInfoList() {
      this.listLoading = true
      fetchTableInfoList(this.tableInfoListQuery).then(response => {
        this.tableInfoTableData = response.data.items
        this.tableInfoTableTotal = response.data.total

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

</style>
