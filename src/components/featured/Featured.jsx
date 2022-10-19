import useFetch from '../../hooks/useFetch'
import './featured.css'
const Featured =()=>{
  const {data,loading,error} =useFetch("/hotels/countByCity?cities=Kigali,Madrid,London")
  console.log(data)
    return (
        <div className='featured'>
            {loading?("Loading please wait"):(
              <>
              <div className="featuredItem">
              <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/291054565.webp?k=e40283077d9421399b599ecf35b7bf0d4698ad851c8d238db7759ba0feb224af&o=&s=1" alt='' />
              <div className="featuredTitles">
              <h1>Kigali</h1>
              <h2>{data[0]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/321192147.webp?k=ca7d75fa872672f75dc0591cbcdaf62480a72a11d72df402744aad309b2d21fe&o=&s=1" alt='' />
             <div className="featuredTitles">
             <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
             </div>
            </div>
            <div className="featuredItem">
              <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/339442125.webp?k=ed2359e9411ceac47475235c14b2628e854c9ae6c61f757c793eebdd1e5fb4a4&o=&s=1" alt='' />
             <div className="featuredTitles">
             <h1>London</h1>
              <h2>{data[1]} Properties</h2>
             </div>
            </div>
              </>
            )}
        </div>
    )
}
export default Featured