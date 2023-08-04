import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "redux/app/store";

export default async function UserProfile() {
  const user = useSelector((state: RootState) => state.setUser.value);

  // check refreshToken nếu k họp lệ bên be sẽ xóa refreshToken và accessToken và dùng hàm next(),
  // bên service kiểm tra nếu k có accessToken sẽ trả về 200 data = null
  await AxiosInterceptorResponse(() => {}).get("");

  return user ? <div>Profile</div> : <Navigate to={"/auth/sign-in"} />;
}
