


const Blog = () => {
  
  const posts = [
    {
      id: 1,
      title: "Tips for Choosing the Right Furniture",
      image: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "John Doe",
      date: "July 6, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna scelerisque, fermentum nunc vel, finibus nisl. Nulla facilisi. Aenean eu neque leo. Phasellus eget ligula vitae est tristique posuere."
    },
    {
      id: 2,
      title: "The Latest Trends in Home Decor",
      image: "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Jane Smith",
      date: "July 5, 2024",
      content: "Vestibulum at velit convallis, faucibus erat sit amet, dapibus eros. Quisque nec dui rutrum, volutpat mauris nec, efficitur tortor."
    }
  ];

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Blog</h1>
        {posts.map((post) => (
          <div key={post.id} className="max-w-lg mx-auto mb-8 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">By {post.author} | {post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
