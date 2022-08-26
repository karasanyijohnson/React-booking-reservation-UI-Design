import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/339442125.webp?k=ed2359e9411ceac47475235c14b2628e854c9ae6c61f757c793eebdd1e5fb4a4&o=&s=1"
        alt=""
        className="sImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxOp">Free airport Tax</span>
        <span className="siSubtitle">Studio Apartment with Air Condtioning</span>
        <span className="siFeatures"> Entire studio . 1 bathroom .21m&sup2; 1full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <spam className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</spam>
      </div>
      <div className="siDetails">Details</div>
    </div>
  );
};
export default SearchItem;
