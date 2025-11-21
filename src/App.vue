<script setup lang="ts">
import Siderbar from './components/Siderbar.vue';

</script>

<template>
  <div class="app-container">
    <Siderbar/>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>