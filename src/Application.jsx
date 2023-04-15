import Cookies from 'js-cookie'
import { AppRoutes } from "./AppRoutes";

export function Application() {
  const userToken = Cookies.get('token')
  return (
    <>
      <AppRoutes user={userToken} />
    </>
  );
}

 

