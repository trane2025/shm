import React from 'react';
import Gallery from './Gallery';

import {tatisheva, tatishevaModal} from '../links-to-img/galleryObjectsIMG';

class MainGallery extends React.Component {
    componentDidMount() {
        window.scrollTo(pageXOffset, 0);
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
    
        this.activationLink(navItemsArr);
    }

    componentWillUnmount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#gallery') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#gallery') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }
    render () {
        return (
            <section>
                <Gallery {...{
                    header: 'Галерея кафе на улице Татищева 43а',
                    link:'/galleryTatisheva',
                    button: 'null',
                    img: tatisheva,
                    modalImg: tatishevaModal,
                    modalIndex: 0,
                }} />
                <Gallery {...{
                    header: 'Галерея кафе на улице Астраханская 51и/1',
                    link:'/galleryAstrakhanskay',
                    button: 'null',
                    img: tatisheva,
                    modalImg: tatishevaModal,
                    modalIndex: 1,
                }} />
                <Gallery {...{
                    header: 'Галерея кафе на улице Куликова 50в',
                    link:'/gallerykulikova',
                    button: 'null',
                    img: tatisheva,
                    modalImg: tatishevaModal,
                    modalIndex: 2,
                }} />
            </section>
        );
    }
}

export default MainGallery;