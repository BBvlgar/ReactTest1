import React from 'react'



function Header(props) {

    return (
        <div className="App">
      <h1>{props['title']}</h1>
        {props.children.map( men => {

          return <><h1> Numberss {men}</h1>
                  <p>{men}</p> </>})}
        <p>
          {props.text}
        </p>
    </div>
    )
}


export default Header;