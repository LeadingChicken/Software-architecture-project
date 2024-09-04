// pages/login.js
"use client";
import styleSignupForm from "@/styles/AuthPage.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/userSlice"; // Đường dẫn tới userSlice

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    // console.log(JSON.stringify(user));
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password !== confirmPassword");
    } else {
      try {
        const user = {
          userName: username,
          password: password,
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
        };

        const res = await fetch("http://localhost:5000/api/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        //Lưu vào store khi đăng ký thành công hoặc xóa khỏi store khi đăng ký thất bại

        if (res.ok) {
          // Xử lý khi đăng nhập thành công
          toast.success("Đăng ký thành công!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          dispatch(setCredentials({ username, password, rememberMe }));
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);

          router.push("./login");
        } else {
          const data = await res.json();
          console.log(data.message);
          toast.error(data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        //console.log("loi");
      } catch (error) {
        //console.log("loi");
        console.log({ message: error.message });
      }
    }

    // Gọi API để xác thực người dùng
  };

  //Xử lí thay đổi trong lúc input
  const handleChangeUsername = async (e) => {
    //console.log(username);
    setUsername(e.target.value);
  };
  const handleChangePassword = async (e) => {
    //console.log(password);
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = async (e) => {
    //console.log(password);
    setConfirmPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  //kiểm tra username và password khác rỗng
  //nếu một trong 2 rỗng thì không thể nhấn nút Login
  const isFormValid =
    username.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

  //render form
  return (
    <form onSubmit={handleSubmit} className="container align-items-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className={`card px-5 py-3 ${styleSignupForm.form}`}>
            <div className="card-body ">
              <h2
                className={`card-title text-center mb-2 ${styleSignupForm.h2}`}
              >
                Sign Up
              </h2>
              <p className="card-title text-center ">
                Already have an account?{" "}
                <a className={styleSignupForm.signIn} href="./login">
                  Log In
                </a>
              </p>

              <div className="d-flex align-items-start justify-content-between mb-3">
                <div className="me-3">
                  {/* Input Username */}
                  <div className="form-group">
                    <label className={styleSignupForm.label} htmlFor="username">
                      Username
                    </label>
                    <input
                      id="username"
                      className={`form-control ${styleSignupForm.input}`}
                      placeholder="Username"
                      value={username}
                      onChange={handleChangeUsername}
                      required
                    />
                  </div>

                  {/* Input Password */}
                  <div className="form-group">
                    <label
                      className={`${styleSignupForm.label}`}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className={`form-control ${styleSignupForm.input}`}
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={handleChangePassword}
                      required
                    />
                  </div>

                  {/* Input Confirm Password */}
                  <div className="form-group">
                    <label
                      className={`${styleSignupForm.label}`}
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      className={`form-control ${styleSignupForm.input}`}
                      placeholder="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={handleChangeConfirmPassword}
                      required
                    />
                  </div>
                </div>
                <div className="ms-3">
                  {/* Input Full Name*/}
                  <div className="form-group">
                    <label className={styleSignupForm.label} htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      className={`form-control ${styleSignupForm.input}`}
                      placeholder="Full Name"
                      value={fullName}
                      onChange={handleChangeFullName}
                      //required
                    />
                  </div>

                  {/* Input Email */}
                  <div className="form-group">
                    <label className={styleSignupForm.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className={`form-control ${styleSignupForm.input}`}
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={handleChangeEmail}
                      //required
                    />
                  </div>

                  {/* Input Phone Number */}
                  <div className="form-group">
                    <label
                      className={styleSignupForm.label}
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      className={`form-control ${styleSignupForm.input}`}
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handleChangePhoneNumber}
                      //required
                    />
                  </div>
                </div>
              </div>

              {/* Nút đăng ký */}
              <div
                className={`text-center ${styleSignupForm.submitBtn}`}
                style={{
                  backgroundColor: !isFormValid ? "#C3C3C3" : "#333333",
                  borderColor: !isFormValid ? "#C3C3C3" : "#333333",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-block text-white fs-4"
                  style={{
                    borderColor: "transparent",
                  }}
                  disabled={!isFormValid}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
