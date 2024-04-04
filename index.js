const element = (
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='view-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='image'
      />
      <h1 className='name'>Kiran V</h1>
      <p className='description'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
