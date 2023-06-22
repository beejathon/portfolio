import React from "react";
import { 
  Routes, 
  Route, 
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog/Blog";
import { PostsProvider } from "./hooks/PostsProvider";

export const App = () => {
  return (
    <div className="App">
      <PostsProvider>
        <Header />
        <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/blog" element={<Blog />} />  
        </Routes>
        <Footer />
      </PostsProvider>
    </div>
  );
}
