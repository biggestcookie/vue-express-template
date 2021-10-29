<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a href="/" class="navbar-item" @click="toggleNavbar(false)">
        <img src="../assets/images/logo.svg" class="app-logo" alt="logo" />
        <h1 class="is-size-5">React App</h1>
      </a>
      <a
        class="navbar-burger burger"
        :class="{ 'is-active': navbarBurgerToggled }"
        @click="toggleNavbar()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navbarBurgerToggled = ref(false);

const toggleNavbar = (setValue?: boolean) => {
  navbarBurgerToggled.value = setValue ?? !navbarBurgerToggled.value;
};
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    white-space: nowrap;
    .app-logo {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
