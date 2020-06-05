<template>
  <div>
    <a-tabs default-active-key="1" class="tabs-wrapper">
      <a-tab-pane key="1" tab="账号密码登录">
        <a-form :form="form" class="login-form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                }
              ]"
              placeholder="账号：admin"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ]
                }
              ]"
              type="password"
              placeholder="密码随意"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true
                }
              ]"
            >
              Remember me
            </a-checkbox>
            <a class="login-form-forgot" href="">
              Forgot password
            </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Log in
            </a-button>
            Or
            <a href="">
              register now!
            </a>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="手机号登录" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  created() {},
  methods: {
    handleLogin(parameter) {
      this.$store.dispatch("Login", parameter).then(res => {
        if (res.code === 200) {
          this.$router.push({ path: "/" });
          this.$message.success("登录成功");
        }
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.handleLogin(values);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.tabs-wrapper {
  width: 300px;
  margin: 0 auto;
}
</style>
