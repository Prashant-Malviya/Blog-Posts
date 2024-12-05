import React, { useState, useEffect } from "react";
import { api } from "../Api/api";

const BlogPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {

    // Fetching posts from JSONPlaceholder
    
    const fetchPosts = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);

    const filtered = posts.filter((post) => {
      if (e.target.value === "short") return post.title.length <= 20;
      if (e.target.value === "long") return post.title.length > 20;
      return true; // 'all'
    });
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 z-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Search Blog Posts</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Filter by title length:</label>
          <select
            value={filter}
            onChange={handleFilter}
            className="w-full p-2 border rounded-lg"
          >
            <option value="all">All</option>
            <option value="short">Short Titles</option>
            <option value="long">Long Titles</option>
          </select>
        </div>

        <div className="mt-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="border-b py-4"
              >
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.body}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
