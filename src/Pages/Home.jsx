import axios from "axios"
import { useEffect, useState } from "react"



const Home = () => {
  const[product, setProduct]=useState([])



  useEffect(() =>{
    axios('https://api.jsonbin.io/v3/b/6688405ae41b4d34e40d983b')
    .then((res)=>setProduct(res.data.record))
  }, [])



  return (
   <>
      <div>
      <div className="banner h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
          <h1 className="text-white text-4xl">Welcome to Furniture Store</h1>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-[36px] font-sans font-bold mb-4 text-center">Featured Products</h2>
        <div className="main container mx-auto flex flex-wrap justify-between gap-4 m-3">
      {
      product.map((item, i) => (
        <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
          <div className="card_img w-[300px] h-40 bg-gray-200 flex items-center justify-center">
            <img src={item.photo_url} alt={item.name} className="object-contain h-full" />
          </div>
          <div className="px-6 py-4 flex flex-col items-start">
            <div className="title text-black text-lg font-semibold mt-3">{item.brand}</div>
            <ul className="list-disc pl-5 mt-4">
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
            </ul>
            <div className="text-lg text-[#FF9130] mt-4 font-bold">Price: {item.price}</div>
          </div>
        </div>
      ))}
    </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Furniture Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
   </>
  )
}

export default Home