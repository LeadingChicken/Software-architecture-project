"use client";

import { useState } from "react";
import styles from "@/app/admin/dashboard/ui/dashboard/users/addUser/addUser.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { addBrand } from "@/store/brandsSlice";

const AddBrandPage = ({}) => {
  const dispatch = useDispatch();
  // const { setBrands } = useBrandContext();
  const [formData, setFormData] = useState({
    brandName: "",
    field: "",
    location: "",
    gps: "",
    status: 0,
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
      const response = await fetch("http://localhost:5001/api/brands", {
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
      const newBrand = data.newBrand;
      console.log(newBrand);
      dispatch(addBrand(newBrand));
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
      router.push("../brands");
    } catch (error) {
      console.error("Error adding brand:", error);
      // Bạn có thể thêm logic để thông báo lỗi
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="brand name"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="gps"
          name="gps"
          value={formData.gps}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBrandPage;
