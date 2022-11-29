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
import { computed } from 'vue';
import { useCounterStore } from '@/stores/modules/counter';

const count = computed(() => useCounterStore().count);

const add = () => {
  useCounterStore().increment();
};
</script>

<style lang="less" scoped>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 10vh;

    div {
      margin: 5px;

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
