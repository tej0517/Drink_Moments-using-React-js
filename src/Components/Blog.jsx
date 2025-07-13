import React from "react";


const blogPosts = [
  {
    id: 1,
    title: "The Recipe from a Winemaker's Restaurant",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  },
  {
    id: 2,
    title: "The Recipe from a Winemaker's Restaurant",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://images.pexels.com/photos/27977143/pexels-photo-27977143/free-photo-of-a-bowl-of-spaghetti-with-a-fork-and-knife-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    title: "The Recipe from a Winemaker's Restaurant",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "The Recipe from a Winemaker's Restaurant",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "The Recipe from a Winemaker's Restaurant",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://images.pexels.com/photos/821054/pexels-photo-821054.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "The Recipe from a Winemaker's Restaurant",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://images.pexels.com/photos/10068130/pexels-photo-10068130.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Blog = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-5 fw-bold">Our Recent Blogs</h2>
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card blog-card h-100">
              <div className="card-img-wrapper">
                <img src={post.image} className="card-img-top" alt={post.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <a href="#" className="blog-read-more">Continue →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
