import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../Note/Sidebar.css';

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  const handleAddClick = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className='sidebar'>
      <div onClick={handleAddClick}>
        <AddCircleIcon style={{ fontSize: "60px", cursor:"pointer"}} />
      </div>
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className='sidebar-list-item'
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)} // Use correct function name
          ></li>
        ))}
      </ul>
      <div>
      </div>
    </div>
  );
        }

export default Sidebar;
