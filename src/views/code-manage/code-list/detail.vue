<template>
  <div>
    <div class="flex align-center">
      <div class="label-80 mr10">组织名称</div>
      <div>{{detailData.gruopName}}</div>
    </div>
    <div class="flex mt10 align-center">
      <div class="label-80 mr10">母码编号</div>
      <div>{{detailData.packageId}}</div>
    </div>
    <div class="flex mt10 align-center">
      <div class="label-80 mr10">子码数量</div>
      <div>{{detailData.num}}</div>
    </div>
    <div class="flex mt10 align-center">
      <div class="label-80 mr10">起始编码</div>
      <div>{{detailData.startIndex}}</div>
    </div>
    <div class="flex mt10 align-center">
      <div class="label-80 mr10">结束编码</div>
      <div>{{detailData.endIndex}}</div>
    </div>
    <div class="flex mt10 align-center">
      <div class="label-80 mr10">子码包数量</div>
      <div>{{detailData.packNum}}</div>
    </div>
    <div class="flex mt10 align-center">
      <div class="label-80 mr10">可分配数量</div>
      <div>{{detailData.waitUseNum}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    detailData: {
      type: Object,
      value: {}
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
