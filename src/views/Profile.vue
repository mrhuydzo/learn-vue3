<template>
  <div class="container" v-if="user">
    <h1>{{user.displayName}}</h1>
    <h1>{{user.email}}</h1>
    <router-link to="/logout">Log out</router-link>
  </div>
</template>

<script>
import {useUser} from "@/composables/useUser"

export default {
  name: 'ProfilePage',
  setup() {
    const {getUser} = useUser()
    const {user} = getUser()
    return {user}
  }
}
</script>