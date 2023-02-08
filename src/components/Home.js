import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import myImg from './images/IMG_20190928_212548_709.jpg'

const Home = (props) => {

  let category = props.category;
  category = category.charAt(0).toUpperCase() + category.slice(1);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [result, setResult] = useState();

  

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=In&category=${props.category}&pageSize=9&apiKey=3d4468f3a7774e9e9c16c45f75c6b944&page=${page}`
        )
        .then((result) => {
          console.log(result.data.articles);
  
          setResult( result.data.totalResults);
          setData(result.data?.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [page,props.category]);

  const nextPage = () => {
    const totalPage = result/10;
    if(page+1>totalPage){

    }else{
      setPage(page + 1)
    }
    // fetchData();
  };


  const previousPage = () => {
    const totalPage = result/6;
    if(data.length ===0){
      alert('not available')
    }else{
      setPage(page - 1)
    }
    // fetchData();
  };


  return (
    <div className="container">
      <h1 className="mt-5" >Latest {category} News</h1>
      <div className="row">
        {data?.map((res) => {
          return (
            <div key={res.url} className="col-md-4 mt-5">
              <div className="card">
                <img
                  src={res.urlToImage === null ? myImg : res.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{res.title.slice(0, 50)}...</h5>
                  <p className="card-text">
                    {res.description === null
                      ? "description is not available"
                      : res.description.slice(0, 80)}{" "}
                    ...
                  </p>
                  <a style={{backgroundColor:"#66312f", border:'none'}} href={res.url} className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 mb-3 d-flex justify-content-between">
        <button style={{backgroundColor:"#66312f", border:'none'}} disabled={page<=1} onClick={previousPage} type="button" className="btn btn-secondary">
          Previous
        </button>
        <button style={{backgroundColor:"#66312f", border:'none'}} onClick={nextPage} type="button" className="btn btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
