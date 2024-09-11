"use client";
import styles from "@/app/admin/dashboard/ui/dashboard/report/report.module.css";

import { useEffect, useState } from "react";

const UserCount = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/api/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data.count);
    return data; // Giả sử data là một mảng người dùng
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData.filter((user) => user.isAdmin === false)); // Cập nhật state với danh sách người dùng
      } catch (error) {
        // console.error({ message: error.message });
      } finally {
        setLoading(false); // Đặt trạng thái loading là false
      }
    };

    getUsers(); // Gọi hàm fetch khi component mount
  }, []); // Chỉ chạy một lần khi component mount
  if (loading) return <div>Loading...</div>; // Hiển thị loading khi đang fetch
  return (
    <div className={`text-center  ${styles.container}`}>
      <h2 className="mb-3 display-6">
        <b>Users</b>
      </h2>
      <p className="mb-3 display-6"> {users.length}</p>{" "}
      <div className="d-flex justify-content-center display-7">
        <div>
          {/* Render số lượng người dùng */}
          <ul className="mb-2">
            {users.map((user) => (
              <li key={user.id}>{user.userName}</li> // Hiển thị thông tin người dùng
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCount;
