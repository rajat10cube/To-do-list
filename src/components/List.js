import React from 'react';

function List(){
    const itemList = ["collect DSA books","buy whiteboard","start studying"];
    return (
        itemList.map((item)=>(
            <p>{item}</p>
        ))
    );
}

export default List;