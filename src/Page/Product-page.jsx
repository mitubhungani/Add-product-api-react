import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productp = () => {
  const [productp, setproductp] = useState({});

  let {id}=useParams()
  console.log(id);
  
  const getdata = async (id) => {
    let res = await axios.get(`http://localhost:3000/product/${id}`);
    setproductp(res.data);
  };

  useEffect(() => {
    getdata(id);
  }, []);

  return (
    <div>
      <div>
        <h1>{productp.title}</h1>
        <img src={productp.image} alt={productp.title} />
        <p>{productp.dec}</p>
        <p>Price: ${productp.price}</p>
      </div>
    </div>
  );
};

export default Productp;




