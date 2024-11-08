import { useNavigate } from "react-router-dom";

export const SearchResult = ({ title,image,message,id}) => {
const navigate = useNavigate()


  return (
    <div
      className="py-2 px-2 hover:bg-gray-300"
      onClick={() => navigate(`/news-latest/${id}`, { state: { image, title, message } })}
    >
      {title}
    </div>
  );
};