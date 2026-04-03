import Title from '@/components/layouts/CommonLayout/Title'
import React from 'react'
import { productCategoryData } from '../../../../data/productCategoryData'
import Container from '@/components/layouts/Container'

const Products = () => {
    return (
        <section id="products" className="mt-23.5 mb-20">
            <Container>
                <Title title="OUR TRENDY" titleB="PRODUCTS" />
                <div className='flex justify-center gap-13.25 mt-7.75'>
                    {
                        productCategoryData.map(item => (
                            <button key={item.id} className="font-jost font-medium relative after:content-[''] after:left-0 after:absolute after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-primary hover:after:w-3/5 after:duration-300 cursor-pointer text-[#767676] hover:text-primary">{item.title}</button>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default Products