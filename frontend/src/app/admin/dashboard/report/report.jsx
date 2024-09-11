import styles from "@/app/admin/dashboard/ui/dashboard/report/report.module.css";
import UserCount from "./userCount";
import BrandCount from "./brandCount";
import GameCount from "./gameCount";

const ReportsPage = () => {
  return (
    <div className="d-flex ">
      <div className="px-3 row w-100 justify-content-between">
        <div className={`py-3 col-md-4 col-12 `}>
          <UserCount />
        </div>
        <div className={`py-3 col-md-4 col-12 `}>
          <BrandCount />
        </div>
        <div className={`py-3 col-md-4 col-12 `}>
          <GameCount />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
