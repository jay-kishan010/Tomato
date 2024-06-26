import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import "./Home.css"

const Home = () => {
    const [category, setCategory]=useState("ALL");
  return (
   <div className="home">
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
   </div>
  )
}

export default Home