import React, { useState } from "react";
import './list.css'
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import {useLocation} from 'react-router-dom'
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";

// Individual Hotel
const List = () => {
  const location =useLocation()
  // console.log(location)
  const [destination, setDestination]= useState(location.state.destination)
  const [date, setDate]= useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar />
      <Header type="List"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            </div>
            {openDate&& (
              <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
            />
            )}
          <div className="lsItem">
            <label>Options</label>
          <div className="lsOptions">
          <div className="lsOptionItem">
              <span className="lsOptionText">
                Min Price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput"/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Max Price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput"/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Adult
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
               Children
              </span>
              <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
               Room
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
            </div>
          </div> 
          </div>
          <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            {/* Stopped at 1:30 */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
