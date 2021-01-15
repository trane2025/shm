import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import HeaderCenter from '../../components/HeaderCenter';
import MenuOutSide from '../../components/MenuOutSide/MenuOutSide';
import Footer from '../../components/Footer';
import { rootAPI } from '../../API/rootApi';

const paramMenu = ({ res, query, title }) => {

    const [prelouder, setPrelouder] = useState(false);

    useEffect(() => {
        setPrelouder(true);
        setTimeout(() => {
            setPrelouder(false);
        }, 500)
    }, [query])


    return (
        <>
            <Head>
                <title>Доставка шашлыка в Астрахани. Свежий, сочный, очень вкусный</title>
                <meta name="description" content="Закажите шашлык в Астрахани, с доставкой или самовывоз. Всегда свежий, сочный и очень вкусный." />
            </Head>
            <HeaderCenter />
            <MenuOutSide
                category={res.catGoods}
                products={res.goods}
                title={title}
                activeLink={query}
                prelouder={prelouder}
                query={query} />
            <Footer></Footer>
        </>
    );
}

export default paramMenu;

export async function getServerSideProps({ query }) {

    const res = await rootAPI.getProduct(query.param).then(response => {
        return response
    })



    const LinkArr = res.catGoods.find(item => item.url === query.param);


    return {
        props: {
            res,
            query: query.param,
            title: LinkArr.title
        }
    }
}
