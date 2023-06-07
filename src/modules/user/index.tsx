import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/app/store";

export default function UserProfile() {
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.setUser.value);

  if (!user) {
    useEffect(() => {
      navigate("/auth/sign-in");
      return;
    }, []);
  }

  return <div>Profile</div>;
}
