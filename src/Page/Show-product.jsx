import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Page/Animation.css";
import { Link } from "react-router-dom";

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
    data = data.sort((a, b) =>
      sortBy === "LTH" ? a.price - b.price : b.price - a.price
    );
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

  useEffect(() => {
    var iso = new Isotope(".gridd", {
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });


    
// filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function (itemElem) {
        var number = itemElem.querySelector(".number").textContent;
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function (itemElem) {
        var name = itemElem.querySelector(".name").textContent;
        return name.match(/ium$/);
      },
    };

    // bind filter button click
    var filtersElem = document.querySelector(".filters-button-group");
    filtersElem.addEventListener("click", function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, "button")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      // use matching filter function
      filterValue = filterFns[filterValue] || filterValue;
      iso.arrange({ filter: filterValue });
    });

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll(".button-group");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        // only work with buttons
        if (!matchesSelector(event.target, "button")) {
          return;
        }
        const checkedButton = buttonGroup.querySelector(".is-checked");
        if (checkedButton) {
          checkedButton.classList.remove("is-checked");
        }
        event.target.classList.add("is-checked");
      });
    }
  }, [products]);










  
  return (
    <div>
      <div className="flex bg-base-300  h-20 items-center">
        <div className="flex-1 px-2 ">
          <a className="text-lg font-bold ">Proshop</a>
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="button-group filters-button-group">
              <button className="button is-checked" data-filter="*">
                All
              </button>
              <button className="button" data-filter=".Car">
                Car
              </button>
              <button className="button" data-filter=".Tech">
                Tech
              </button>
              <button className="button" data-filter=".Food">
                Food
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-end px-2">
          <div className="flex button-group filters-button-group">
            <button
              onClick={() => priceFilter("LTH")}
              className="btn btn-outline btn-success mx-3"
            >
              LowToHigh
            </button>
            <button
              onClick={() => priceFilter("HTL")}
              className="btn btn-outline btn-warning mx-3"
            >
              HighToLow
            </button>
          </div>
        </div>
      </div>
      <div
        className="gridd w-full flex flex-wrap"
        style={{ alignItems: "stretch", display: "flex" }}
      >
        {filteredProducts.map((ele, id) => (
          <Link to={`/product/${ele.id}`} key={id}>
          <div
            className={`card ${ele.category} element-item bg-base-100 shadow-2xl w-96 my-4`}
            data-category={ele.category}
            
          >
            <figure className="w-full">
              <img
                className="imgs w-full object-cover"
                src={ele.image}
                alt={ele.title}
              />
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Show;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../Page/Animation.css";
// import { Link } from "react-router-dom";

// const Show = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [category, setCategory] = useState("All");

//   const getData = async () => {
//     let res = await axios.get("http://localhost:3000/product");
//     if (res) {
//       setProducts(res.data);
//       setFilteredProducts(res.data);
//     }
//   };

//   const priceFilter = (sortBy) => {
//     let data = [...filteredProducts];
//     data = data.sort((a, b) =>
//       sortBy === "LTH" ? a.price - b.price : b.price - a.price
//     );
//     setFilteredProducts(data);
//   };

//   const filterByCategory = (category) => {
//     setCategory(category);
//     if (category === "All") {
//       setFilteredProducts(products);
//     } else {
//       const data = products.filter((product) => product.category === category);
//       setFilteredProducts(data);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     filterByCategory(category);
//   }, [products, category]);

//   useEffect(() => {
//     var iso = new Isotope(".gridd", {
//       itemSelector: ".element-item",
//       layoutMode: "fitRows",
//     });

//     // filter functions
//     var filterFns = {
//       // show if number is greater than 50
//       numberGreaterThan50: function (itemElem) {
//         var number = itemElem.querySelector(".number").textContent;
//         return parseInt(number, 10) > 50;
//       },
//       // show if name ends with -ium
//       ium: function (itemElem) {
//         var name = itemElem.querySelector(".name").textContent;
//         return name.match(/ium$/);
//       },
//     };

//     // bind filter button click
//     var filtersElem = document.querySelector(".filters-button-group");
//     filtersElem.addEventListener("click", function (event) {
//       // only work with buttons
//       if (!matchesSelector(event.target, "button")) {
//         return;
//       }
//       var filterValue = event.target.getAttribute("data-filter");
//       // use matching filter function
//       filterValue = filterFns[filterValue] || filterValue;
//       iso.arrange({ filter: filterValue });
//     });

//     // change is-checked class on buttons
//     var buttonGroups = document.querySelectorAll(".button-group");
//     for (var i = 0, len = buttonGroups.length; i < len; i++) {
//       var buttonGroup = buttonGroups[i];
//       radioButtonGroup(buttonGroup);
//     }

//     function radioButtonGroup(buttonGroup) {
//       buttonGroup.addEventListener("click", function (event) {
//         // only work with buttons
//         if (!matchesSelector(event.target, "button")) {
//           return;
//         }
//         const checkedButton = buttonGroup.querySelector(".is-checked");
//         if (checkedButton) {
//           checkedButton.classList.remove("is-checked");
//         }
//         event.target.classList.add("is-checked");
//       });
//     }
//   }, [products]);

//   return (
//     <div>
//       <div className="flex bg-base-300 h-20 items-center">
//         <div className="flex-1 px-2 ">
//           <a className="text-lg font-bold ">Proshop</a>
//         </div>

//         <div className="flex">
//           <div className="w-full">
//             <div className="button-group filters-button-group">
//               <button className="button is-checked" data-filter="*">
//                 All
//               </button>
//               <button className="button" data-filter=".Car">
//                 Car
//               </button>
//               <button className="button" data-filter=".Tech">
//                 Tech
//               </button>
//               <button className="button" data-filter=".Food">
//                 Food
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-1 justify-end px-2">
//           <div className="flex button-group filters-button-group">
//             <button
//               onClick={() => priceFilter("LTH")}
//               className="btn btn-outline btn-success mx-3"
//             >
//               LowToHigh
//             </button>
//             <button
//               onClick={() => priceFilter("HTL")}
//               className="btn btn-outline btn-warning mx-3"
//             >
//               HighToLow
//             </button>
//           </div>
//         </div>
//       </div>
//       <div
//         className="gridd w-full flex flex-wrap"
//         style={{ alignItems: "stretch", display: "flex" }}
//       >
//         {filteredProducts.map((ele, id) => (
//           <Link to={`/product/${ele.id}`} >
//           <div
//             className={`card ${ele.category} element-item bg-base-100 shadow-2xl w-96 my-4`}

//             data-category={ele.category}
//             key={ele.id}
//           >
//             <figure className="w-full">
//               <img
//                 className="imgs w-full object-cover"
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
//           </Link> 
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Show;
