"use client";
import Pagination from "@/app/admin/dashboard/ui/dashboard/pagination/pagination";
import Search from "@/app/admin/dashboard/ui/dashboard/search/search";
import styles from "@/app/admin/dashboard/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrands, setCount, deleteBrand } from "@/store/brandsSlice";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const BrandsPage = ({ searchParams }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.brands);
  const count = useSelector((state) => state.brands.count);
  const page = searchParams?.page || 1;
  const q = searchParams?.q || "";
  // const { brands, setUsers } = useUserContext();
  // const [count, setCount] = useState(0);
  const pageSize = 5;

  // Hàm để lấy danh sách người dùng từ API
  const fetchBrands = async (q, page) => {
    try {
      const response = await fetch("http://localhost:5001/api/brands");
      const data = await response.json();
      console.log(data);

      // Cập nhật số lượng brand
      dispatch(setCount(data.length));

      const filteredBrands = data.filter((brand) =>
        brand.brandName.toLowerCase().includes(q.toLowerCase())
      );
      const paginatedBrands = filteredBrands.slice(
        (page - 1) * pageSize,
        page * pageSize
      );
      // setUsers(paginatedUsers);
      dispatch(setBrands(paginatedBrands));
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleDeleteBrand = async (brandId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this brand?"
    );

    if (!confirmed) {
      return; // Nếu người dùng chọn "Cancel", thoát khỏi hàm
    }

    try {
      const response = await fetch(
        `http://localhost:5001/api/brands/${brandId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log(`Data: ${data.message}`);

      if (response.ok) {
        // Cập nhật danh sách người dùng sau khi xóa
        dispatch(deleteBrand(brandId));
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
      } else {
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
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  // Gọi fetchUsers khi component được mount hoặc khi page thay đổi
  useEffect(() => {
    fetchBrands(q, page);
  }, [q, page]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a brand..." />
        <Link href="/admin/dashboard/brands/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Brand Name</td>
            <td>Field</td>
            <td>Location</td>
            <td>GPS</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {brand.brandName}
                </div>
              </td>
              <td>{brand.field}</td>
              <td>{brand.location}</td>
              <td>{brand.gps}</td>
              <td>{brand.status}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/dashboard/brands/${brand._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Ngăn chặn hành vi mặc định của form
                      handleDeleteBrand(brand._id); // Gọi hàm xóa người dùng
                    }}
                  >
                    <input type="hidden" name="id" value={brand._id} />
                    <button
                      type="submit"
                      className={`${styles.button} ${styles.delete}`}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default BrandsPage;
