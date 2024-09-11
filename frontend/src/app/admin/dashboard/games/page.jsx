"use client";
import Pagination from "@/app/admin/dashboard/ui/dashboard/pagination/pagination";
import Search from "@/app/admin/dashboard/ui/dashboard/search/search";
import styles from "@/app/admin/dashboard/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGames, setCount, deleteGame } from "@/store/gamesSlice";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const GamesPage = ({ searchParams }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  const count = useSelector((state) => state.games.count);
  const page = searchParams?.page || 1;
  const q = searchParams?.q || "";
  // const { games, setUsers } = useUserContext();
  // const [count, setCount] = useState(0);
  const pageSize = 5;

  // Hàm để lấy danh sách người dùng từ API
  const fetchGames = async (q, page) => {
    try {
      const response = await fetch("http://localhost:5002/api/games");
      const data = await response.json();
      console.log(data);

      // Cập nhật số lượng game
      dispatch(setCount(data.length));

      const filteredGames = data.filter((game) =>
        game.gameName.toLowerCase().includes(q.toLowerCase())
      );
      const paginatedGames = filteredGames.slice(
        (page - 1) * pageSize,
        page * pageSize
      );
      // setUsers(paginatedUsers);
      dispatch(setGames(paginatedGames));
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleDeleteGame = async (gameId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (!confirmed) {
      return; // Nếu người dùng chọn "Cancel", thoát khỏi hàm
    }

    try {
      const response = await fetch(
        `http://localhost:5002/api/games/${gameId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log(`Data: ${data.message}`);

      if (response.ok) {
        // Cập nhật danh sách người dùng sau khi xóa
        dispatch(deleteGame(gameId));
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
      console.error("Error deleting game:", error);
    }
  };

  // Gọi fetchUsers khi component được mount hoặc khi page thay đổi
  useEffect(() => {
    fetchGames(q, page);
  }, [q, page]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a game..." />
        <Link href="/admin/dashboard/games/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Game Name</td>
            <td>Game Type</td>
            <td>Allow Exchanged</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/game.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {game.gameName}
                </div>
              </td>
              <td>{game.gameType}</td>
              <td>{game.allowExchanged ? "Yes" : "No"}</td>
              <td>{game.description}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/dashboard/games/${game._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Ngăn chặn hành vi mặc định của form
                      handleDeleteGame(game._id); // Gọi hàm xóa người dùng
                    }}
                  >
                    <input type="hidden" name="id" value={game._id} />
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

export default GamesPage;
