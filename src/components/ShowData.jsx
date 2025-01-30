import { useState, useEffect } from "react";

function ShowData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Unable to fetch data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table border="1" style={{ borderStyle: "groove" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
