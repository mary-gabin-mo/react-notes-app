import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=> handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Toggle Mode</button>
            {/* using the className "save" only to use the same styling as the Save button - can be changed later */}
        </div>
    );
};

export default Header;