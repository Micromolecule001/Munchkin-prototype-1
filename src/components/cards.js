import React from "react";

class Cards extends React.Component {
    cards = [
        {
            id: 1,
            type: "Treasure",
            name: "Sword of virginity",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam libero ultricies nisl,",
            bonus: 3,
            gold: 400,
            isBig: false,
            slot: "One hand",
            race: "None",
            class: "None",
            sex: "Woman",
        },
        {
            id: 2,
            type: "Treasure",
            name: "Really big sword",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam libero ultricies nisl,",
            bonus: 4,
            gold: 600,
            isBig: true,
            slot: "Two hands",
            race: "None",
            class: "None",
            sex: "Man",
        }
    ];

    render() {
        return (
            <div>
                {/* Render each card from the array */}
                {this.cards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="card__wrapper">
                            {/* Display the top data part of the card */}
                            <div className="card__container">
                                {/* Display the bonus */}
                                <p className="card__bonus">Bonus {card.bonus}</p>

                                {/* Display the restrictions */}
                                {["class", "race", "sex"].map((restriction) => {
                                    if (card[restriction] !== "None") {
                                        return <p className="card__restriction"> Only for {card[restriction]} </p>;
                                    }
                                    return null;
                                })}

                                <h2 className="card__name">{card.name}</h2>
                            </div>



                            {/* Display the type 
                            {card.type === "Treasure" ? (
                                <p className="card__type">Treasure</p>
                            ) : (
                                <p className="card__type">Monster</p>
                            )}


                            Cards[id:int,]
                            */}

                            

                            {/* Display the name, description, and gold */}
                            <p className="card__description">{card.description}</p>
                            
                            <div className="card__image"> 
                                <img src="https://via.placeholder.com/300x200" alt="card" />
                            </div>

                            {/* Display the isBig and slot */}
                            <div className="flex__container__horizontal"> 
                                <div className="flex__container__vertical">
                                    <p className="card__isBig">{card.isBig ? <span>Big item</span> : <span></span>}</p>
                                    <p className="card__slot">{card.slot}</p>
                                </div>

                                <div className="">
                                    <p className="card__gold">{card.gold} gold</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
};

export default Cards;