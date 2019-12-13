<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        prop="accountId"
        align="center"
        label="账户ID"
      />
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
    </el-table>
  </div>
</template>

<script>
import { accountEnable } from '../../../api/account'

export default {
  name: 'Table',
  props: {
    list: {
      type: Array,
      value: []
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
    }
  }
}
</script>

<style scoped>

</style>
