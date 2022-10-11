export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Our Values</h2>
        </div>
        <div className='row'>
          <div class="col align-self-center">
            {/* One of three columns */}
            {/* <div className='col-xs-0 col-md-1'>
              {' '} 
            </div> */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
            {/* <div className='col-xs-0 col-md-1'>
                  {' '}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
