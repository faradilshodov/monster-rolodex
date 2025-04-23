import Card from "../card/card.component";
import './card-list.styles.css';

function CardList({ monsters }) {
    return (
        <div className="card-list-container">
            {
                monsters.map(({ name, email, id }, index) => {
                    return (
                        <Card key={`${name}-${index}`} name={name} email={email} id={id}></Card>
                    );
                })
            }
        </div>
    );
}

export default CardList;