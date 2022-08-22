import './featured.css'
const Featured =()=>{
    return (
        <div className='featured'>
            <div className="featuredItem">
              <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/368703637.webp?k=a385edc5cafda8beb7ab64cc78921720e59b41de417ff73efb946d3b918b13b0&o=&s=1" />
              <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>123 Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/207751165.webp?k=4d52b9e658d9cba792be3d17493ca714c3d421f6e83bdc5b86f2d9c36095959b&o=&s=1"  />
             <div className="featuredTitles">
             <h1>Austin</h1>
              <h2>523 Properties</h2>
             </div>
            </div>
            <div className="featuredItem">
              <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/44754339.webp?k=3dd0784cd235cc75b6ed0bae017d7bdd8696e1a698077ee4c054bdcf0ccd4cdd&o=&s=1" />
             <div className="featuredTitles">
             <h1>Reno</h1>
              <h2>533 Properties</h2>
             </div>
            </div>
        </div>
    )
}
export default Featured