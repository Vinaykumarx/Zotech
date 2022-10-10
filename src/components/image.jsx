export const Image = ({ title, largeImage, smallImage, namee, billno }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
           <h5 style={{fontSize:'13px'}}>{namee}</h5>
            <h6>
              {billno}
            </h6>
    </div>
  )
}