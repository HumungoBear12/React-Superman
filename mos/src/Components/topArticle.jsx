import React from 'react'

const topArticle = () => {
  return (
    <div className="container-article">
        <h2>Who is Superman?</h2>
        <hr/>
        <div className="article-flex">
            <div className="article-vert">
                <div></div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rL7Bm6KrJ4Q?si=QNM22ctEiA727zrb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <img src="https://media0.giphy.com/media/12PKZzezmy2vqE/giphy.gif?cid=ecf05e47egpd6pcl7nyg1q4kwflntjsk88163enoflljodrh&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" />
        </div>
    </div>
  )
}

export default topArticle