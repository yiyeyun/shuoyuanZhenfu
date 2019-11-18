<template>
  <div class="page">
    <div class="box border-shadow">
      <div class="text-center font-24-666 font-weight-600">资料提交</div>

      <div class="flex align-center mt40">
        <div class="label-80 mr10">政府名称</div>
        <div class="width-200 mr10">
          <el-input v-model="form.governmentName" />
        </div>
      </div>

      <div class="flex align-center mt40">
        <div class="label-80 mr10">政府logo</div>
        <div class="width-200 mr10">
          <idol-qiniu-upload
            list-type="picture-card"
            :limit="1"
            :class="logo.length ? 'has-logo': ''"
            :file-list="logo"
            @upload-success="logoPicUpload(arguments)"
            @remove="logoPicRemove(arguments)"
          >
            <i class="el-icon-plus" />
          </idol-qiniu-upload></div>
      </div>

      <div class="flex align-center mt20">
        <div class="label-80 mr10">地址选择</div>
        <VDistpicker
          :province="address.province"
          :city="address.city"
          :area="address.area"
          @selected="onSelect"
        />
      </div>
      <div class="flex align-center mt20">
        <div class="label-80 mr10">详细地址</div>
        <div class="flex-1">
          <el-input v-model="detailAddress" />
        </div>
      </div>

      <div class="flex align-center mt20">
        <div class="label-80 mr10">固定电话</div>
        <div class="width-200 mr10">
          <el-input v-model="form.tel" />
        </div>
        <!--<el-button-->
        <!--type="primary"-->
        <!--size="small"-->
        <!--:disabled="second !== 0"-->
        <!--@click="getCode"-->
        <!--&gt;{{ second !== 0 ? second + 'S后重新发送' : '获取验证码' }}</el-button>-->
      </div>
      <!--<div class="fa fa-address-card"></div>-->

      <div class="flex align-center mt20">
        <div class="label-80 mr10" />
        <el-button type="warning" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import qiniuUplad from '@/components/pic-upload/qiniu-upload'
import VDistpicker from 'v-distpicker'
import {
  validateNotNull
} from '../../validate'
import {
  govermentDataHandle
} from '../../api/login'

export default {
  name: 'AdminData',
  components: {
    idolQiniuUpload: qiniuUplad,
    VDistpicker
  },
  data() {
    return {
      address: {
        province: '',
        city: '',
        area: ''
      },
      logo: [],
      detailAddress: '',
      form: {
        address: '',
        governmentLogo: '',
        governmentName: '',
        tel: ''
      }
    }
  },
  methods: {
    onSelect(data) {
      this.address.province = data.province.value
      this.address.city = data.city.value
      this.address.area = data.area.value
    },
    async submit() {
      console.log(this.form, this.address, this.detailAddress)
      this.form.address = `${this.address.province}${this.address.city}${this.address.area}${this.detailAddress}`
      this.governmentLogo = this.logo[0]
      try {
        await validateNotNull(this.form.address, '地址未填写完整')
        await validateNotNull(this.form.governmentName, '名称不能为空')
        // await validateNotNull(this.form.governmentLogo, 'logo')
        await validateNotNull(this.form.tel, '电话不能为空')
        await govermentDataHandle(this.form)
        this.$router.replace({
          path: '/'
        })
      } catch (e) {
        console.log(e)
      }
    },
    logoPicUpload(e) {
      console.log('2222', e)

      this.logo.push(e[0])
    },
    logoPicRemove(e) {
      this.logo = []
    }
  }
}
</script>

<style scoped lang="less">
    .page{
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box{
        border-radius: 10px;
        background: #fff;
        padding: 40px;
        width: 700px;
    }
  /deep/ .has-logo .el-upload--picture-card{
    display: none;
  }
</style>
