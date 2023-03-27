<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import {useRoute} from 'vue-router'
import {computed} from "vue";
import {PUBLIC_LAYOUT} from "@/constant"

export default {
  setup() {
    const route = useRoute();
    console.log("🚀 ~ file: App.vue ~ line 13 ~ route: ", route);
    return {layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout")}
  }
}
//
// import {fireStoreCore} from "@/config/firebase";
//
// export default {
//   setup() {
//     async function getTransactions() {
//       const res = await fireStoreCore.collection('transactions').get();
//       console.log(res.docs);
//       const data = res.docs.map(doc => {
//         return doc.data();
//       })
//       console.log(data,"===")
//     }
//     getTransactions()
//   }
// }
</script>
