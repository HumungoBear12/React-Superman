import React from 'react'
import Navbar from '../Components/navbar'
import Top from '../Components/topArticle'
import Mid from '../Components/Mid'
import Footer from '../Components/Footer'
import Time from '../Components/Timeline'
import Justice from '../Components/Justice'
import David from '../Components/David'

const Home = () => {
  return (
    <div className="container-home">
      <Navbar/>
      <div className="container-header">
      </div>
       
       <br/>
       <Top/>
       <Mid/>
       <Time/>
       <img className="JL" src='https://wallpapers.com/images/hd/dc-comics-justice-league-s0od9oj5lzg294yt.jpg' alt='The Justice League'/>
       <Justice/>
       <img className='David' src='https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/579d688b-4874-4710-806c-5b02033e7776/superman-legacy-star-david-corenswet-wants-a-bright-and-optimistic-superman-after-henry-cavills-dark-and-gritty-version.jpg' alt='David Cornsweet Superman'/>
       <David/>
       <Footer/>
    </div>
  )
}

export default Home