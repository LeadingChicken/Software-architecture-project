// pages/login.js
"use client";
import styleLoginForm from "@/styles/AuthPage.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/userSlice"; // Đường dẫn tới userSlice

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Tải thông tin từ localStorage khi component được mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  //console.log(rememberMe);

  const handleSubmit = async (e) => {
    // console.log(JSON.stringify(user));
    e.preventDefault();

    // Gọi API để xác thực người dùng
    const user = {
      userName: username,
      password: password,
    };
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (rememberMe) {
      dispatch(setCredentials({ username, password, rememberMe }));
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    if (res.ok) {
      // Xử lý khi đăng nhập thành công

      //console.log("Đăng nhập thành công");
      //console.log(res);
      toast.success("Đăng nhập thành công!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      // Xử lý khi đăng nhập thất bại
      //console.error("Đăng nhập thất bại");
      //console.log(res);
      toast.error("Đăng nhập thất bại!", {
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
  const handleChangeRememberMe = async (e) => {
    //console.log(password);
    setRememberMe(e.target.checked);
  };
  //kiểm tra username và password khác rỗng
  //nếu một trong 2 rỗng thì không thể nhấn nút Login
  const isFormValid = username.trim() !== "" && password.trim() !== "";

  //render form
  return (
    <form onSubmit={handleSubmit} className="container align-items-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className={`card px-5 py-3 ${styleLoginForm.form}`}>
            <div className="card-body">
              <h2
                className={`card-title text-center mb-2 ${styleLoginForm.h2}`}
              >
                Log In
              </h2>
              <p className="card-title text-center ">
                Don't have an account?{" "}
                <a className={styleLoginForm.signUp} href="./signup">
                  Sign Up
                </a>
              </p>

              {/* Input Username */}
              <div className="form-group">
                <label className={styleLoginForm.label} htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  className={`form-control ${styleLoginForm.input}`}
                  placeholder="Username"
                  value={username}
                  onChange={handleChangeUsername}
                  required
                />
              </div>

              {/* Input password */}
              <div className="form-group">
                <label className={`${styleLoginForm.label}`} htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className={`form-control ${styleLoginForm.input}`}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  required
                />
              </div>

              {/* Remember me */}
              <div className="form-check d-flex align-items-center mt-3 mb-3">
                <input
                  className={`form-check-input me-2 ${styleLoginForm.checkBox}`}
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleChangeRememberMe}
                  style={{
                    accentColor: "#333333",
                  }}
                />
                <label
                  className="form-check-label me-2"
                  htmlFor="rememberMe"
                  style={{
                    color: "#858585",
                  }}
                >
                  Remember Me
                </label>
                <a className={styleLoginForm.forget_password} href="#">
                  Forget your password
                </a>
              </div>

              {/* Nút đăng nhập */}
              <div
                className={`text-center ${styleLoginForm.submitBtn}`}
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
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
