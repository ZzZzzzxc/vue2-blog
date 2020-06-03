<template>
  <div class="container">
    <div class="header">this is header</div>
    <router-view />
    <div class="footer">
      this is footer
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
</style>
