<template>
  <div>
    {{ this.$route.path }}
    <div @click="add">
      ADD
    </div>
    <div>{{ num }}</div>
  </div>
</template>

<script>
export default {
  name: "AccountSetting",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    add() {
      this.num++;
    }
  }
};
</script>
