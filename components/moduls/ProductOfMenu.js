import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';

class ProductOfMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            products: props.products, // this array with object
        };

        this.unpack = this.unpack.bind(this);
    }

    unpack (productArray) {
        return productArray.map((product, index) => {
            return <Order key={index} {...{
                link: product.imgLink,
                name: product.name,
                description: product.description,
                dose: product.dose,
                calculation: product.calculation,
                price: product.price,
                index: index,
            }} />;
        });
    }

    render () {
        const {header, products} = this.state;
        const {unpack} = this;

        return (
            <div className="additional__menu__grid">
                <h1 className="additional__menu__grid__header">{header}</h1>
                <div className="additional__menu__grid__items">
                    {unpack(products)}
                </div>
            </div>
        );
    }
}

ProductOfMenu.propTypes = {
    header: PropTypes.string,
    products: PropTypes.array,
};

export default ProductOfMenu;

