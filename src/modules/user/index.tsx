import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "redux/app/store";
import useGetProfile from "./hooks/useGetProfile";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.setUser.value);
  const { error } = useGetProfile({ userId: user?.id || "" });

  // check refreshToken nếu k họp lệ bên be sẽ xóa refreshToken và accessToken và dùng hàm next(),
  // bên service kiểm tra nếu k có accessToken sẽ trả về 200 data = null

  return user ? <div>Profile</div> : <Navigate to={"/auth/sign-in"} />;
}
