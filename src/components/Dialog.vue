<template>
  <div class="dialog" v-if="visible">
    <div class="dialog__title">这是弹窗标题</div>
    <div class="dialog__content">这是弹窗内容</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  },
  mounted() {
    console.log('123')
  }
}
</script>

<style>

</style>