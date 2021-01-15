import React from 'react';

class AboutCafe extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.activationLink(navItemsArr);
    }

    componentWillUnmount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        this.disableLink(navItemsArr);
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#about') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#about') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    render () {
        return (
            <section className="about__cafe--section" id="about">
                <div className="about__cafe--text">
                    <h1 className="about__cafe--header">О кафе</h1>
                    <p>Сеть кафе «Шашлычный Мир» основано в 2012 году.<br></br>
                        Мы расположены на ул. Татищева 43А , Куликова 50В  <br></br>
                        города Астрахани и с. Осыпной бугор, ул. Астраханская 51И</p>
                    <p>В нашем меню блюда кавказской и европейской кухни. У нас <br></br>
                        банкетный зал на 60 чел. 4 VIP комнаты с караоке системой , <br></br>
                        дискотека каждый день с 19:00 , 150 посадочных мест . Где Вы <br></br>
                        можете отметить любое значимое событие: день рождения, <br></br>
                        юбилей, корпоративы, поминальные обеды</p>
                    <p>А так же ежедневно с 11:00 до 24:00 осуществляем <br></br> 
                        доставку/вынос шашлыка и люля-кебаб из свинины, баранины, <br></br> 
                        курицы, говядины и любого другого блюда указанное в нашем <br></br>
                        меню. Доставка блюд по городу Астрахани и области.</p>
                </div>
                <div className="about__cafe__img__section">
                    <img className="about__cafe--img" src="/img/about-cafe.jpg"></img>
                </div>
            </section>
        );
    }
}

export default AboutCafe;