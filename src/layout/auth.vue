<template>
  <Navigation/>
  <slot/>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: 'auth-layout',
  components: {Navigation}
}
</script>