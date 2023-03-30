<template>
  <slot/>
  <menuBottom/>
</template>
<script>
import menuBottom from "@/components/MenuBottom.vue";
export default {
  name: 'default-layout',
  components: {menuBottom}
}
</script>