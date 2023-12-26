import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DarkMode from './Dark';

import "../Assets/CSS/Header.css"

const Header = ({content,setContent,theme,setTheme}) => {
    const handleDropdownChange = (option) => {
        setContent(option);
        console.log(theme);
        
      };

  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h1 class="navbar-brand" >Table Displayer</h1>
                <div className='Content'>
                    <h2>
                        {content.charAt(0).toUpperCase()+content.slice(1)}
                    </h2>
                    </div>
                    <div className='Option'>
                    <Dropdown onSelect={handleDropdownChange}>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            {content.charAt(0).toUpperCase()+content.slice(1)}
                        </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="albums">Albums</Dropdown.Item>
                        <Dropdown.Item eventKey="comments">Comments</Dropdown.Item>
                        <Dropdown.Item eventKey="posts">Post</Dropdown.Item>
                        <Dropdown.Item eventKey="Todos">Todos</Dropdown.Item>
                        <Dropdown.Item eventKey="users">Users</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='Theme'>
                    <DarkMode theme={theme} setTheme={setTheme}/>
                </div>
                
            </div>
        </nav>
    </>
  )
}

export default Header