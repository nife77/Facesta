
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase/firebase'
import useShowToast from './useShowToast';


const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();

  const handleLogout = async () => {
    try {
        await signOut();
        localStorage.removeItem("user-info");
        
    } catch (error) {
        showToast("Error", error.message, "error");
    }
};
    return {handleLogout,isLoggingOut,error}
}

export default useLogout