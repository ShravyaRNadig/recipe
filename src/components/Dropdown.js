import React,{useState} from 'react';
import "./styleSheets/Dropdown.css";

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
  return (
        <>
          {/* <ul className={dropdown ? 'cuisine-submenu clicked' : 'cuisine-submenu'} onClick={()=>setDropdown(!dropdown)}>
          {cuisineDropdown.map(item=>{
            return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={item.cName}
                    onClick={() => setDropdown(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul> */}
        </>
      );
    }

export default Dropdown;
