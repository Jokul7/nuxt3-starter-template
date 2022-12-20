<script setup lang="ts">
</script>

<template>
  <div class="NotFound">
    <p class="code">
      404
    </p>
    <h1 class="title">
      PAGE NOT FOUND
    </h1>
    <div class="divider" />

    <div class="action">
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}
@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}
.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}
.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}
.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--theme-c-divider)
}
.action {
  padding-top: 20px;
}
</style>
