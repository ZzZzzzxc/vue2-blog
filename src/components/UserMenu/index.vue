<template>
  <div class="user-wrapper">
    <a-dropdown>
      <span class="user-dropdown-menu">
        <a-avatar class="avatar" size="small" :src="avatar" />
        <span>{{ nickname }}</span>
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
          <a href="javascript:;" @click="handleLogout">
            <a-icon type="logout" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserMenu",
  computed: { ...mapGetters(["nickname", "avatar"]) },
  methods: {
    ...mapActions(["Logout"]),
    handleLogout() {
      this.Logout().then(res => {
        if (res.code === 200) {
          this.$router.push({ path: "/user/login" });
          this.$message.success("退出成功");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "@/styles/theme.less";

.user-wrapper {
  cursor: pointer;
  transition: 0.3s;
  margin: @item-padding;
  float: right;
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
