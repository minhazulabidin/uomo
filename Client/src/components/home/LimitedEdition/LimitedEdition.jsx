"use client"

import Container from '@/components/layouts/Container'
import React, { useEffect, useState } from 'react'
import Product from '../Products/Product'
import api from '@/utils/api'
import ProductSkeleton from '../Products/ProductSkelton'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Title from '@/components/layouts/CommonLayout/Title'

const LimitedEdition = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        gap:20
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/products?limit=10");
                setProducts(res.data.products);
            } catch (err) {
                alert(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block",}}
                onClick={onClick}
            >
                <ChevronRight size={40} className='text-2xl text-primary' />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} `}
                style={{ ...style, display: "block",  }}
                onClick={onClick}
            >
                <ChevronLeft size={40} className='text-2xl text-primary'/>
            </div>
        );
    }

    return (
        <section className='mt-25 limite'>
            <Container>
                <Title title='LIMITED' titleB='EDITION'/>
               
                <Slider {...settings}>
                    {
                        loading ? <ProductSkeleton /> : products.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </Slider>
            </Container>
        </section>
    )
}

export default LimitedEdition