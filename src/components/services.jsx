import React, { useState } from "react";

export const Services = (props) => {

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} style={{color:'lightblue'}}  className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                {' '}
                {d.icon ? <i className={d.icon}></i> :
                  <img
                    src={d.png}
                    // id='service-img-size'
                    // style={{height:"20px",width:"20px"}}
                    alt={"123121"}
                  />}
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  <ReadMore>
                  {d.text}
                  </ReadMore>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
