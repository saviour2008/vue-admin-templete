<template>
  <div class="paddingh20">
    <el-row class="fs-16 fw-bolder text-center paddingt20">
      2019 上海罗氏制药有限公司 药品销售合同 V1
    </el-row>
    <el-row class="flex-container center">
      <div class="paddingv20">

        <div class="steps-view">
          <div class="steps-view-label finish">制作模板</div>
          <div class="steps-view-label finish">审核模板</div>
          <div class="steps-view-label finish">生成文本</div>
          <div class="steps-view-label" />
          <div class="steps-view-label" />
          <div class="steps-view-label">审核文本</div>
          <div class="steps-view-label">签署确认</div>
          <div class="steps-view-label">发送打印</div>
          <div class="steps-view-label">打印寄送</div>
          <div class="steps-view-label">追踪归档</div>
        </div>
        <div class="steps-view marginl44">
          <div class="steps-view-item finish">
            <div class="steps-view-item-status finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status mini-point finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status mini-point finish" />
          </div>
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
        </div>
        <div class="steps-view">
          <div class="steps-view-label" />
          <div class="steps-view-label" />
          <div class="steps-view-label" />
          <div class="steps-view-label finish mini-label">选择商业</div>
          <div class="steps-view-label finish mini-label">设置变量值</div>
        </div>

      </div>
    </el-row>

    <el-card>
      <el-row>
        <div>
          <div class="tab-child-container">
            <div class="right-top-filter-container">
              <div class="marginb10 flex-container">
                <span>商业({{ total }})</span>
                <i class="el-icon-sort text-blue marginr10" @click="sortClientList" />
              </div>
              <el-input v-model="infoValue" size="medium" placeholder="信息编号/名称">
                <el-button slot="append" icon="el-icon-search" />
              </el-input>
            </div>
            <div class="right-bottom-button-group">
              <el-button type="primary" icon="el-icon-upload" size="mini" plain>上传输入信息表</el-button>
              <el-button type="primary" icon="el-icon-download" size="mini" plain>下载输入信息表</el-button>
            </div>
            <el-tabs v-model="childActiveName" tab-position="right" type="card" @tab-click="onTabClick">
              <el-tab-pane v-for="(item, index) in clientPaneList" :key="index" :name="item.name">
                <div slot="label" class="flex-container">
                  <span class="paddingr10">{{ item.label }}</span>
                  <i :class="[item.status === 0 ? errorClient : correctCliect,'paddingl20'] " />
                </div>
                <ModelDate :params="modelName" />
              </el-tab-pane>
            </el-tabs>
          </div>
          <el-row type="flex" justify="center" class="paddingt20">
            <el-col :span="2">
              <el-button round size="medium">上一步</el-button>
            </el-col>
            <el-col :span="2">
              <el-button round size="medium"> 保存</el-button>
            </el-col>
            <el-col :span="2">
              <el-button round type="primary" size="medium">提交</el-button>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import ModelDate from './components/modelDate'
export default {
  name: 'ContractTempleteManagement',
  components: {
    ModelDate
  },
  data() {
    return {
      positiveOrder: false,
      errorClient: 'el-icon-warning text-red',
      correctCliect: 'el-icon-circle-check text-blue',
      infoValue: '',
      childActiveName: 'model_1',
      clientPaneList: [
        {
          name: 'model_1',
          label: '南京鼓楼大药店有限公司',
          status: 0
        },
        {
          name: 'model_2',
          label: '江苏省医药有限公司国药商场',
          status: 0
        },
        {
          name: 'model_3',
          label: '南京医药弘景大药房有限公司',
          status: 0
        },
        {
          name: 'model_4',
          label: '江苏省医药有限公司国药商场',
          status: 1
        },
        {
          name: 'model_5',
          label: '江苏省润天生化医药有限公司',
          status: 1
        },
        {
          name: 'model_6',
          label: '南京医药弘景大药房有限公司',
          status: 0
        },
        {
          name: 'model_7',
          label: '新疆医药国合大药房有限公司',
          status: 1
        },
        {
          name: 'model_8',
          label: '云南医药白京大药房有限公司',
          status: 0
        }
        // {
        //   name: 'model_9',
        //   label: '新疆医药国合大药房有限公司'
        // },
        // {
        //   name: 'model_10',
        //   label: '云南医药白京大药房有限公司'
        // },
        // {
        //   name: 'model_11',
        //   label: '新疆医药国合大药房有限公司'
        // },
        // {
        //   name: 'model_12',
        //   label: '云南医药白京大药房有限公司'
        // }
      ]
    }
  },
  computed: {
    modelName() {
      return this.clientPaneList.filter(item => item.name === this.childActiveName)[0].label
    },
    total() {
      return this.clientPaneList.length
    }
  },
  watch: {
    positiveOrder(newValue) {
      const correntClient = []
      const errorClient = []
      this.clientPaneList.forEach((item) => item.status ? correntClient.push(item) : errorClient.push(item))
      if (newValue) {
        this.clientPaneList = correntClient.concat(errorClient)
      } else {
        this.clientPaneList = errorClient.concat(correntClient)
      }
    }
  },
  mounted() {
    this.sortClientList()
  },
  methods: {
    onTabClick() {

    },
    sortClientList() {
      this.positiveOrder ? this.positiveOrder = false : this.positiveOrder = true
    }
  }
}
</script>

<style lang="scss" scoped>
.right-top-filter-container {
  position: absolute;
  top: 10px;
  right: 10px;
  width:284px;
  z-index: 2;
}
.right-bottom-button-group {
  position: absolute;
  bottom: 4px;
  right: 10px;
  z-index: 2;
}

.word-view {
  display: flex;
  flex-flow: row;
}

.keyword {
  width: 200px;
  font-size: 16px;
  color: #409EFF;
  text-decoration: underline;
  cursor: pointer;
}

.tab-child-container /deep/ .el-tabs__item {
  padding: 0 26px;
}

.tab-child-container {
  position: relative;
}

.tab-child-container /deep/ .el-tabs__nav {
  overflow-y: auto;
  max-height: 500px;
}

.tab-child-container /deep/ .el-tabs--right .el-tabs__header.is-right {
  margin-left: 0px;
  padding-top: 80px;
  margin-right: 10px;
}

.tab-child-container /deep/ .el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active {
  border: 1px solid #4472C4;
  border-left-color: #fff;
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  color: #4472C4 !important;
  background: #FFF !important;
  margin: 6px 8px 8px 0px !important;
}

.tab-child-container /deep/ .el-tabs--right.el-tabs--card .el-tabs__item.is-right {
  background: #F2F2F2;
  border-radius: 4px;
  margin: 6px 8px 8px 6px;
}
</style>
