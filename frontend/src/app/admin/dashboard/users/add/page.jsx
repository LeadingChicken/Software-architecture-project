"use client";

import { useState } from "react";
import styles from "@/app/admin/dashboard/ui/dashboard/users/addUser/addUser.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { addUser } from "@/store/usersSlice";

const AddUserPage = ({}) => {
  const dispatch = useDispatch();
  // const { setUsers } = useUserContext();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    isAdmin: false,
    fullName: "",
  });
  const router = useRouter();

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData);
  };

  // Hàm xử lý gửi form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST", // Sử dụng phương thức POST
        headers: {
          "Content-Type": "application/json", // Đặt header Content-Type
        },
        body: JSON.stringify(formData), // Chuyển đổi dữ liệu thành JSON
      });

      //Doc du lieu response
      const data = await response.json();

      // Kiểm tra xem yêu cầu có thành công không
      if (!response.ok) {
        console.log("khong ok");
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
        console.log("throw error");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Bạn có thể thêm logic để thông báo thành công hoặc chuyển hướng
      // console.log(data.message);
      const newUser = data.newUser;
      dispatch(addUser(newUser));
      console.log("chay toast success");
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push("../users");
    } catch (error) {
      console.error("Error adding user:", error);
      // Bạn có thể thêm logic để thông báo lỗi
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="phone"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <select name="isAdmin" id="isAdmin" onChange={handleChange}>
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input
          type="text"
          placeholder="full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
