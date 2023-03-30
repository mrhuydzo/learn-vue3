import {ref} from "vue"
import {fireStoreAuth} from "@/config/firebase";

const error = ref(null)

async function logout() {
    error.value = null;
    try {
        const response = await fireStoreAuth.signOut()
        console.log(response);
        return response
    } catch (err) {
        console.log(err);
        error.value = err.message
    }
}

export function useLogout() {
    return {error, logout}
}