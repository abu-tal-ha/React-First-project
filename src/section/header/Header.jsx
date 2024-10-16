/* eslint-disable react/prop-types */
import Button from "../../components/Button"
import Search from "./Search"


function Header({onAscending, onDescending, onSearch}) {

  // let SearchHandler = (text) => {
  //   onSearch(text);
    
  // }

  return (
    <div className="flex justify-between items-center">
          <div className="flex">
            <Button onClick={() => onAscending()} className="btn btn-outline btn-secondary mr-3">Ascending</Button>
            <Button onClick={() => onDescending()} className="btn btn-active btn-secondary hover:bg-red-500 mr-3">Descending</Button>
          </div>

            <Search onSearch={(text) => onSearch(text)} />
          
        </div>
  )
}

export default Header