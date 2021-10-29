<template>
  <div className="has-text-centered">
    <div
      className="content tos is-family-secondary has-text-justified"
      @scroll.passive="handleScroll"
    >
      <div v-for="(text, index) in tosText" className="block" :key="index">
        {{ text }}
      </div>
    </div>
    <form @submit="$emit('submit', $event)">
      <input
        type="submit"
        className="button is-primary is-family-secondary"
        :disabled="!submitEnabled"
        value="Submit"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { tosText } from "../misc/TOSText";

const submitEnabled = ref(false);

const handleScroll = (e: any) => {
  if (submitEnabled.value) return;
  const reachedBottom =
    e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
  submitEnabled.value = reachedBottom;
};
</script>
