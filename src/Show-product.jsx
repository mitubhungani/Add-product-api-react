// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Show = () => {
//   const [products, setproducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [category, setcategory] = useState("All");

//   const getdata = async () => {
//     let res = await axios.get("http://localhost:3000/product");
//     if (res) setproducts(res.data);
//   };

//   const pricefilter=(sortBy)=>{
//     if (sortBy=="LTH"){
//       let data =[...filteredProducts]
//       data=data.sort((a, b) => a.price - b.price);
//       setproducts(data)
//       setFilteredProducts(data)
//     }else{
//       let data =[...filteredProducts]
//       data=data.sort((a, b) => b.price - a.price);
//       setproducts(data)
//       setFilteredProducts(data)
//     }
//   }

//   const sorting =(category)=>{
//     setcategory(category)
//     // let data =[...products]
//     // const result =data.filter((sortBy)=>{
//     //   return sortBy.data===sort;
//     // })    
//     // setproducts(result)

//     if (category=="All") {
//       setFilteredProducts(products)
//     }else{
//       const data =products.filter((product)=>product.category===category)
//       setFilteredProducts(data)
//     }

    

//   //   if(sort=="Car"){
//   //     let data =[...products]
//   //     data=data.filter((sortBy)=>{
//   //       return sortBy.category===sort;
//   //     })    
//   //     setproducts(data)
//   //   }
    
//   //   if(sort =="Tech"){
//   //     let data =[...products]
//   //     data=data.filter((sortBy)=>{
//   //       return sortBy.category===sort;
//   //     })    
//   //     setproducts(data)
//   //   }
//   //   if(sort =="Food"){
//   //     let data =[...products]
//   //     data=data.filter((sortBy)=>{
//   //       return sortBy.data===sort;
//   //     })    
//   //     setproducts(data)
//   //   }
//   // }
//   }



//   useEffect(() => {
//     getdata();
//   }, []);

//   useEffect(()=>{
//     sorting(category)
//   },[products,category])
  
//   return (
//     <div>
//       <div className="navbar bg-base-300 rounded-box flex justify-center">
//         <div className="flex-1 px-2">
//           <a className="text-lg font-bold">Proshop</a>
//         </div>

//     <div>
//     <button name="Car" onClick={()=>sorting("All")} className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white">All</button>
//     <button name="Car" onClick={()=>sorting("Car")} className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white">Car</button>
//     <button name="Tech" onClick={()=>sorting("Tech")}className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white">Tech</button>
//     <button name="Food" onClick={()=>sorting("Food")} className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white">Food</button>
//     </div>

//         <div className="flex flex-1 justify-end px-2">
//           <div className="flex items-center">
//             <button onClick={()=>pricefilter("LTH")} className="btn btn-outline btn-success mx-3">
//               Low To High
//             </button>

//             <button onClick={()=>pricefilter("HTL")} className="btn btn-outline btn-warning mx-3">
//               High To Low
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {filteredProducts.map((ele, id) => (
//           <div
//             className="card bg-base-100 shadow-2xl w-96 shadow-x  mx-auto my-4"
//             key={id}
//           >
//             <figure className="w-full">
//               <img
//                 className="w-full object-cover"
//                 src={ele.image}
//                 alt={ele.title}
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">
//                 {ele.title}
//                 <div className="badge badge-secondary">NEW</div>
//               </h2>
//               <p>{ele.dec}</p>
//               <div className="card-actions justify-end">
//                 <div className="badge badge-outline">$ : {ele.price}</div>
//                 <div className="badge badge-outline">$ : {ele.category}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Show;



import axios from "axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");

  const getData = async () => {
    let res = await axios.get("http://localhost:3000/product");
    if (res) {
      setProducts(res.data);
      setFilteredProducts(res.data);
    }
  };

  const priceFilter = (sortBy) => {
    let data = [...filteredProducts];
    data = data.sort((a, b) => (sortBy === "LTH" ? a.price - b.price : b.price - a.price));
    setFilteredProducts(data);
  };

  const filterByCategory = (category) => {
    setCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const data = products.filter((product) => product.category === category);
      setFilteredProducts(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterByCategory(category);
  }, [products, category]);



  return (
    <div>
      <div className="navbar bg-base-300 rounded-box flex justify-center">
        <div className="flex-1 px-2">
          <a className="text-lg font-bold">Proshop</a>
        </div>
        <div>
          <button
            name="All"
            onClick={() => filterByCategory("All")}
            className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white"
          >
            All
          </button>
          <button
            name="Car"
            onClick={() => filterByCategory("Car")}
            className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white"
          >
            Car
          </button>
          <button
            name="Tech"
            onClick={() => filterByCategory("Tech")}
            className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white"
          >
            Tech
          </button>
          <button
            name="Food"
            onClick={() => filterByCategory("Food")}
            className="badge badge-primary cursor-pointer mx-3 p-4 bg-transparent text-primary hover:bg-primary hover:text-white"
          >
            Food
          </button>
        </div>
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-center">
            <button onClick={() => priceFilter("LTH")} className="btn btn-outline btn-success mx-3">
              Low To High
            </button>
            <button onClick={() => priceFilter("HTL")} className="btn btn-outline btn-warning mx-3">
              High To Low
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredProducts.map((ele, id) => (
          <div className="card bg-base-100 shadow-2xl w-96 shadow-x  mx-auto my-4" key={id}>
            <figure className="w-full">
              <img className="w-full object-cover" src={ele.image} alt={ele.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {ele.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{ele.dec}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">$ : {ele.price}</div>
                <div className="badge badge-outline">$ : {ele.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
