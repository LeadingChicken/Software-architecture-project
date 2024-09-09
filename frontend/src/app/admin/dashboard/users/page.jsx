"use client";
import Pagination from "@/app/admin/dashboard/ui/dashboard/pagination/pagination";
import Search from "@/app/admin/dashboard/ui/dashboard/search/search";
import styles from "@/app/admin/dashboard/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, setCount, deleteUser } from "@/store/usersSlice";

const UsersPage = ({ searchParams }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const count = useSelector((state) => state.users.count);
  const page = searchParams?.page || 1;
  const q = searchParams?.q || "";
  // const { users, setUsers } = useUserContext();
  // const [count, setCount] = useState(0);
  const pageSize = 5;

  // Hàm để lấy danh sách người dùng từ API
  const fetchUsers = async (q, page) => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      console.log(data);

      // Cập nhật số lượng người dùng
      dispatch(setCount(data.length));

      const filteredUsers = data.filter((user) =>
        user.userName.toLowerCase().includes(q.toLowerCase())
      );
      const paginatedUsers = filteredUsers.slice(
        (page - 1) * pageSize,
        page * pageSize
      );
      // setUsers(paginatedUsers);
      dispatch(setUsers(paginatedUsers));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return; // Nếu người dùng chọn "Cancel", thoát khỏi hàm
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      const data = response.json();

      if (response.ok) {
        // Cập nhật danh sách người dùng sau khi xóa
        dispatch(deleteUser(userId));
        console.log(data.message);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Gọi fetchUsers khi component được mount hoặc khi page thay đổi
  useEffect(() => {
    fetchUsers(q, page);
  }, [q, page]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/admin/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>username</td>
            <td>Full Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.userName}
                </div>
              </td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Ngăn chặn hành vi mặc định của form
                      handleDeleteUser(user._id); // Gọi hàm xóa người dùng
                    }}
                  >
                    <input type="hidden" name="id" value={user._id} />
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

export default UsersPage;
