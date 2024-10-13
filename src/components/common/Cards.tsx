import '../../styles/Cards.css';
import ArrowIcon from '../../assets/arrow.svg';

const Cards = ({ cards }) => {
    return (
        <div className="cards-container">
            {cards?.map(card => (
                <div className="card-container">
                    <p className='card-title'>{card.title}</p>
                    <p className='card-desc'>{card.description}</p>
                    {card.scrollArrow && <img src={ArrowIcon} width={'24px'} height={'24px'} className='arrow-pointer' onClick={() => {
                        const scrollElement = document.getElementById(card.scrollTo);
                        scrollElement?.scrollIntoView({
                            behavior: 'smooth',
                        })
                    }} />}
                </div>
            ))}
        </div>
    )
}

export default Cards