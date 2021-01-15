import React from 'react';

class Reviews extends React.Component {
    render () {
        return (
            <section className="reviews">
                <h2 className="reviews__title">Отзывы о нашем кафе</h2>
                <ul className="reviews__list reviews__carousel owl-carousel">
                    <li className="reviews__item">
                        <div className="reviews__wrapper">
                            <img src='/img/avatar.png' alt=""></img>
                            <div className="reviews__content">
                                <p className="reviews__name">Георгий Крестов</p>
                                <p className="reviews__text">
                «Все было очень здорово! Отличный персонал, прекрачный интерьер. Недалеко от города,
                добираться легко!»
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="reviews__item">
                        <div className="reviews__wrapper">
                            <img src='/img/avatar.png' alt=""></img>
                            <div className="reviews__content">
                                <p className="reviews__name">Георгий Крестов</p>
                                <p className="reviews__text">
                «Все было очень здорово! Отличный персонал, прекрачный интерьер. Недалеко от города,
                добираться легко!»
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="reviews__item">
                        <div className="reviews__wrapper">
                            <img src='/img/avatar.png' alt=""></img>
                            <div className="reviews__content">
                                <p className="reviews__name">Георгий Крестов</p>
                                <p className="reviews__text">
                «Все было очень здорово! Отличный персонал, прекрачный интерьер. Недалеко от города,
                добираться легко!»
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <a className="reviews__btn btn" href="">Оставить свой отзыв</a>
            </section>
        );
    }
}

export default Reviews;