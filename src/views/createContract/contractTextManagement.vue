<template>
  <div style="max-height: calc(100vh - 84px)">
    <div class="fs-16 fw-bolder text-center paddingt20">制作合同模板</div>
    <el-row class="flex-container center">
      <div class="paddingt20">

        <div class="steps-view">
          <div class="steps-view-label finish">制作模板</div>
          <div class="steps-view-label" />
          <div class="steps-view-label" />
          <div class="steps-view-label" />
          <div class="steps-view-label" />
          <div class="steps-view-label">审核模板</div>
          <div class="steps-view-label">生成合同文本</div>
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
            <div class="steps-view-item-status mini-point finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status mini-point finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status mini-point finish" />
          </div>
          <div class="steps-view-item finish">
            <div class="steps-view-item-status mini-point" />
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
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
          <div class="steps-view-item">
            <div class="steps-view-item-status" />
          </div>
        </div>
        <div class="steps-view">
          <div class="steps-view-label" />
          <div class="steps-view-label finish mini-label">上传模板</div>
          <div class="steps-view-label finish mini-label">维护信息</div>
          <div class="steps-view-label finish mini-label">设置变量</div>
          <div class="steps-view-label finish mini-label">编辑邮件模板</div>
        </div>

      </div>
    </el-row>
    <div class="padding20 setting-main-container">
      <el-row :gutter="20">
        <el-col :span="17">
          <el-card>
            <div slot="header">
              2019销售 药品销售合同V1 上海罗氏贸易
            </div>
            <div ref="contentContainer" class="setting-edit-content padding20">
              <p style="text-align:center">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-size:14.0pt">
                        <span style="font-family:SimSun">药品质量保证协议</span>
                      </span>
                    </strong>
                  </span>
                </span>
              </p>

              <p style="text-align:center">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-size:14.0pt"><span style="font-family:SimSun">（常温、阴凉及冷链药品）</span></span>
                    </strong>
                  </span>
                </span>
              </p>

              <p style="text-align:justify">
                <br>
              </p>

              <p style="text-align:justify">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-family:SimSun">甲方（供货方）：上海罗氏制药有限公司</span>
                    </strong>
                  </span>
                </span>
              </p>

              <p style="text-align:justify">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-family:SimSun">地址：上海市龙东大道</span></strong><strong>1100</strong><strong><span
                      style="font-family:SimSun"
                    >号</span></strong></span></span></p>

              <p style="text-align:justify">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-family:SimSun">乙方（购货方）：</span>
                    </strong>
                    <strong>
                      <span style="font-family:SimSun;">
                        <em v-show="!editTags[0].show" :style="{fontStyle:'normal',color:editTags[0].fontColor}" data-id="0" @click="editVariable(0,$event)">
                          &amp;此处填写一级商名称&amp;
                        </em>
                        <el-tag v-show="editTags[0].show" size="mini" data-id="1" closable @close="handleClose(0)">{{ editTags[0].number }}{{ editTags[0].name }}</el-tag>
                      </span>
                    </strong>
                  </span>
                </span>
              </p>
              <p style="text-align:justify">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-family:SimSun">地址：</span>
                    </strong>
                    <strong>
                      <span style="font-family:SimSun;">
                        <em v-show="!editTags[1].show" :style="{fontStyle:'normal',color:editTags[1].fontColor}" data-id="1" @click="editVariable(1,$event)">
                          &amp;此处填写一级商地址&amp;
                        </em>
                        <el-tag v-show="editTags[1].show" size="mini" data-id="1" closable @close="handleClose(1)">{{ editTags[1].number }}{{ editTags[1].name }}</el-tag>
                      </span>
                    </strong>
                  </span>
                </span>
              </p>
              <ul>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span
                  style="font-family:Calibri,sans-serif"
                ><strong><span
                  style="font-family:SimSun"
                >药品质量</span></strong></span></span></li>
              </ul>
              <ol>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span style="font-family:Calibri,sans-serif"><span
                  style="font-family:SimSun"
                >如经甲方检验确定，甲方所提供的药品出现质量问题，并排除是由于外界因素，包括但不限于运输、储存等因素所导致的，由甲方承担药品质量责任，包括为乙方退换药品。</span></span></span>
                </li>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span style="font-family:Calibri,sans-serif"><span
                  style="font-family:SimSun"
                >若乙方未按甲方要求操作，导致温控产品运输监控温度数据丢失，乙方应自行承担相应的药品质量责任，包括承担由此产生的相关损失。</span></span></span>
                </li>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span style="font-family:Calibri,sans-serif"><span
                  style="font-family:SimSun"
                >如因乙方保管养护不当或运输因素而导致药品出现质量问题，由乙方承担药品质量责任，包括承担由此产生的相关损失。</span></span></span>
                </li>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span style="font-family:Calibri,sans-serif"><span
                  style="font-family:SimSun"
                >如双方对药品质量有异议，可共同提交双方认可的法定机构检验，并以该机构的药检结果为准。</span></span></span></li>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span style="font-family:Calibri,sans-serif"><span
                  style="font-family:SimSun"
                >甲乙双方应及时向对方反馈药品质量信息，提供帮助、提出意见与建议。若有药品召回情况发生时，乙方应当协助甲方履行召回义务，按照召回计划的要求及时传达、反馈药品召回信息，控制和收回存在安全隐患的药品，并建立药品召回记录。</span></span></span>
                </li>
                <li style="text-align:justify"><span style="font-size:10.5pt"><span style="font-family:Calibri,sans-serif"><span
                  style="font-family:SimSun"
                >任何一方若收到与双方相关的市场投诉，须在三个工作日内及时将相应信息报告给对方。</span></span></span></li>
              </ol>

              <p style="text-align:justify"><span style="font-size:10.5pt"><span
                style="font-family:Calibri,sans-serif"
              ><strong><span
                 style="font-family:SimSun"
               >甲方：上海罗氏制药有限公司</span></strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </strong><strong><span style="font-family:SimSun">乙方：</span></strong>
                <strong>
                  <span style="font-family:SimSun;">
                    <em v-show="!editTags[2].show" :style="{fontStyle:'normal',color:editTags[2].fontColor}" data-id="2" @click="editVariable(2,$event)">
                      &amp;此处填写一级商名称&amp;
                    </em>
                    <el-tag v-show="editTags[2].show" size="mini" data-id="2" closable @close="handleClose(2)">{{ editTags[2].number }}{{ editTags[2].name }}</el-tag>
                  </span>
                </strong>
              </span></span></p>
              <p style="text-align:justify"><span style="font-size:10.5pt"><span
                style="font-family:Calibri,sans-serif"
              ><strong><span
                style="font-family:SimSun"
              >（盖章）</span></strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </strong><strong><span style="font-family:SimSun;margin-left: 138px;">（盖章）</span></strong></span></span></p>
              <p style="text-align:justify"><br></p>
              <p style="text-align:justify"><span style="font-size:10.5pt"><span
                style="font-family:Calibri,sans-serif"
              ><strong><span
                style="font-family:SimSun"
              >授权代表（签字）：</span></strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </strong><strong><span style="font-family:SimSun">授权代表（签字）：</span></strong></span></span></p>
              <p style="text-align:justify"><span style="font-size:10.5pt"><span
                style="font-family:Calibri,sans-serif"
              ><strong><span
                style="font-family:SimSun"
              >日期：</span></strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </strong><strong><span style="font-family:SimSun">日期：</span></strong></span></span></p>

              <p style="text-align:justify">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-family:SimSun">甲方（邮编）：</span>
                    </strong>
                    <strong>
                      <span style="font-family:SimSun;">
                        <em v-show="!editTags[3].show" :style="{fontStyle:'normal',color:editTags[3].fontColor}" data-id="3" @click="editVariable(3,$event)">
                          &amp;此处填写邮编&amp;
                        </em>
                        <el-tag v-show="editTags[3].show" size="mini" data-id="3" closable @close="handleClose(3)">{{ editTags[3].number }}{{ editTags[3].name }}</el-tag>
                      </span>
                    </strong>
                  </span>
                </span>
              </p>
              <p style="text-align:justify">
                <span style="font-size:10.5pt">
                  <span style="font-family:Calibri,sans-serif">
                    <strong>
                      <span style="font-family:SimSun">乙方（邮编）：</span>
                    </strong>
                    <strong>
                      <span style="font-family:SimSun;">
                        <em v-show="!editTags[4].show" :style="{fontStyle:'normal',color:editTags[4].fontColor}" data-id="4" @click="editVariable(4,$event)">
                          &amp;此处填写邮编&amp;
                        </em>
                        <el-tag v-show="editTags[4].show" size="mini" data-id="4" closable @close="handleClose(4)">{{ editTags[4].number }}{{ editTags[4].name }}</el-tag>
                      </span>
                    </strong>
                  </span>
                </span>
              </p>
            </div>
          </el-card>
          <el-row type="flex" justify="center" class="paddingt20">
            <el-col :span="3">
              <el-button round plain type="primary" size="medium">上一步</el-button>
            </el-col>
            <el-col :span="3">
              <el-button round plain type="primary" size="medium"> 保存</el-button>
            </el-col>
            <el-col :span="3">
              <el-button round plain type="info" size="medium">下一步</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7">
          <el-card>
            <div slot="header" class="flex-container">
              <div>
                变量信息
              </div>
              <i class="el-icon-close" />
            </div>
            <div class="setting-info-content">
              <el-tabs type="border-card" :stretch="true">
                <el-tab-pane label="系统信息" />
                <el-tab-pane label="输入信息">

                  <div class="flex-container paddingh10">
                    <div>4条</div>
                    <div class="flex-container">
                      <!-- <el-button icon="el-icon-refresh" size="medium" circle style="border:none;background:transparent;"></el-button> -->
                      <div><i class="el-icon-refresh" style="margin:7px 20px; font-size: 20px;line-height:20px;color: #717171" /></div>

                      <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="handleShowInputInfoDialog" />
                    </div>
                  </div>

                  <div class="paddingh10 paddingt20">
                    <el-input placeholder="编号/名称" suffix-icon="el-icon-search" />
                  </div>

                  <div v-for="(contractInfo, index) in contractInfos" :key="contractInfo.itemNumber" class="paddingh10 paddingt20">
                    <el-button :ref="'button' + contractInfo.id" class="w100" :data-id="contractInfo.id" @click="movePosition(contractInfo,$event)">
                      {{ contractInfo.itemNumber }}  {{ contractInfo.itemName }}
                    </el-button>
                  </div>

                </el-tab-pane>
                <el-tab-pane label="表格信息" />
              </el-tabs>
            </div>
          </el-card>
        </el-col>

      </el-row>
      <NewContractInputInfo :show-dialog="showNewInputInfoDialog" @closeDialog="handleCloseInputInfoDialog" />
    </div>

  </div>

</template>

<script>
import NewContractInputInfo from '@/views/components/dialogComponents/newContractInputInfo'
export default {
  name: 'ContractTextManagement',
  components: {
    NewContractInputInfo
  },
  data() {
    return {
      showNewInputInfoDialog: false,
      editTags: {
        '0': {
          name: '',
          number: 0,
          show: false,
          fontColor: '#409EFF'
        },
        '1': {
          name: '',
          number: 0,
          show: false,
          fontColor: '#409EFF'
        },
        '2': {
          name: 'asd',
          number: 0,
          show: false,
          fontColor: '#409EFF'
        },
        '3': {
          name: '',
          number: 0,
          show: false,
          fontColor: '#409EFF'
        },
        '4': {
          name: '',
          number: 0,
          show: false,
          fontColor: '#409EFF'
        }
      },
      currentEditItemIndex: 0,
      contractInfos: [],
      editAreaClickedItem: null

    }
  },
  created() {

  },
  mounted() {
    this.contractInfos = this.loadData()
  },
  methods: {
    handleClose(index) {
      this.$set(this.editTags[index], 'show', false)
      this.$set(this.editTags[index], 'fontColor', 'black')
    },

    movePosition(info, e) {
      if (this.editAreaClickedItem) {
        const obj = {
          name: info.itemName,
          number: info.itemNumber,
          show: true
        }
        this.$set(this.editTags, this.currentEditItemIndex, obj)
      } else {
        this.$message({
          message: '请选从合同中选取某个变量',
          type: 'warning'
        })
      }
      this.editAreaClickedItem = null
      this.currentEditItemIndex = 0
    },
    loadData() {
      return [
        {
          id: '001',
          itemNumber: 'P01',
          itemName: '承兑汇票种类'
        },
        {
          id: '002',
          itemNumber: 'P02',
          itemName: '乙方经销商名称'
        },
        {
          id: '003',
          itemNumber: 'P03',
          itemName: '转让原因'
        },
        {
          id: '004',
          itemNumber: 'P04',
          itemName: '转让时间'
        }
      ]
    },
    editVariable(index, e) {
      if (this.editTags[index].fontColor === 'red') {
        this.$set(this.editTags[index], 'fontColor', '#409EFF')
      } else {
        this.$set(this.editTags[index], 'fontColor', 'red')
      }
      this.editAreaClickedItem = e.currentTarget
      this.currentEditItemIndex = e.currentTarget.dataset.id
    },
    handleShowInputInfoDialog() {
      this.showNewInputInfoDialog = true
    },
    handleCloseInputInfoDialog() {
      this.showNewInputInfoDialog = false
    }
  }
}
</script>

<style scoped>
.setting-main-container .setting-edit-content{
  height: calc(100vh - 347px);
  overflow-y: auto;
}
.setting-main-container .setting-info-content{
  height: calc(100vh - 291px);
  overflow-y: auto;
}
.setting-main-container /deep/ .el-card__body {
  padding: 0
}
.setting-main-container /deep/ .el-tabs--border-card {
  box-shadow:none;
  height: 100%;
  border-bottom-color: transparent;
}
</style>
