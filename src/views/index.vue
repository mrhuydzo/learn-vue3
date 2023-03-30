<template>
  <h1 v-if="user" class="text-center"><strong>Hello: {{user.displayName}}</strong></h1>
</template>

<script>
import {useUser} from "@/composables/useUser"

export default {
  name: "HomePage",
  setup() {
    const {getUser} = useUser()
    const {user} = getUser()
    return{user}
  }
}
</script>
