import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square200/384050431.webp?k=c16a143c955af442e9a88cfe699627f2725dbf2e38bfbc809149384ca079161b&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square200/289702574.webp?k=9335f0dad45af7e8a71b6d453076cec89679bc9cc348c4fbd10afa75614704b4&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square200/383595193.webp?k=a877f1d8428e206964d449ba38944eff2a3b371c435dc93c85df71a8f8c36992&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square200/265509733.webp?k=d2d2d237c76c32772707123a0a5e32c30953d34b64f57f02f02bf8881ecd9aef&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square200/384050431.webp?k=c16a143c955af442e9a88cfe699627f2725dbf2e38bfbc809149384ca079161b&o=&s=1"
  ]
  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data && images.map((img,i)=>(
            <div className="pListItem" key={i}>
            <img
              src={img}
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[i]?.type}</h1>
              <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
          </div>
          ))}
        </>
      )}
    </div>

  
  );
};
export default PropertyList;
