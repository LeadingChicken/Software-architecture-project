"use client";
import { useRouter } from "next/navigation";

export const handleLogout = async (e, router) => {
  // const response = await fetch("/api/logout", {
  //   method: "POST",
  //   credentials: "include", // Đảm bảo cookie được gửi
  // });

  // if (response.ok) {
  //   // Chuyển hướng về trang đăng nhập hoặc trang chính

  // }
  e.preventDefault();
  router.push("/login");
};
