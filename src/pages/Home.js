import React,{useState} from "react";


const Home = () => {
  const[searchTerm,setSearchTerm] = useState("");

  return (
    <div className="home">
      <div className="home-search">
        <input type="text" placeholder="type a meal name..." 
        value={searchTerm} 
        onChange={(e)=> setSearchTerm(e.target.value)}/>
        <button>search</button>
      </div>
      <div className="home-meals">

      </div>
    </div>
  );
}

export default Home;