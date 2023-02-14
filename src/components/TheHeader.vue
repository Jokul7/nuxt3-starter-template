<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="w-main mx-auto my-5 flex items-center justify-between">
    <NuxtLink to="/">
      LOGO
    </NuxtLink>
    <div class="flex items-center">
      <ul class="flex list-none">
        <li class="mr-4">
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li class="mr-4">
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
      </ul>
      <button class="ml cursor-pointer" @click="toggleDark()">
        Is Dark: {{ isDark }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active{
  color: #00c58e;
}
</style>
