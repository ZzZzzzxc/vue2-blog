<template>
  <div>
    <a-tabs v-model="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane
        v-for="pane in pageList"
        :key="pane.path"
        :tab="pane.meta.title"
        :closable="pane.meta.closable"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: "",
      newTabIndex: 0,
      pageList: []
    };
  },
  watch: {
    $route: function(newVal) {
      this.activeKey = newVal.fullPath;
      for (let item of this.pageList) {
        if (item.path == newVal.fullPath) {
          return;
        }
      }
      this.pageList.push(newVal);
      if (this.pageList.length === 2) {
        this.toggleClosed(true);
      }
    },
    activeKey: function(newPathKey) {
      this.$router.push({ path: newPathKey });
    }
  },
  methods: {
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.pageList.forEach((pane, i) => {
        if (pane.path === targetKey) {
          lastIndex = i - 1;
        }
      });
      const pageList = this.pageList.filter(pane => pane.path !== targetKey);
      if (pageList.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = pageList[lastIndex].path;
        } else {
          activeKey = pageList[0].path;
        }
      }
      this.pageList = pageList;
      if (this.pageList.length === 1) {
        this.toggleClosed(false).then(() => {
          this.activeKey = activeKey;
        });
      } else {
        this.activeKey = activeKey;
      }
    },
    toggleClosed(flag) {
      return new Promise(resolve => {
        this.pageList[0].meta.closable = flag;
        resolve();
      });
    }
  },
  created() {
    this.pageList.push(this.$route);
    if (this.pageList.length === 1) {
      this.toggleClosed(false);
    }
  }
};
</script>
