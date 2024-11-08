// import { useParams } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { useState } from "react";
// import useComment from "../hooks/useComment";

// export default function Comment() {
//   const { newsId } = useParams();
//   const { authUser } = useAuth();
//   const {
//     comments,
//     setComments,
//     createCommentByUserId,
//     deleteCommentByUserId,
//     updateUserComment,
//   } = useComment();
//   const [editMode, setEditMode] = useState(null);
//   const [addComment, setAddComment] = useState("");
//   const [editedComment, setEditedComment] = useState("");

//   const handleChangeComment = (e) => {
//     setAddComment(e.target.value);
//   };

//   const handleAddComment = async (e) => {
//     e.preventDefault();
//     try {
//       const data = { newsId, message: addComment };
//       const result = await createCommentByUserId(data);
//       setComments([result, ...comments]);
//       setAddComment("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDeleteComment = (id) => {
//     setComments(comments.filter((item) => item.id !== id));
//     deleteCommentByUserId(id);
//   };

//   const handleEditComment = (commentId) => {
//     const updatedComments = comments.map((item) =>
//       item.id === commentId ? { ...item, message: editedComment } : item
//     );
//     const data = { commentId, editedComment };
//     setComments(updatedComments);
//     setEditMode(null);
//     setEditedComment("");
//     updateUserComment(data);
//   };

//   return (
//     <div>
//       {authUser?.isAdmin === false && (
//         <form>
//           <textarea
//             className="mt-10 border-[1.5px] border-blue-400 w-[60%] h-[100px] rounded-2xl focus:outline-none p-4"
//             type="text"
//             placeholder={`What's on your mind, ${authUser?.firstName}?`}
//             value={addComment}
//             onChange={handleChangeComment}
//           />

//           <button
//             onClick={handleAddComment}
//             className="text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-500 flex justify-center m-2"
//           >
//             Comment
//           </button>
//         </form>
//       )}

//       {comments.map((item, index) => (
//         <div key={index} className="mt-5">
//           <div className="flex items-center gap-2">
//             <h1 className="text-xl bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
//               {item.user?.firstName}:
//             </h1>
//             {editMode === item.id ? (
//               <input
//                 type="text"
//                 value={editedComment}
//                 onChange={(e) => setEditedComment(e.target.value)}
//                 className="border-[1.5px] border-blue-400 w-[575px] focus:outline-none p-2 rounded-xl"
//               />
//             ) : (
//               <p>{item.message}</p>
//             )}
//           </div>
//           {authUser?.firstName === item.user?.firstName && (
//             <div className="flex gap-2">
//               {editMode === item.id ? (
//                 <div className="flex gap-2">
//                   <button
//                     className="text-blue-500"
//                     onClick={() => handleEditComment(item.id)}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="text-blue-500"
//                     onClick={() => setEditMode(null)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex gap-2">
//                   <button
//                     className="text-blue-500"
//                     onClick={() => {
//                       setEditMode(item.id);
//                       setEditedComment(item.message);
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="text-blue-500"
//                     onClick={() => handleDeleteComment(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import useComment from "../hooks/useComment";

export default function Comment() {
  const { newsId } = useParams();
  const { authUser } = useAuth();
  const {
    comments,
    setComments,
    createCommentByUserId,
    deleteCommentByUserId,
    updateUserComment,
  } = useComment();
  const [editMode, setEditMode] = useState(null);
  const [addComment, setAddComment] = useState("");
  const [editedComment, setEditedComment] = useState("");

  const handleChangeComment = (e) => {
    setAddComment(e.target.value);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const data = { newsId, message: addComment };
      const result = await createCommentByUserId(data);
      setComments([result, ...comments]);
      setAddComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((item) => item.id !== id));
    deleteCommentByUserId(id);
  };

  const handleEditComment = (commentId) => {
    const updatedComments = comments.map((item) =>
      item.id === commentId ? { ...item, message: editedComment } : item
    );
    const data = { commentId, editedComment };
    setComments(updatedComments);
    setEditMode(null);
    setEditedComment("");
    updateUserComment(data);
  };

  return (
    <div>
      {authUser?.isAdmin === false && (
        <form>
          <textarea
            className="mt-10 border-[1.5px] border-blue-400 w-[60%] h-[100px] rounded-2xl focus:outline-none p-4"
            type="text"
            placeholder={`What's on your mind, ${authUser?.firstName}?`}
            value={addComment}
            onChange={handleChangeComment}
          />

          <button
            onClick={handleAddComment}
            className="text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-500 flex justify-center m-2"
          >
            Comment
          </button>
        </form>
      )}

      {comments.map((item, index) => (
        <div key={index} className="mt-5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
              {item.user?.firstName}:
            </h1>
            {editMode === item.id ? (
              <input
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
                className="border-[1.5px] border-blue-400 w-[575px] focus:outline-none p-2 rounded-xl"
              />
            ) : (
              <p>{item.message}</p>
            )}
          </div>
          {(authUser?.firstName === item.user?.firstName || authUser?.isAdmin) && (
            <div className="flex gap-2">
              {authUser?.isAdmin ? (
                <button
                  className="text-blue-500"
                  onClick={() => handleDeleteComment(item.id)}
                >
                  Delete
                </button>
              ) : (
                <>
                  {editMode === item.id ? (
                    <div className="flex gap-2">
                      <button
                        className="text-blue-500"
                        onClick={() => handleEditComment(item.id)}
                      >
                        Save
                      </button>
                      <button
                        className="text-blue-500"
                        onClick={() => setEditMode(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        className="text-blue-500"
                        onClick={() => {
                          setEditMode(item.id);
                          setEditedComment(item.message);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-blue-500"
                        onClick={() => handleDeleteComment(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
