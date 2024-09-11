"use client";
import styles from "@/app/admin/dashboard/ui/dashboard/report/report.module.css";

import { useEffect, useState } from "react";
const BrandCount = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBrands = async () => {
    const response = await fetch("http://localhost:5001/api/brands", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Giả sử data là một mảng người dùng
  };

  useEffect(() => {
    const getBrands = async () => {
      try {
        const brandData = await fetchBrands();
        setBrands(brandData); // Cập nhật state với danh sách người dùng
      } catch (error) {
        console.error({ message: error.message });
      } finally {
        setLoading(false); // Đặt trạng thái loading là false
      }
    };

    getBrands(); // Gọi hàm fetch khi component mount
  }, []); // Chỉ chạy một lần khi component mount
  if (loading) return <div>Loading...</div>; // Hiển thị loading khi đang fetch
  return (
    <div className={`text-center ${styles.container}`}>
      <h2 className="mb-3 display-6">
        <b>Brands</b>
      </h2>
      <div className="d-flex justify-content-center display-7">
        <div>
          <p className="mb-3"> {brands.length}</p>{" "}
          {/* Render số lượng người dùng */}
          <ul className="mb-2">
            {brands.map((brand) => (
              <li key={brand.id}>{brand.brandName}</li> // Hiển thị thông tin người dùng
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandCount;
