

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    <div className="max-w-[900px] mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-3">
      <div className="md:w-[400px]">
        <img
          src="https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Furniture"
          className="rounded-lg mb-4 md:mb-0 md:mr-4"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Our Furniture Store</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna scelerisque,
          fermentum nunc vel, finibus nisl. Nulla facilisi. Aenean eu neque leo. Phasellus eget
          ligula vitae est tristique posuere.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vestibulum at velit convallis, faucibus erat sit amet, dapibus eros. Quisque nec dui
          rutrum, volutpat mauris nec, efficitur tortor.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Integer non nisl tincidunt, viverra nulla sit amet, finibus lectus. Phasellus ut ipsum
          at enim hendrerit ultricies.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Fusce vitae consequat libero, a finibus ipsum. Curabitur a justo vel enim pharetra
          consectetur nec sed metus.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About