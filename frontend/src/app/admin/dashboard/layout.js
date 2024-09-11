import Navbar from "./ui/dashboard/navbar/navbar";
import Sidebar from "./ui/dashboard/sidebar/sidebar";
import styles from "./ui/dashboard/dashboard.module.css";
import "./ui/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashboardLayout;
