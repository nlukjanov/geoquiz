import React, { useState, useEffect } from 'react';
import axios from 'axios';

const World = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((element, index) => {
        return <div key={index}>{element.name}</div>;
      })}
    </div>
  );
};

export default World;
