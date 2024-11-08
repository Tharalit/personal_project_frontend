import { useState } from "react";
import TextGradient from "../components/TextGradient";
import newsApi from "../apis/news";

export default function CreateNews() {
  const [addTitle, setAddTitle] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [clickButton, setClickButton] = useState(""); // default value can be "NEWS" or "OLD"
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // เซ็ตรูปภาพที่เลือกให้แสดงในรูปพรีวิว
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", addTitle);
    formData.append("message", addMessage);
    formData.append("newsType", clickButton);
    formData.append("image", imagePreview);

    try {
      const response = await newsApi.createNews(formData);
      console.log("News created:", response.data);

      setAddTitle("");
      setAddMessage("");
      setClickButton("");
      setImagePreview(null);
    } catch (error) {
      console.error("Error creating news:", error);
    }
    alert("News has created");
  };

  return (
    <div className="flex flex-col px-40">
      <div className="mt-10">
        <TextGradient textSize="2xl">Create News</TextGradient>
      </div>

      <div className="flex justify-center mt-5">
        <form onSubmit={handleClickSubmit} action="">
          <div className="w-[854px] h-[480px] rounded-lg bg-gray-200 flex justify-center items-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-[854px] max-h-[480px] rounded-lg"
              />
            ) : (
              <input type="file" name="" id="" onChange={handleImageChange} />
            )}
          </div>
          <input
            className="border-2 border-[#0854E9] rounded-lg w-full mt-4 p-2"
            type="text"
            placeholder="Title name"
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
          />
          <textarea
            className="border-2 border-[#0854E9] rounded-lg w-full mt-4 p-2 h-[500px]"
            type="text"
            value={addMessage}
            onChange={(e) => setAddMessage(e.target.value)}
          />
          <div className="flex justify-between mt-10">
            <div className="flex items-center gap-2">
              <div className="border-2 border-[#0854E9] text-[#0854E] p-4 rounded-lg">
                <input
                  type="radio"
                  name="newsType"
                  value="NEWS"
                  id="news"
                  checked={clickButton === "NEWS"}
                  onChange={(e) => setClickButton(e.target.value)}
                />
                <label htmlFor="news">NEWS</label>
              </div>
              <div className="border-2 border-[#0854E9] text-[#0854E] p-4 rounded-lg">
                <input
                  type="radio"
                  name="newsType"
                  value="OLD"
                  id="old"
                  checked={clickButton === "OLD"}
                  onChange={(e) => setClickButton(e.target.value)}
                />
                <label htmlFor="old">OLD</label>
              </div>
            </div>
            <button
              className="text-[#0854E9] border-2 border-[#0854E9] px-6 p-2 rounded-lg active:bg-[#0854E9] active:text-white "
              type="submit"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
