"use client";
import styles from "@/app/admin/dashboard/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setGame } from "@/store/gameSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const SingleGamePage = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = params;
  const game = useSelector((state) => state.game);
  const [formData, setFormData] = useState({
    gameName: "",
    gameType: 0,
    allowExchanged: false,
    description: "No description",
  });
  // console.log(formData);

  // console.log(id);
  // const game = fetchGame(id);

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // console.log(formData);
  };

  const fetchGame = async (id) => {
    try {
      const response = await fetch(`http://localhost:5002/api/games/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(`Data: ${data}`);
      setFormData(data);
      dispatch(setGame(data));
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  // Hàm xử lý gửi form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    try {
      const response = await fetch(
        `http://localhost:5002/api/games/${game._id}`,
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
      console.log("edit game succesfully");

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
      router.push("../games");
    } catch (error) {
      console.error("Error editing game:", error);
      // Bạn có thể thêm logic để thông báo lỗi
    }
  };

  //Gọi fetchGames khi component được mount hoặc khi page thay đổi
  useEffect(() => {
    fetchGame(id);
  }, [id]);
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/game.png"} alt="" fill />
        </div>
        {game.gameName}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={game._id} />
          <label>Game Name</label>
          <input
            type="text"
            name="gameName"
            placeholder={formData.gameName}
            value={formData.gameName}
            onChange={handleChange}
          />
          <label>Game Type</label>
          <input
            type="number"
            name="gameType"
            placeholder={formData.gameType}
            value={formData.gameType}
            onChange={handleChange}
          />
          <label>Allow Exchanged</label>
          <input
            type="checkbox"
            name="allowExchanged"
            style={{ width: "2em", height: "2em" }}
            placeholder={formData.allowExchanged}
            value={formData.allowExchanged}
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder={formData.description}
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleGamePage;
