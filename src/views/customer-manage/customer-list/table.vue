<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%"
    >
      <!--<el-table-column-->
      <!--prop="accountId"-->
      <!--align="center"-->
      <!--label="账户ID"-->
      <!--/>-->
      <el-table-column
        prop="gruopName"
        align="center"
        label="企业名称"
      />
      <el-table-column
        prop="groupType"
        align="center"
        label="组织类别"
      />
      <el-table-column
        prop="contactPerson"
        align="center"
        label="联系人姓名"
      />
      <el-table-column
        prop="tel"
        align="center"
        label="联系人电话"
      />
      <el-table-column
        prop="address"
        align="center"
        label="地址"
      />
      <el-table-column
        align="center"
        label="账户状态"
      >
        <template slot-scope="scope">
          <div
            v-show="scope.row.isEnable"
            class="text-success"
          >已启用</div>
          <div
            v-show="!scope.row.isEnable"
            class="text-danger"
          >已禁用</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        align="center"
        label="码包记录"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
          >
            <router-link
              class="text-white text-underline-none"
              target="_blank"
              :to="{path:'/code-list',query:{ id:scope.row.accountId}}"
            >查看
            </router-link>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="created"
        align="center"
        label="创建时间"
      />
      <el-table-column
        prop="title"
        align="center"
        label="账户设置"
      >
        <template slot-scope="scope">
          <el-button
            v-show="!scope.row.isEnable"
            type="success"
            size="mini"
            @click="accountEnable(scope.row)"
          >启用</el-button>
          <el-button
            v-show="scope.row.isEnable"
            type="danger"
            size="mini"
            @click="accountEnable(scope.row)"
          >禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="warning"
            size="mini"
            @click="showPrint(scope.row)"
          >打印</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="printDialog" title="打印" width="400px">
      <div class="flex align-center">
        <div class="label-80 mr10">
          生码数量
        </div>
        <el-input v-model="printParams.num" />
      </div>
      <div class="flex align-center mt10">
        <div class="label-80 mr10">
          包/数量
        </div>
        <el-input v-model="printParams.packageNum" />
      </div>
      <div class="flex align-center mt10">
        <div class="label-80 mr10" />
        <el-button type="warning" size="mini" @click="print">打印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { accountEnable, createPackage } from '../../../api/account'
import { validateIntege } from '../../../validate'

export default {
  name: 'Table',
  props: {
    list: {
      type: Array,
      value: []
    }
  },
  data() {
    return {
      printParams: {
        num: '',
        packageNum: ''
      },
      printData: {},
      printDialog: false
    }
  },
  methods: {
    async accountEnable(data) {
      const accountId = data.accountId
      const enable = !data.isEnable
      try {
        await accountEnable({ accountId, enable })
        this.$message.success('修改成功')
        this.$emit('enable-edit', accountId)
      } catch (e) {
        console.log(e)
      }
    },
    view(data) {
      console.log(data)
    },
    showPrint(data) {
      this.printData = data
      this.printDialog = true
      this.printParams = {
        num: '',
        packageNum: ''
      }
    },
    async print() {
      try {
        await validateIntege(this.printParams.num, '生产数量格式有误')
        await validateIntege(this.printParams.packageNum, '包数量格式有误')
        await createPackage({
          ...this.printParams,
          groupId: this.printData.accountId
        })
        this.$message.success('打印成功')
        this.printDialog = false
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
