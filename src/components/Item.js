import React from 'react';


function Item(props){
    const {item} = props;
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <div>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={()=> isChecked?setIsChecked(false):setIsChecked(true)}
            />
            <label>{item}</label>
        </div>
    );
}

export default Item;