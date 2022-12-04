import users from '../Data/Reviews';
import './Review.css';

function user() {
    const ratingArray = Array.from(new Array(5));

    return (

        <div>
            {users.map((user) => (
                <div className="review-section" key={user.id}>
                    <div className="review-block">
                        < img src={user.photo} className="review-block__photo" alt="фотография автора" />
                        <div className="review-content">
                            <h4 className="review-content__name">{user.name}</h4>
                            <div className="review-content__rating">
                                {ratingArray.map((_, index) => (index + 1 <= user.rating) ?
                                    (<img key={index} src="./img/star-g.svg" className="star" alt="звезда" />) :
                                    (<img key={index} src="./img/star-b.svg" className="star" alt="звезда" />)
                                )}
                            </div>
                            <div className="review-options">
                                <div className="review-options__point"><b>Опыт использования:</b>{user.usageExperience}</div>

                                <div className="review-options__point">
                                    <div>
                                        <b>Достоинства:</b>
                                    </div>
                                    {user.advantage}
                                </div>

                                <div className="review-options__point">
                                    <div>
                                        <b>Недостатки:</b>
                                    </div>
                                    {user.limitations}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator">
                        <div className={user.separator}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default user;