import React from 'react';

class ModalGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalImg: props.modalImg,
    }
    this.closeModal = this.closeModal.bind(this);
    this.fullScrean = this.fullScrean.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }
  componentDidMount () {
    const closeBtn = document.querySelector('.modal__Gallery__window');

    closeBtn.addEventListener('click', this.closeModal);
}

componentWillUnmount () {
    const closeBtn = document.querySelector('.modal__Gallery__window');
  
    closeBtn.removeEventListener('click', this.closeModal);
}

closeModal (e) {
        
  if (e.target.classList.contains('fullscreen__arrow__left')) {
      this.moveLeft();
      return;
  };

  if (e.target.classList.contains('fullscreen__arrow__right')) {
      console.log('button')
      this.moveRight();
      return;
  };

  if (e.target.classList.contains('full__screan_btn') || e.target.classList.contains('full__screan__img')) {
      console.log('exit')
      this.fullScrean();
      return;
  }

  if(document.fullscreenElement) {
      const body = document.querySelector('.fullscreen__body');
      const closeBtn = document.querySelector('.close');

      body.classList.remove('full');
      closeBtn.classList.remove('--close__gallery');

      document.exitFullscreen();
      return;
  }

  const body = document.querySelector('body');
  body.classList.remove('overflow__non__list');
  const modalWindow = document.querySelector('.modal__Gallery__window');
  modalWindow.classList.add('--close__gallery');
}

fullScrean () {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      const body = document.querySelector('.fullscreen__body');
      const closeBtn = document.querySelector('.close');
      closeBtn.classList.add('--close__gallery');
      body.classList.add('full');
  } else {
      const body = document.querySelector('.fullscreen__body');
      const closeBtn = document.querySelector('.close');

      body.classList.remove('full');
      closeBtn.classList.remove('--close__gallery');
      document.exitFullscreen();
  }
}

moveRight() {
  const modalWindow = document.querySelector('.modal__Gallery__window');
  const fullScreenSection = document.querySelector('.full__screen');
  const modalIndex = fullScreenSection.getAttribute('modalIndex');
  const modalImg = modalWindow.getElementsByTagName('img');

  const modalImgArr = this.state.modalImg[Number(modalIndex)];
  let index = Number(modalImg[0].getAttribute('index')) + 1;

  if (index > modalImgArr.length - 1) index = 0;
  modalWindow.innerHTML =
  ` 
  <section modalIndex=${modalIndex} class="full__screen">
    
  <div class="fullscreen__body ${document.fullscreenElement ? 'full' : null}">
                  <button class="fullscreen__arrow fullscreen__arrow__left"></button>
                  <div class="fullscreen__container">
                    <a class="close ${document.fullscreenElement ? '--close__gallery' : null}"></a>
                    <img class="fullscreen__img" index=${index} src=${modalImgArr[index]}></img>
                      <div class="full__screan_btn">
                        <img class="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                      </div>
                  </div>
                  <button class="fullscreen__arrow fullscreen__arrow__right"></button>
            </div>
  </section>`;
}

moveLeft() {
  const modalWindow = document.querySelector('.modal__Gallery__window');
  const modalImg = modalWindow.getElementsByTagName('img');
  const fullScreenSection = document.querySelector('.full__screen');
  const modalIndex = fullScreenSection.getAttribute('modalIndex');
  const modalImgArr = this.state.modalImg[Number(modalIndex)];

  let index = Number(modalImg[0].getAttribute('index')) - 1;
  
  if (index < 0) index = modalImgArr.length - 1;

  modalWindow.innerHTML =
  ` 
  <section modalIndex=${modalIndex} class="full__screen">
           <div class="fullscreen__body ${document.fullscreenElement ? 'full' : null}">
                  <button class="fullscreen__arrow fullscreen__arrow__left"></button>
                  <div class="fullscreen__container">
                    <a class="close ${document.fullscreenElement ? '--close__gallery' : null}"></a>
                    <img class="fullscreen__img" index=${index} src=${modalImgArr[index]}></img>
                      <div class="full__screan_btn">
                        <img class="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                      </div>
                  </div>
                  <button class="fullscreen__arrow fullscreen__arrow__right"></button>
            </div>
    </section>`;
}

  render () {
    return (
      <div className="modal__Gallery__window --close__gallery">
      <section className="full__screen">
          <div className="fullscreen__body">
              <button className="fullscreen__arrow fullscreen__arrow__left"></button>
              <div className="fullscreen__container">
                  <a className="close"></a>
                  <img className="fullscreen__img" index='2' src=''></img>
                  <div className="full__screan_btn">
                      <img className="full__screan__img" src='../../../../img/full-screan.png' alt='full-screan'></img>
                  </div>
              </div>
              <button className="fullscreen__arrow fullscreen__arrow__right"></button>
          </div>
      </section>
  </div>
    );
  }
}

export default ModalGallery;