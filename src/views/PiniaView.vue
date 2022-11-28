<template>
  <div class="about">
    <h1>Pinia</h1>
    <br /><br />
    <div class="count">
      <h1>Count: {{ count }}</h1>
      <div class="button">
        <el-button @click="add">Count++</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/modules/counter";
import { computed } from "vue";
let count = computed(() => useCounterStore().count);

let add = () => {
  console.log(1);
  useCounterStore().increment();
};
</script>

<style lang="less" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 10vh;
    display: flex;
    align-items: center;
    div {
      margin: 5px 5px 5px 5px;
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
