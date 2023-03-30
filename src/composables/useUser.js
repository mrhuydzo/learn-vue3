import {ref} from 'vue'
import {fireStoreAuth} from "@/config/firebase";

const user = ref(fireStoreAuth.currentUser)
fireStoreAuth.onAuthStateChanged((_user) => {
    if (_user) user.value = _user
})

function getUser() {
    return {user}
}
export function useUser() {
    return {getUser}
}