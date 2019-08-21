<template>
  <div>
    <!-- 输入信息内容开始 -->

    <!-- filter区域开始 -->
    <div v-show="showInputInfoFilterArea" class="paddingb20">
      <el-input v-model="infoValue" placeholder="信息编号/名称" style="width: 300px;" class="marginr10" size="small">
        <el-button slot="append" icon="el-icon-search" />
      </el-input>
      <el-select v-model="inputValueCategory" size="small" clearable placeholder="输入信息类型">
        <el-option
          v-for="item in inputValueCategoryList"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-date-picker
        v-model="editTimeValue"
        size="small"
        type="date"
        placeholder="编辑时间"
        class="marginr10"
      />
      <el-select v-model="useRateValue" size="small" clearable placeholder="使用频率">
        <el-option
          v-for="item in useRateList"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button size="small" round class="float-right marginl20">取消</el-button>
      <el-button size="small" round type="primary" class="float-right">应用</el-button>
    </div>
    <!-- filter区域结束 -->

    <!-- table区域开始 -->
    <div class="border">
      <el-table
        v-loading="listLoading"
        :data="inputInfoTableData"
        size="small"
        stripe
        style="width: 100%"
      >
        <el-table-column sortable prop="infoNum" label="信息编号" width="120" align="center" />
        <el-table-column sortable prop="useRate" label="使用频率" width="120" align="center" />
        <el-table-column sortable prop="infoName" label="信息名称" width="200" align="center" />
        <el-table-column sortable prop="inputInfoCategory" label="输入信息类型" width="150" align="center" />
        <el-table-column sortable prop="format" label="格式" width="120" align="center" />
        <el-table-column sortable prop="fontLimit" label="字数上限" width="120" align="center" />
        <el-table-column sortable prop="editDate" label="编辑时间" width="180" align="center" />
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <i class="el-icon-edit" style="cursor: pointer;" @click="selectOperation(scope)" />
            <div v-show="scope.row.isShow" class="oprationButtonGroup">
              <div style="text-align:left"><el-button type="text" icon="el-icon-edit" size="mini">编辑</el-button></div>
              <div><el-button style="color:red" type="text" icon="el-icon-delete" size="mini">删除</el-button></div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- table区域结束 -->

    <pagination v-show="inputInfoTableTotal>0" class="paddingb10" :total="inputInfoTableTotal" :page.sync="inputInfoListQuery.page" :limit.sync="inputInfoListQuery.limit" @pagination="getInputInfoList" />
    <!-- 输入信息内容结束 -->
  </div>
</template>

<script>
import { fetchInputInfoList } from '@/api/system'
import Pagination from '@/components/Pagination'
export default {
  name: 'InputInfo',
  components: { Pagination },
  data() {
    return {
      showInputInfoFilterArea: true,
      infoValue: '',
      editTimeValue: '',
      inputValueCategory: '',
      inputValueCategoryList: [
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
      inputInfoTableTotal: 0,
      inputInfoTableData: null,
      listLoading: false,
      inputInfoListQuery: {
        page: 1,
        limit: 10,
        sort: '+id'
      }
    }
  },
  computed: {

  },
  created() {
    this.getInputInfoList()
  },
  methods: {
    switchInputInfoFilterArea() {
      this.showInputInfoFilterArea ? this.showInputInfoFilterArea = false : this.showInputInfoFilterArea = true
    },
    getInputInfoList() {
      this.listLoading = true
      fetchInputInfoList(this.inputInfoListQuery).then(response => {
        this.inputInfoTableData = response.data.items
        this.inputInfoTableTotal = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    selectOperation(scope) {
      this.inputInfoTableData.forEach((row, index) => {
        if (index === scope.$index) {
          scope.row.isShow === true ? scope.row.isShow = false : scope.row.isShow = true
        } else if (row.isShow) {
          row.isShow = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
