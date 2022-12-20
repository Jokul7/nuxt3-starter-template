<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <div class="container flex items-center justify-center mt mb mx-auto">
      <div class="hello text-3xl">
        Home Page
      </div>
      <div class="i-custom:home text-3xl" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.container{
  width: 1080px;
}
.hello{
  color: var(--theme-c-text-1);
}
</style>
