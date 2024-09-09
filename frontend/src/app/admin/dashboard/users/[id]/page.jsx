// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
"use client";
import styles from "@/app/admin/dashboard/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const SingleUserPage = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = params;
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    isAdmin: false,
    fullName: "",
  });
  // console.log(formData);

  // console.log(id);
  // const user = fetchUser(id);

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // console.log(formData);
  };

  const fetchUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(`Data: ${data}`);
      setFormData(data);
      dispatch(setUser(data));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Hàm xử lý gửi form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${user._id}`,
        {
          method: "PUT", // Sử dụng phương thức POST
          headers: {
            "Content-Type": "application/json", // Đặt header Content-Type
          },
          body: JSON.stringify(formData), // Chuyển đổi dữ liệu thành JSON
        }
      );

      //Doc du lieu response
      const data = await response.json();

      // Kiểm tra xem yêu cầu có thành công không
      if (!response.ok) {
        console.log("throw error");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Bạn có thể thêm logic để thông báo thành công hoặc chuyển hướng
      // console.log(data.message);

      //if response status is ok
      console.log("edit user succesfully");
      router.push("../users");
    } catch (error) {
      console.error("Error editing user:", error);
      // Bạn có thể thêm logic để thông báo lỗi
    }
  };

  //Gọi fetchUsers khi component được mount hoặc khi page thay đổi
  useEffect(() => {
    fetchUser(id);
  }, [id]);
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {user.userName}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={user._id} />
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder={formData.userName}
            value={formData.userName}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={formData.email}
            value={formData.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder={formData.password}
            value={formData.password}
            onChange={handleChange}
          />
          <label>Phone</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder={formData.phoneNumber}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <label>Full Name</label>
          <textarea
            type="text"
            name="fullName"
            placeholder={formData.fullName}
            value={formData.fullName}
            onChange={handleChange}
          />
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
            value={formData.isAdmin}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
