import BigImg from "../components/BigImg";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import ConfirmDelete from "../components/ConfirmDelete";
import { useState } from "react";
import Comment from "../components/Comment";
import { useLocation } from "react-router-dom";
import useComment from "../hooks/useComment";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useNews from "../hooks/useNews";
import useFavorite from "../hooks/useFavorite";

// const comments = [
//   { id: 111, firstName: "Harry Potter", comment: "สวัสดีครับ" },
//   { id: 222, firstName: "Lilly Potter", comment: "สวัสดีค่ะ" },
//   { id: 333, firstName: "Sirius Black", comment: "สวัสดีครับ 2" },
//   { id: 444, firstName: "Ron weasley", comment: "สวัสดีครับ 3" },
// ];

export default function NewsLatestPost() {
  const { newsId } = useParams();
  const { state } = useLocation();
  const { image, title, message } = state || {};
  const { authUser } = useAuth();
  const { addFavoriteByUserId,deleteFavoriteByUserId } = useFavorite();
  const { comments, fetchCommentsbyNewsId, createCommentByUserId } =
    useComment();

  const [confirmDeleteNews, setConfirmDeleteNews] = useState(false);
  const [favStatus, setFavStatus] = useState(false);

console.log("==================",authUser)

  useEffect(() => {
    fetchCommentsbyNewsId(newsId);
  }, [newsId]);

  const handleSwitchColorButton = () => {
    setFavStatus(!favStatus);
  };

  const handleAddfavoriteNews = (newsId) => {
    if (favStatus === false) {
      addFavoriteByUserId(newsId);
      favStatus(true)
    }
  };

  const handleDeletefavoriteNews = (newsId) => {
    if (favStatus === true) {
      deleteFavoriteByUserId(newsId);
      favStatus(false)
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[61%]">
        <div className="mt-10 mb-5">
          <div className="text-3xl font-semibold ">{title}</div>
        </div>
        <div>
          <BigImg src={image} widthSize="1000px" heightSize="555px"></BigImg>
        </div>
        <div className="mt-10 mb-10 text-[20px]">{message}</div>
        {authUser?.isAdmin === true ? (
          <div className="mb-10">
            <button
              className="bg-[#0854E9] text-white p-4 rounded-lg hover:bg-blue-500"
              onClick={() => setConfirmDeleteNews(!confirmDeleteNews)}
            >
              DELETE THIS NEWS
            </button>
            {confirmDeleteNews && (
              <ConfirmDelete
                newsId={newsId}
                onClose={() => setConfirmDeleteNews(!confirmDeleteNews)}
              />
            )}
          </div>
        ) : (
          <div className="mb-10">
            {authUser && (
              <button
                className={`p-4 rounded-lg ${
                  !favStatus
                    ? "border-2 border-[#0854E9] text-[#0854E9]"
                    : "border-2 border-[#0854E9] bg-[#0854E9] text-white"
                }`}
                onClick={() => {
                  handleSwitchColorButton(), handleAddfavoriteNews(newsId),handleDeletefavoriteNews(newsId);
                }}
              >
                FAVORITE THIS NEWS
              </button>
            )}
          </div>
        )}

        <div className="bg-[#F2FAFF] w-full h-32 rounded-xl flex items-center gap-10 pl-10">
          <div>
            <div className="text-[20px] text-[#085DFF]">FirstName LastName</div>
            <h1 className="text-gray-600">Admin</h1>
          </div>
        </div>
        <hr className="border-1 mt-10" />
        <div>
          <Comment />
        </div>
      </div>
    </div>
  );
}
