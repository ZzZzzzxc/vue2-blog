<template>
  <div class="user-wrapper">
    <a-dropdown>
      <span class="user-dropdown-menu">
        <a-avatar
          class="avatar"
          size="small"
          src="https://cdn.zhangxc.cn/image/jpeg/2020-05-19 230011.jpg"
        />
        <span>zhangxc</span>
      </span>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <router-link :to="{ name: 'center' }">
            <a-icon type="user" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link :to="{ name: 'settings' }">
            <a-icon type="setting" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          <a href="javascript:;">
            <a-icon type="logout" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../../styles/theme.less";

.user-wrapper {
  cursor: pointer;
  transition: 0.3s;
  margin: @item-padding;
  &:hover {
    background-color: @grey;
  }
  .user-dropdown-menu {
    display: inline-block;
    height: @topmenu-height;
    padding: @item-padding;
    .avatar {
      margin-right: 6px;
    }
  }
}
</style>
