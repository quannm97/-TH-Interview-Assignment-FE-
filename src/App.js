import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  //make sure component only get data 1 time only with useRef
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      axios
        .get(`https://randomuser.me/api/?page=3&results=100`)
        .then((res) => {
            //sort data with localeCompare
          const softedData = res.data.results;
          softedData.sort((a, b) => a.name.first.localeCompare(b.name.first));
          setData(softedData);
        })
        .catch(() => {
          alert("There was an error while retrieving the data");
        });
    }
    return () => {
      effectRan.current = true;
    };
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;//last user of page
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;//first user of page
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);//slice users array
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container mt-5 customContainer">
      <h2>Pagination </h2>
      <Records data={currentRecords}></Records>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
