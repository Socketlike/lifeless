<script setup lang="ts">
import { RouterView } from 'vue-router'
import RouterLink from '@/components/RouterLink.vue'
import { hidden as hiddenRoutes } from '@/router/routes'
</script>

<template>
  <div class="header">
    <div class="text">evie's pages</div>

    <div class="links">
      <router-link
        v-for="route in $router
          .getRoutes()
          // @ts-expect-error - yes yes i know this is a check it doesn't matter leave me alone
          .filter(({ name }) => !hiddenRoutes.includes(name))"
        v-tooltip="route.path === $route.path ? `you're here` : undefined"
        activeClass="active"
        :key="route.path"
        :to="{ name: route.name }"
        >{{ route.name }}</router-link
      >
    </div>
  </div>

  <div class="content">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <suspense>
          <component :is="Component" />

          <template #fallback>loading</template>
        </suspense>
      </template>
    </router-view>
  </div>

  <div class="footer">
    <div class="text">
      <div class="content">made with <span class="red">love &lt;3</span> by evie</div>
    </div>

    <div class="links">
      <a href="https://github.com/Socketlike/socketlike.github.io">github</a>
      <a href="https://unsplash.com/photos/blue-and-white-abstract-painting-u8Jn2rzYIps"
        >background</a
      >
    </div>
  </div>
</template>

<style scoped lang="less"></style>
