import { useNavigate } from "react-router-dom";
import useNews from "../hooks/useNews";
import FormBox from "./FormBox";

export default function ConfirmDelete({ onClose, newsId }) {

  const navigate = useNavigate()
  const { deleteNewsByNewsId } = useNews();

  const handleConfirmDeleteNews = (newsId) => {
    deleteNewsByNewsId(newsId);
    navigate("/")
  };

  return (
    <div className="w-[50%] shadow-lg">
      <FormBox>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl">Are you sure to delete this news?</h1>
          <button
            onClick={() => handleConfirmDeleteNews(newsId)}
            className="bg-[#0854E9] text-white px-4 py-2 rounded-lg hover:bg-blue-500 "
          >
            SURE
          </button>
          <button
            onClick={onClose}
            className="bg-[#0854E9] text-white px-4 py-2 rounded-lg hover:bg-blue-500 "
          >
            CANCEL
          </button>
        </div>
      </FormBox>
    </div>
  );
}
