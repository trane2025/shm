import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import HeaderCenter from '../components/HeaderCenter';
import MenuOutSide from '../components/MenuOutSide/MenuOutSide';
import Footer from '../components/Footer';
import { rootAPI } from '../API/rootApi';

const MenuOutSidePage = ({ res }) => {

  const title = 'Доставка шашлыка по Астрахани';

  const [prelouder, setPrelouder] = useState(false);

  useEffect(() => {
    setPrelouder(true);
    setTimeout(() => {
      setPrelouder(false);
    }, 500)
  }, [])

  useEffect(() => {
    const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
    navItemsArr.forEach((navItem) => {
      if (navItem.getAttribute('data-link') === '#menu-out-side') {
        navItem.classList.add('navigation__link--active');
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Доставка шашлыка в Астрахани. Свежий, сочный, очень вкусный</title>
        <meta name="description" content="Закажите шашлык в Астрахани, с доставкой или самовывоз. Всегда свежий, сочный и очень вкусный." />
      </Head >
      <HeaderCenter />
      <MenuOutSide
        category={res.catGoods}
        products={res.goods}
        title={title}
        prelouder={prelouder} />
      <Footer />
    </>
  );
}

export default MenuOutSidePage;

export async function getServerSideProps(ctx) {

  const res = await rootAPI.getProduct();

  return {
    props: {
      res
    }
  }
}