import AuthContextProvider from "./contexts/AuthContextProvider";
import CommentContextProvider from "./contexts/CommentContextProvider";
import FavoriteContextProvider from "./contexts/FavoriteContextProvider";
import NewsContextProvider from "./contexts/NewsContextProvider";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <CommentContextProvider>
          <NewsContextProvider>
            <FavoriteContextProvider>
              <Router />
            </FavoriteContextProvider>
          </NewsContextProvider>
        </CommentContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
