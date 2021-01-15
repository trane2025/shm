import React from 'react';

class Contacts extends React.Component {
    componentDidMount() {
        const map = L.map('map', {
            center: [46.367920, 48.066326],
            zoom: 12,
            scrollWheelZoom: false
        });
        
        const myIcon = L.icon({
            iconUrl: '/img/icon.png',
            iconSize: [60, 60],
        });
        
        L.marker([46.369340, 48.050900], {icon: myIcon}).addTo(map).bindTooltip('Татищева 43а');
        L.marker([46.299018, 48.050145], {icon: myIcon}).addTo(map).bindTooltip('Астраханская 51и/1');
        L.marker([46.355315, 48.077743], {icon: myIcon}).addTo(map).bindTooltip('Куликова 50в');
        
  
        L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
            attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 0,
            maxZoom: 22,
            subdomains: 'abcd',
            accessToken: 'c61oqWrV1RRTACkEr2NzXh4veCu7O4f9Ue2fru1eAikIn0EDpOi2CECI8dERQMBQ'
        }).addTo(map);
    }
    
    
    render() {
        return (
            <section className="contacts">
                <div className="contacts__info">
                    <div className="contacts__wrapper">
                        <h2 className="contacts__title">Мы ждем вас в&nbsp;гости!</h2>
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <p className="contacts__address">Куликова, 50в</p>
                                <a className="contacts__phone phone__img" href="tel:89275555828">77-30-77</a> <br></br>
                               
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">Татищева, 43а</p>
                                <a className="contacts__phone phone__img" href="tel:89275699696">99-96-96</a> <br></br>
                              
                            </li>
                            <li className="contacts__item">
                                <p className="contacts__address">с. Осыпной Бугор Астраханская 51и/1</p>
                                <a className="contacts__phone phone__img" href="tel:89512758758">758-758</a>
                            </li>
                        </ul>
                        <div className="contacts__social">
                            <a className="contacts__link" href="https://www.instagram.com/cafeshm/">
                                <img src='/img/inst-red.png' alt="Наша группа"></img>
              Наш instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="map" id="map"></div>
            </section>
        );
    }
}

export default Contacts;