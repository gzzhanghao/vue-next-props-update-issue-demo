<template>
  <A>
    <B class="b" :data-foo="dynamic" />
  </A>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import A from './components/A'
import B from './components/B'

const dynamic = ref(1);
</script>
