import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {  // me enne CardList robots={robots} ge robots
    const cardArray = robots.map((robo,i) =>{
        return (<Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
             />);
        // if we open the console we can see an ERROR like 
                    //index.js:1 Warning: Each child in a list should have a unique "key" prop.
        // why this error happens   -  in react the way the virtual DOM is work  keep tracking what theese cards are
        //without having something called key prop, if some of thiese cards get deleted react wont know which one's which
        // we will have to change entire dom
        // if there is key prop that says oh this one get removed like that
        // key should have some thing that dosent change for examole index(or i in our case)
    })
    return (
        <div>
           {cardArray}
        </div>
    );
}

export default CardList;