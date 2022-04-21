import React from 'react'

function Header(props) {
  return (
    <header className="p-5 text-white text-center font-serif font-semibold text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {props.title}
    </header>  
  );
}

export default Header;