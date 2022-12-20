<script setup lang="ts">
const mode = useColorMode()
const setMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="header flex items-center justify-between">
    <NuxtLink to="/">
      <div class="i-custom:vue text-3xl" />
    </NuxtLink>
    <div class="flex items-center">
      <ul class="flex list-none text-white">
        <li class="ml">
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li class="ml">
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
      </ul>
      <button class="ml cursor-pointer" @click="setMode">
        Mode {{ mode }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active{
  color: #00c58e;
}
.header{
  width: 1080px;
  height: 36px;
  margin: 24px auto;
}
.logo{
  width: 132px;
  height: 32px;
}
</style>
