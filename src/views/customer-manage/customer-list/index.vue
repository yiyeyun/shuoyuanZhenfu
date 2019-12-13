<template>
  <div class="p20">
    <div class="mb20">
      <el-button
        type="warning"
        size="small"
        @click="customDialog = true"
      >新增</el-button>
    </div>
    <idol-table @enable-edit="enable" :list="list"></idol-table>
    <el-dialog title="新增客户" :visible.sync="customDialog" width="500px">
      <add-custom @close="addSuccess" />
    </el-dialog>
    <el-pagination
      background
      class="mt10"
      :page-size="listParams.limit"
      layout="prev, pager, next"
      :total="total"
      @current-change="pageChange"
    />
  </div>
</template>

<script>
import addCustom from './add-custom'
import table from './table'
import { getAccountList } from '../../../api/account'

export default {
  name: 'Index',
  components: {
    addCustom,
    idolTable: table
  },
  data() {
    return {
      customDialog: false,
      listParams: {
        limit: 10,
        page: 1
      },
      total: 0,
      list: []
    }
  },
  mounted() {
    this.getList()
  },

  methods: {
    async getList() {
      try {
        const list = await getAccountList(this.listParams)
        this.list = list.data.rows
        this.total = list.data.total
      } catch (e) {
        console.log(e)
      }
    },
    addSuccess() {
      this.customDialog = false
      this.listParams.page = 1
      this.getList()
    },
    enable(id) {
      console.log(id)
      this.list = this.list.map(item => {
        console.log(id)
        if (item.accountId === id) {
          item.isEnable = !item.isEnable
        }
        // 15058095087
        console.log(item)
        return item
      })
      console.log(this.list)
    },
    pageChange(page) {
      this.listParams.page = page
      this.getList()
    }
  }
}
</script>

<style scoped>

</style>
