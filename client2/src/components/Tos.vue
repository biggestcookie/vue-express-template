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

<template>
  <div>
    <div className="block">
      <h2 className="has-text-centered">Welcome!</h2>
    </div>
    <div className="block">
      Please read all the terms and conditions, then press accept when you are
      done.
    </div>
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
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_imports.scss" as v;

.tos {
  border: 1px solid v.$grey-light;
  padding: 25px;
  max-height: 400px;
  overflow-y: scroll;
}
</style>
