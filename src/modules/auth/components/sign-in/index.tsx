import { useEffect, useState } from "react";
import clsx from "clsx";
import FormSignUp from "../sign-up/FormSignUp";
import FormSignIn from "./FormSignIn";
import { useSelector } from "react-redux";
import { RootState } from "redux/app/store";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const user = useSelector((state: RootState) => state.setUser.value);
  console.log(user);

  const navigate = useNavigate();

  if (user) {
    useEffect(() => {
      navigate("/");
      return;
    }, []);
  }

  const [displayFormSignUp, setDisplayFormSignUp] = useState<Boolean>(false);

  return (
    <div className="relative flex bg-[#eee] min-h-screen justify-center items-center">
      <div className="flex max-w-[1200px] w-full bg-[#fff] rounded-xl shadow-xl p-5 ">
        <div
          className={clsx(
            "relative z-10 flex-1 bg-[url('https://images.squarespace-cdn.com/content/v1/5ec80d2e440bc1242bf17b0d/123e5b41-ff88-4e76-9579-34a9d06bf5f9/180621_Kavka_Ognisko_Cocktails-3-LoRes.jpg?format=1500w')] bg-cover bg-no-repeat bg-center rounded-l-xl rounded-r-md transition-transform",
            {
              "translate-x-full": displayFormSignUp,
            }
          )}
        ></div>
        <div
          className={clsx("flex-1 flex min-h-[800px] transition-transform", {
            "translate-x-[-100%]": displayFormSignUp,
          })}
        >
          <div className="flex-1 flex flex-col pt-20 justify-between">
            <div className="flex justify-center">
              {displayFormSignUp ? <FormSignUp /> : <FormSignIn />}
            </div>
            <div className="flex justify-center">
              <div>
                <span>
                  {displayFormSignUp
                    ? "Đã có tài khoản? "
                    : "Chưa có tài khoản? "}
                </span>
                <span
                  onClick={() => {
                    setDisplayFormSignUp((prevs) => !prevs);
                  }}
                  className="font-medium text-[#428cf9]"
                >
                  {displayFormSignUp ? "Đăng nhập ngay" : "Đăng kí ngay"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
