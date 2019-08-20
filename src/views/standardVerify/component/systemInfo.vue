<template>
  <div>
    <!-- 系统信息内容开始 -->

    <!-- filter区域开始 -->
    <div v-show="showSystemInfoFilterArea" class="paddingb20">
      <el-input v-model="infoValue" placeholder="信息编号/名称" style="width: 300px;" class="marginr10" size="small">
          <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-date-picker
          size="small"
          v-model="timeValue"
          type="date"
          placeholder="模板提交时间"
          class="marginr10">
      </el-date-picker>
      <el-select size="small" v-model="statusValue" clearable placeholder="状态">
          <el-option
              v-for="item in statusList"
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
        :data="systemInfoTableData"
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

    <pagination class="paddingb10" v-show="systemInfoTableTotal>0" :total="systemInfoTableTotal" :page.sync="systemInfoListQuery.page" :limit.sync="systemInfoListQuery.limit" @pagination="getSystemInfoList" />
    <!-- 系统信息内容结束 -->
  </div>
</template>

<script>
import { fetchList } from '@/api/system'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  name: 'SystemInfo',
  data() {
    return {
      showSystemInfoFilterArea: true,
      infoValue: '',
      timeValue: '',
      statusValue: '',
      statusList:[
          {
              label: '全部',
              value: 'all'
          },
          {
              label: '启用',
              value: 'run'
          },
          {
              label: '不启用',
              value: 'stop'
          }
      ],
      systemInfoTableTotal:0,
      systemInfoTableData:null,
      listLoading:false,
      systemInfoListQuery: {
          page: 1,
          limit: 10,
          sort: '+id'
      },
      listLoading: false,
    }
  },
  created() {
    this.getSystemInfoList();
  },
  computed: {
    
  },
  methods: {
    switchSystemInfoFilterArea(){
      this.showSystemInfoFilterArea ? this.showSystemInfoFilterArea = false: this.showSystemInfoFilterArea = true;
    },
    getSystemInfoList() {
      this.listLoading = true
      fetchList(this.systemInfoListQuery).then(response => {
          this.systemInfoTableData = response.data.items
          this.systemInfoTableTotal = response.data.total

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
