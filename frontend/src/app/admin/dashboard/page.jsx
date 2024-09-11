"use client";
import styles from "./ui/dashboard/dashboard.module.css";
import ReportsPage from "./report/report.jsx";
import DashboardLayout from "./layout";

export const layout = DashboardLayout;

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <ReportsPage />
      </div>
    </div>
  );
};

export default Dashboard;
