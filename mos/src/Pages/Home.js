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
       <img className="JL" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/446a20cc-3d9c-4cdf-8845-cee8c49b5076/del2f1k-60821294-dfa9-46c7-af44-2d0530460efb.jpg/v1/fill/w_1280,h_720,q_75,strp/justice_league_2021_desktop_wallpaper_hd_by_joshua121penalba_del2f1k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNDQ2YTIwY2MtM2Q5Yy00Y2RmLTg4NDUtY2VlOGM0OWI1MDc2XC9kZWwyZjFrLTYwODIxMjk0LWRmYTktNDZjNy1hZjQ0LTJkMDUzMDQ2MGVmYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rf2jXOYmXgUoAdxHXZe_qj46g8nt_NqblPxCm6XMuuo' alt='The Justice League'/>
       <Justice/>
       <img className='David' src='https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/579d688b-4874-4710-806c-5b02033e7776/superman-legacy-star-david-corenswet-wants-a-bright-and-optimistic-superman-after-henry-cavills-dark-and-gritty-version.jpg' alt='David Cornsweet Superman'/>
       <David/>
       <Footer/>
    </div>
  )
}

export default Home