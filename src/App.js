import React from "react";
import { 
  Routes, 
  Route, 
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Blog } from "./components/Blog/Blog";
import { PostsProvider } from "./hooks/usePosts";
import { Post } from "./components/Post/Post";
import { SignIn } from "./components/SignIn/SignIn";
import { Home } from "./components/Home/Home";
import { LikesProvider } from "./hooks/useLikes";
import { CommmentsProvider } from "./hooks/useComments";
import { AuthProvider } from "./hooks/useAuthProvider";

export const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <PostsProvider>
          <CommmentsProvider>
            <LikesProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postid" element={<Post />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
              <Footer />
            </LikesProvider>
          </CommmentsProvider>
        </PostsProvider>
      </AuthProvider>
    </div>
  );
}
