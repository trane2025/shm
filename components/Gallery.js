import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            link: props.link,
            buttonName: props.button,
            picturesLinks: props.img,
            modalImg: props.modalImg,
            modalIndex: props.modalIndex,
        };
        this.modalGelleryImg = this.modalGelleryImg.bind(this);
    }


    modalGelleryImg (e) {
        console.log('modalOPen')
        const body = document.querySelector('body');
        body.classList.add('overflow__non__list');
        const modalWindow = document.querySelector('.modal__Gallery__window');
        const index = e.target.getAttribute('index');
        modalWindow.innerHTML =
      ` 
      <section modalIndex=${this.state.modalIndex} class="full__screen">
                <div class="fullscreen__body ${document.fullscreenElement ? 'full' : null}">
                      <button class="fullscreen__arrow fullscreen__arrow__left"></button>
                      <div class="fullscreen__container">
                        <a class="close ${document.fullscreenElement ? '--close__gallery' : null}"></a>
                        <img class="fullscreen__img" index=${index} src=${this.state.modalImg[index]}></img>
                          <div class="full__screan_btn">
                            <img class="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                          </div>
                      </div>
                      <button class="fullscreen__arrow fullscreen__arrow__right"></button>
                </div>
        </section>`;
        modalWindow.classList.remove('--close__gallery');
    }


    render () {
        const {buttonName, picturesLinks} = this.state;
        return (
            <section className="gallery" id="gallery">
                <h2 className="gallery__title">{this.state.header}</h2>
                <ul className="gallery__list">
                    {picturesLinks.map((link, index) => {
                        return (
                            <li key={index} className="gallery__item">
                                <img className="gallery__modal__img" onClick={this.modalGelleryImg} index={index} src={link} alt=""></img>
                            </li>
                        );
                    })}
                </ul>
                {buttonName === 'null' ? null : <Link  href="/main-gallery"><a to={this.state.link} className="gallery__btn btn">{this.state.buttonName}</a></Link> }
                
            </section>
        );
    }
}

Gallery.propTypes = {
    header: PropTypes.string,
    link: PropTypes.string,
    button: PropTypes.string,
    img: PropTypes.array,
    modalImg: PropTypes.array,
};

export default Gallery;