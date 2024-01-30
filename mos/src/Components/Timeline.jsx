import {React,useState} from 'react'
import Time from '../Util/timeline'

const Timeline = () => {
  const [time, setTime] = useState(Time)
  return (
    <div id="timeline" className="Container-Timeline">
            <h2>Supermans Timeline</h2>  
            <hr />          
            <div className="time-card">
                    {time.map((line)=>{
                        const {id, img,title,text} = line;
                        return (
                            <div key={id}>
                                <img src={img} alt="" />
                                <h3>{title}</h3>
                                {/* <hr /> */}
                                <p>{text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
  )
}

export default Timeline