import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/images/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SlSocialPintarest } from 'react-icons/sl'
import Btn from '../CommonLayout/Btn'
import Container from '../Container'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className="bg-[#e9e9e9] text-[#222] pt-16 pb-8 px-8 font-jost mt-25">
            <Container>
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-12">
                    <div className="space-y-6">
                        <Image src={logo} alt="logo" width={100} height={100} />
                        <div className="text-sm leading-relaxed text-gray-600">
                            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622, United States</p>
                        </div>
                        <div className="text-sm font-bold space-y-1">
                            <p>
                                <a href="mailto:sale@uomo.com" className="hover:underline">
                                    sale@uomo.com
                                </a>
                            </p>
                            <p>+1 246-345-0695</p>
                        </div>
                        <div className="flex gap-9 text-gray-700">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaYoutube />
                            <SlSocialPintarest />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium uppercase mb-6">
                            Company
                        </h4>
                        <ul className="text-sm space-y-4 text-primary">
                            <li>
                                <Btn href='#' title="About Us" />
                            </li>
                            <li>
                                <Btn href='#' title="Careers" />

                            </li>
                            <li>
                                <Btn href='#' title="Affiliates" />
                            </li>
                            <li>
                                <Btn href='#' title="Blog" />

                            </li>
                            <li>
                                <Btn href='#' title="Contact Us" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium uppercase mb-6">Shop</h4>
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li>
                                <Btn href='#' title="New Arrivals" />
                            </li>
                            <li>
                                <Btn href='#' title="Accessories" />
                            </li>
                            <li>
                                <Btn href='#' title="Men" />
                            </li>
                            <li>
                                <Btn href='#' title="Women" />
                            </li>
                            <li>
                                <Btn href='#' title="Shop All" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium uppercase mb-6">Help</h4>
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li>
                                <Btn href='#' title="Customer Service" />
                            </li>
                            <li>
                                <Btn href='#' title="My Account" />
                            </li>
                            <li>
                                <Btn href='#' title="Find a Store" />
                            </li>
                            <li>
                                <Btn href='#' title="Legal &amp; Privacy" />
                            </li>
                            <li>
                                <Btn href='#' title="Contact" />
                            </li>
                            <li>
                                <Btn href='#' title="Gift Card" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-medium uppercase mb-6">
                            Subscribe
                        </h4>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Be the first to get the latest news about trends, promotions, and much
                            more!
                        </p>
                        <div className="relative flex items-center border-b border-gray-400 pb-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-500"
                            />
                            <button className="text-[11px] font-bold uppercase tracking-widest ml-2">
                                Join
                            </button>
                        </div>
                        <div className="mt-8">
                            <h5 className="text-[15px] font-medium mb-3 font-jost">Secure payments</h5>
                            <div className="flex gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Discover_Card_logo.svg"
                                    alt="Discover"
                                    className="h-3"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                    alt="Mastercard"
                                    className="h-4"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    alt="PayPal"
                                    className="h-3"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Skrill_logo.svg"
                                    alt="Skrill"
                                    className="h-3"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                    alt="Visa"
                                    className="h-3"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
                    <div>©2020 Uomo</div>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <div className="flex gap-2">
                            <span className="text-gray-400">Language</span>
                            <span className="text-black flex items-center gap-1">
                                United Kingdom | English{" "}
                                <IoIosArrowUp size={18}/>
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-400">Currency</span>
                            <span className="text-black flex items-center gap-1">
                                $ USD <IoIosArrowUp size={18}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-4 right-4 bg-white/50 p-2 shadow-sm">
                    <i className="fas fa-chevron-up text-xs text-gray-400" />
                </div>
            </Container>
        </footer>


    )
}

export default Footer