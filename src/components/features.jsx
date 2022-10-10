export const Features = (props) => {
  return (
    <div id='features'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2  className='text-center'>Rules and Regulations</h2>
        </div>
        <div className='row'>
            <ol>
              {props.data
                ? props.data.map((d, i) => (
                  <li key={`${d.title}-${i}`} className='col-md-12'>
                      <h3>{i+1}.{" "}{d.title}</h3>
                  </li>
                  ))
                : 'Loading...'}
            </ol>
        </div>
      </div>
    </div>
  )
}
