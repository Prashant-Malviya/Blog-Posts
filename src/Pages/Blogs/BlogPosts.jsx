import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner"; 
import { api } from "../../Api/api";

const BlogPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true); 
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    // Fetching posts from the API
    const fetchPosts = async () => {
      setLoading(true); 
      try {
        const response = await fetch(api);
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    setSearching(true); 

    setTimeout(() => {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPosts(filtered);
      setSearching(false); 
    }, 500);
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
    setSearching(true); 

    setTimeout(() => {
      const filtered = posts.filter((post) => {
        if (filterValue === "short") return post.title.length <= 20;
        if (filterValue === "long") return post.title.length > 20;
        return true;
      });
      setFilteredPosts(filtered);
      setSearching(false); 
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative top-14 z-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Search Blog Posts</h1>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Filter Dropdown */}
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

        {/* Loader while fetching or searching */}
        {(loading || searching) && (
          <div className="flex justify-center mt-6">
            <RotatingLines
              strokeColor="blue"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </div>
        )}

        {/* Results */}
        {!loading && !searching && (
          <div className="mt-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="border-b py-4">
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-600">{post.body}</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">No posts found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
