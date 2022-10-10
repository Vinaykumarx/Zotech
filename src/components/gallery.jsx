import { useState } from "react";
import { Image } from "./image";
import RespSlider from "./slider";

export const Gallery = (props) => {
  const [date, setDate] = useState(0)
  const dateIndexSetter =(x)=>{
    setDate(x)
  }
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 style={{ color: '#fcd800' }}>Gallery</h2>
          <p>Click on a date to view the winners</p>
          <RespSlider setDate={dateIndexSetter}/>
        </div>
        <div className="galaryBg"></div>
        <div className='row'>
          <div className='portfolio-items'>
            {console.log(props.data && props.data.length, "sfsfdgsdgsdg")}
            {props.data && (
              props.data.length > 0 ?
                props.data[date].map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-xs-6 col-sm-6 col-md-3 col-lg-2'>
                    <Image title={d.name} namee={d.name} billno={d.billno} smallImage="img/portfolio/GuessWinners.png" />
                  </div>
                ))
                : <h1>Winners will be announced soon</h1>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
