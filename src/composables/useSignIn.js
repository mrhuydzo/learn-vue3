import {ref} from "vue"
import {fireStoreAuth} from "@/config/firebase";

const error = ref(null)
const isPending = ref(false)

async function signIn(email, password) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await fireStoreAuth.signInWithEmailAndPassword(email, password)
        return response
    } catch (err) {
        console.log(err);
        error.value = err.message
    }finally {
        isPending.value = false;
    }

}

export function useSignIn() {
    return {signIn, error, isPending}
}