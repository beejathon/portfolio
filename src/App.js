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

export const App = () => {
  return (
    <div className="App">
      <PostsProvider>
        <CommmentsProvider>
          <LikesProvider>
            <Header />
            <Routes>
              <Route path="/portfolio/" element={<Home />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/projects" element={<Projects />} />
              <Route path="/portfolio/blog" element={<Blog />} />
              <Route path="/portfolio/blog/:postid" element={<Post />} />
              <Route path="/portfolio/blog/signin" element={<SignIn />} />
            </Routes>
            <Footer />
          </LikesProvider>
        </CommmentsProvider>
      </PostsProvider>
    </div>
  );
}
