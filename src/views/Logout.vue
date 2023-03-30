<template>
  <div>
    <h1>Logout page</h1>
  </div>
</template>

<script>
import {useLogout} from "@/composables/useLogout";
import {useRouter} from "vue-router";

export default {
  name: 'LogoutPage',
  setup() {
    const {error, logout} = useLogout();
    const router = useRouter ();
    const onLogout = async () => {
      await logout()
      if (!error.value) await router.push('/login')
    }
    onLogout()

    return {error, logout}
  }
}
</script>