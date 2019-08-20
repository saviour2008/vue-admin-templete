<template>
  <div>
    <!-- 输入信息内容开始 -->

    <!-- filter区域开始 -->
    <div v-show="showInputInfoFilterArea" class="paddingb20">
      <el-input v-model="infoValue" placeholder="信息编号/名称" style="width: 300px;" class="marginr10" size="small">
          <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-select size="small" v-model="inputValueCategory" clearable placeholder="输入信息类型">
          <el-option
              v-for="item in inputValueCategoryList"
              :key="item.label"
              :label="item.label"
              :value="item.value">
          </el-option>
      </el-select>
      <el-date-picker
          size="small"
          v-model="editTimeValue"
          type="date"
          placeholder="编辑时间"
          class="marginr10">
      </el-date-picker>
      <el-select size="small" v-model="useRateValue" clearable placeholder="使用频率">
          <el-option
              v-for="item in useRateList"
              :key="item.label"
              :label="item.label"
              :value="item.value">
          </el-option>
      </el-select>
      <el-button size="small" round class="float-right marginl20">取消</el-button>
      <el-button size="small" round type="primary" class="float-right">应用</el-button>
    </div>
    <!-- filter区域结束 -->

    <!-- table区域开始 -->
    <div class="border">
      <el-table
        :data="inputInfoTableData"
        v-loading="listLoading"
        size="small"
        stripe
        style="width: 100%">
        <el-table-column sortable prop="infoNum" label="信息编号" width="180" align="center"></el-table-column>
        <el-table-column sortable prop="name" label="信息名称" align="center"></el-table-column>
        <el-table-column sortable label="编辑时间" width="180" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="isenable" label="启动" width="180" align="center">
            <template slot-scope="{row}">
                <el-switch v-model="row.isenable"></el-switch>
            </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- table区域结束 -->

    <pagination class="paddingb10" v-show="inputInfoTableTotal>0" :total="inputInfoTableTotal" :page.sync="inputInfoListQuery.page" :limit.sync="inputInfoListQuery.limit" @pagination="getInputInfoList" />
    <!-- 系统信息内容结束 -->
  </div>
</template>

<script>
import { fetchList } from '@/api/system'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  name: 'InputInfo',
  data() {
    return {
      showInputInfoFilterArea: true,
      infoValue: '',
      editTimeValue: '',
      inputValueCategory: '',
      inputValueCategoryList:[
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
      inputInfoTableTotal:0,
      inputInfoTableData:null,
      listLoading:false,
      inputInfoListQuery: {
          page: 1,
          limit: 10,
          sort: '+id'
      },
      listLoading: false,
    }
  },
  created() {
    this.getInputInfoList();
  },
  computed: {
    
  },
  methods: {
    switchSystemInfoFilterArea(){
      this.showInputInfoFilterArea ? this.showInputInfoFilterArea = false: this.showInputInfoFilterArea = true;
    },
    getInputInfoList() {
      this.listLoading = true
      fetchList(this.inputInfoListQuery).then(response => {
          this.inputInfoTableData = response.data.items
          this.inputInfoTableTotal = response.data.total

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
