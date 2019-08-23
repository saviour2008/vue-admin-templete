<template>
  <div class="doc-content">
    <EditContractInputInfo :show-dialog="showDialog" @closeDialog="showDialog=false" />
    <p style="margin-left:48px; text-align:center">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">
            <strong>药品销售合同</strong></span>
        </span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left"><br></p>
    <p style="margin-left:48px; text-align:left"><br></p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">本</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">-</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">药品销售合同（“本合同”）由以下双方在上海签订：</span>
        </span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left"><br></p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">甲方： 上海罗氏制药有限公司，一家根据中华人民共和国法律依法成立并存续的有限责任公司，其地址为上海市龙东大道</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">1100</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">号，邮政编码为</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">201203</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">。</span>
        </span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left"><br></p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">乙方：</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="background-color:yellow">
          <span style="font-family:等线">
            <span style="color:#404040" @click="showPopup">{{ params }}</span>
          </span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040" @click="showPopup">，一家根据中华人民共和国法律依法成立并存续的有限责任公司，其地址为</span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="background-color:yellow">
          <span style="font-family:等线">
            <span style="color:#404040" @click="showPopup">江苏省南京市宣武区南开路</span>
          </span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="background-color:yellow">
          <span style="font-family:等线">
            <span style="color:#404040" @click="showPopup">233</span></span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="background-color:yellow">
          <span style="font-family:等线">
            <span style="color:#404040" @click="showPopup">号</span></span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040" @click="showPopup">，邮政编码为</span></span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="background-color:yellow">
          <span style="font-family:等线">
            <span style="color:#404040" @click="showPopup">300421</span></span>
        </span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">。</span></span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left">
      <br></p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">&nbsp;&nbsp;&nbsp;&nbsp; 鉴于，甲方希望将药品售予乙方；而乙方拥有在中国市场分销药品的合法资质，并希望购买甲方的药品。</span></span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left">
      <br></p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">&nbsp;&nbsp;&nbsp;&nbsp; 兹此，甲乙双方在平等互利的基础上达成如下一致协议：</span></span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left">
      <br></p>
    <p style="margin-left:48px; text-align:left">
      <br></p>
    <p style="margin-left:48px; text-align:left">
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">第</span></span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">1</span></span>
      </span>
      <span style="font-size:10.5pt">
        <span style="font-family:等线">
          <span style="color:#404040">条&nbsp;&nbsp;&nbsp;&nbsp; 定义</span></span>
      </span>
    </p>
    <p style="margin-left:48px; text-align:left">
      <br></p>
  </div>
</template>

<script>
import EditContractInputInfo from '@/views/components/dialogComponents/editContractInputInfo'
export default {
  name: 'ModelDate',
  components: {
    EditContractInputInfo
  },
  props: {
    params: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    showPopup() {
      this.showDialog = true
    }
  }
}
</script>

<style scoped>
    .doc-content {
        border: 1px solid #4472C4;
    }
</style>

