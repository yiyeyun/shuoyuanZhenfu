<template>
  <div class="p20">
    <div class="mb20">
      <el-button
        type="warning"
        size="small"
        @click="add"
      >新增账户</el-button>
    </div>
    <el-dialog :visible.sync="dialog" title="新增账户" width="600px">
      <el-form :model="form" label-width="100px">
        <el-form-item label="公司名称">
          <el-input v-model="form.companyName" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
          />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="password"
            type="paddword"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="mini" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  createAccount
} from '../../api/account'
import {
  validateNotNull
} from '../../validate'

export default {
  name: 'Index',
  data() {
    return {
      dialog: false,
      password: '',
      form: {
        companyName: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    add() {
      this.dialog = true
    },
    async submit() {
      if (this.form.password !== this.password) {
        this.$message.warning('两次密码输入不一致')
        return
      }
      try {
        await validateNotNull(this.form.companyName, '企业名称不能为空')
        await validateNotNull(this.form.username, '用户名不能为空')
        await validateNotNull(this.form.password, '密码不能为空')
        await createAccount(this.form)
        this.$message.success('账户创建成功')
        this.form.companyName = ''
        this.form.username = ''
        this.form.password = ''
        this.password = ''
        this.dialog = false
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
