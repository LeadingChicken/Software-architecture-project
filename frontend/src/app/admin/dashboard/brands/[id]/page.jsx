// import { updateBrand } from "@/app/lib/actions";
// import { fetchBrand } from "@/app/lib/data";
"use client";
import styles from "@/app/admin/dashboard/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setBrand } from "@/store/brandSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const SingleBrandPage = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = params;
  const brand = useSelector((state) => state.brand);
  const [formData, setFormData] = useState({
    brandName: "",
    field: "",
    location: "",
    gps: "",
    status: 0,
  });
  // console.log(formData);

  // console.log(id);
  // const brand = fetchBrand(id);

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // console.log(formData);
  };

  const fetchBrand = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/brands/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(`Data: ${data}`);
      setFormData(data);
      dispatch(setBrand(data));
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  // Hàm xử lý gửi form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    try {
      const response = await fetch(
        `http://localhost:5001/api/brands/${brand._id}`,
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
      console.log(`Data: ${data.message}`);

      // Kiểm tra xem yêu cầu có thành công không
      if (!response.ok) {
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

      //if response status is ok
      console.log("edit brand succesfully");

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
      console.error("Error editing brand:", error);
      // Bạn có thể thêm logic để thông báo lỗi
    }
  };

  //Gọi fetchBrands khi component được mount hoặc khi page thay đổi
  useEffect(() => {
    fetchBrand(id);
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
        {brand.brandName}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={brand._id} />
          <label>Brand Name</label>
          <input
            type="text"
            name="brandName"
            placeholder={formData.brandName}
            value={formData.brandName}
            onChange={handleChange}
          />
          <label>Field</label>
          <input
            type="text"
            name="field"
            placeholder={formData.field}
            value={formData.field}
            onChange={handleChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder={formData.location}
            value={formData.location}
            onChange={handleChange}
          />
          <label>GPS</label>
          <input
            type="text"
            name="gps"
            placeholder={formData.gps}
            value={formData.gps}
            onChange={handleChange}
          />
          <label>Status</label>
          <input
            type="number"
            name="status"
            placeholder={formData.status}
            value={formData.status}
            onChange={handleChange}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBrandPage;
