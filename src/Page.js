import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { useStore } from 'react-redux'
// import api from "../utils/api";

function MyPages() {
    const [MyPagesList, setMyPagesList] = useState();
    const store = useStore()
      const getMyPages = async () => {
        try {
        //   const response = await api.get("/pages");

          setMyPagesList(store.getState().pages);
        } catch (error) {
            console.log(error)
        }
      };

      useEffect(() => {
        getMyPages();
      });

    return (
        <div className="all-mypages">
            <Link to="/mypages/preview/1" target="_blank" rel="noopener noreferrer" />
            <div className="all-mypages__cards">
                {MyPagesList && MyPagesList.map(function (data, id) {
                    return (
                        <div key={id}>
                        <Link to={`/mypages/preview/${data.id}`}  target="_blank" rel="noopener noreferrer" >User Page: {data.id}</Link>
                        <br/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MyPages