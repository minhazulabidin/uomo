import React from 'react';
import { Truck, Headphones, ShieldCheck } from 'lucide-react';
import Container from '@/components/layouts/Container';

const ServiceFeatures = () => {
    const features = [
        {
            icon: <Truck size={52} strokeWidth={1.5} />,
            title: "FAST AND FREE DELIVERY",
            description: "Free delivery for all orders over $140"
        },
        {
            icon: <Headphones size={52} strokeWidth={1.5} />,
            title: "24/7 CUSTOMER SUPPORT",
            description: "Friendly 24/7 customer support"
        },
        {
            icon: <ShieldCheck size={52} strokeWidth={1.5} />,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days"
        }
    ];

    return (
        <section className="font-jost mt-25">
            <Container>
                <div className="flex justify-around">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2">
                            <div className="text-black mb-5.75">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-medium uppercase text-black">
                                {feature.title}
                            </h3>
                            <p className="text-[15px] text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServiceFeatures;