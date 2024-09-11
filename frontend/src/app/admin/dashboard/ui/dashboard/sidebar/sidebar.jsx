"use client";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials, setUser } from "@/store/userSlice"; // Đường dẫn tới userSlice
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdGames,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/admin/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Brands",
        path: "/admin/dashboard/brands",
        icon: <MdShoppingBag />,
      },
      {
        title: "Games",
        path: "/admin/dashboard/games",
        icon: <MdGames />,
      },
    ],
  },
];

const Sidebar = () => {
  const [user, setUser] = useState({
    userName: "",
    isAdmin: false,
  });

  const router = useRouter();
  // useEffect(() => {
  //   setUserName(localUserName);
  // }, []);

  const logOut = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem("token");

    // Khởi tạo useRouter

    // Điều hướng người dùng về trang đăng nhập
    router.push("/authenticate/admin/login");
  };
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    const localUserName = localStorage.getItem("username");

    const getUser = async () => {
      try {
        const userData = await fetchUsers();
        console.log(userData); // Kiểm tra dữ liệu trả về

        setUser(userData.filter((user) => user.userName === localUserName)[0]);

        // console.log(user.userName);
        // console.log(user.isAdmin);

        if (!isAdmin) {
          router.push("/authenticate/admin/login");
        }
      } catch (error) {
        console.error({ message: error.message });
      }
    };

    getUser(); // Gọi hàm fetch khi component mount
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.userName}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button onClick={logOut} className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
