import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoBagOutline } from "react-icons/io5";
import { FaHeadphones, FaShoppingCart } from "react-icons/fa";
import { LiaArrowAltCircleLeft } from "react-icons/lia";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { FaRegUser } from 'react-icons/fa'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
       <div className='w-screen overflow-x-hidden'>
      {/* Sticky Navbar - Fixed Position */}
      <div className="navbar w-full h-auto p-5 flex justify-around items-center fixed top-0 left-0 z-50 bg-[#EFF5E1]" data-aos="fade-down" >
        <div className="logo" data-aos="fade-right">
          <h1 className='text-3xl text-[#2D3B36] font-bold uppercase'>SKINCARE</h1>
        </div>

        <div className="menu hidden sm:block">
          <ul className='flex gap-14 text-[#2D3B36]'>
            <li data-aos="fade-down" data-aos-delay="100"><a href="#allproduct">All Product</a></li>
            <li data-aos="fade-down" data-aos-delay="200"><a href="#serum">Serum</a></li>
            <li data-aos="fade-down" data-aos-delay="300"><a href="#sunscreen">Sunscreen</a></li>
            <li data-aos="fade-down" data-aos-delay="400"><a href="#bundle">Bundle</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="icon bg-[#F8FEE5] p-2 rounded-full leading-tight" data-aos="zoom-in" data-aos-delay="100">
            <i className=' text-black'><IoBagOutline /></i>
          </div>
          <div className="text">
            <span className="hidden md:block capitalize" data-aos="fade-left" data-aos-delay="200">Cart(1)</span>
          </div>
          <div className="icon2 bg-[#F8FEE5] px-2 p-1 rounded-full " data-aos="zoom-in" data-aos-delay="300">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="icon3 bg-[#F8FEE5] p-2 rounded-full" data-aos="zoom-in" data-aos-delay="400">
            <i className=''><FaRegUser/></i>
          </div>
        </div>
      </div>

      <div className="slider md:w-full md:h-auto bg-[#EFF5E1] pt-16" id='allproduct'> {/* Added pt-16 to account for sticky navbar */}

        {/* Mobile Layout with animations */}
        <div className="block sm:hidden px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h1 className="uppercase text-6xl text-[#2D3B36] leading-tight">
              <span className="block font-bold">glowww</span>
              <span className="block font-bold">naturally</span>
            </h1>
          </div>

          <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <p className='text-[#2D3B36] text-center px-4'>
              Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
            </p>
          </div>

          <div className="flex justify-center mb-8" data-aos="zoom-in">
            <img
              className='w-[402px] h-[441px] object-cover rounded-lg'
              src={require('./img/skincare.jpg')}
              alt="skincare"
            />
          </div>

          <div className="mb-8" data-aos="fade-up">
            <h1 className="uppercase font-inter font-bold text-[80px] leading-[80px] text-[#2D3B36] text-center">
              Skincare
            </h1>
          </div>

          <div className="flex  justify-center mb-8 relative" data-aos="fade-up">
            <img
              src={require('./img/beuty.png')}
              alt="beauty"
              className="w-[402px] h-[399px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4  transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="200">
              <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3 shadow-md">
                <img
                  src={require('./img/skincare.jpg')}
                  alt="award-icon"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-left leading-tight text-[#2D3B36]">
                  <span className='text-sm'>While giving you an invigorating<br/> cleansing experience.</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="300">
            <button className="capitalize px-8 py-4 rounded-full text-white bg-[#2D3B36] text-lg">
              shop now
            </button>
          </div>
        </div>

        {/* Tablet Layout with animations */}
        <div className="hidden sm:block md:hidden">
          <div className="w-full h-auto my-12 flex justify-around items-center flex-wrap relative" data-aos="fade-up">
            <div className="text w-[234px] h-[61px]">
              <p className='indent-24 text-[#2D3B36]'>
                Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
              </p>
            </div>

            <div className="image-skincare" data-aos="zoom-in">
              <img
                className='w-[335.93px] h-[332px]'
                src={require('./img/skincare.jpg')}
                alt=""
              />
            </div>

            <div className="mt-10 text-center px-4 leading-8 absolute top-56" data-aos="fade-up" data-aos-delay="100">
              <h1 className="uppercase text-5xl text-[#2D3B36] font-bold font-inter">
                <span className="block text-[110px] font-bold font-inter">glowwww</span>
                <span className="block text-[110px] font-bold font-inter">naturally</span>
              </h1>
            </div>
          </div>

          <div className="relative w-full h-auto pt-10">
            <h1 className="uppercase font-inter font-bold text-[150px] leading-[240px] text-[#2D3B36] text-center mt-[280px]" data-aos="fade-up">
              Skincare
            </h1>

            <div className="absolute top-72 right-4" data-aos="fade-left" data-aos-delay="200">
              <button className="capitalize px-6 py-3 rounded-full text-white bg-[#2D3B36] text-lg">
                shop now
              </button>
            </div>

            <div className="flex absolute top-36 left-2 right-0 justify-between px-4 z-20" data-aos="fade-up">
              <img
                src={require('./img/beuty.png')}
                alt="beauty"
                className="w-[360px] h-[400px] rounded-lg ml-2"
              />
              <div className="absolute bottom-4 left-14  transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="300">
                <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3 shadow-md">
                  <img
                    src={require('./img/skincare.jpg')}
                    alt="award-icon"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col text-left leading-tight text-[#2D3B36]">
                    <span className='text-sm'>While giving you an invigorating<br/> cleansing experience.</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout with animations */}
        <div className="hidden md:block">
          <div className="w-full h-auto my-12 flex justify-around items-center flex-wrap relative">
            <div className="text w-[335px] h-[87px]" data-aos="fade-right">
              <p className='indent-24 text-[#2D3B36]'>
                Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
              </p>
            </div>

            <div className="center-text w-[398px] h-[253px]" data-aos="fade-up">
              <h1 className="uppercase text-7xl text-[#2D3B36] font-bold font-inter">
                glow nature-ally
              </h1>
            </div>

            <div className="image-skincare" data-aos="fade-left">
              <img
                className='w-[222.61px] h-[220px]'
                src={require('./img/skincare.jpg')}
                alt="skincare"
              />
            </div>
          </div>

          <div className="relative w-full h-auto pt-20">
            <h1 className="uppercase font-inter font-bold text-[250px] leading-[300px] text-[#2D3B36] text-left mt-[320px]" data-aos="fade-up">
              Skincare
            </h1>

            <div className="absolute top-72 left-32" data-aos="fade-right" data-aos-delay="200">
              <button className="capitalize px-6 py-3 rounded-full text-white bg-[#2D3B36] text-lg">
                shop now
              </button>
            </div>

            <div className="flex absolute top-1 left-[350px] items-center gap-6 z-20" data-aos="fade-left">
              <img
                src={require('./img/beuty.png')}
                alt="beauty"
                className="w-[610px] h-[676px] rounded-lg"
              />

              <div className="absolute bottom-5 left-40  transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="300">
                <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3 shadow-md">
                  <img
                    src={require('./img/skincare.jpg')}
                    alt="award-icon"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col text-left leading-tight text-[rgb(45,59,54)]">
                    <span className='text-sm'>While giving you an invigorating <br/>cleansing experience.</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text section with animation */}
    <div className="p-4 sm:p-10 md:p-20 flex justify-center" data-aos="fade-up">
  <div className="text-skincare w-full h-auto px-2 sm:px-8 py-4 sm:py-6">
    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl capitalize text-[#2D3B36] font-inter leading-normal sm:leading-relaxed md:leading-loose text-justify">
      Experience the ultimate in skincare with our expertly formulated products,
      crafted to nourish, protect, and rejuvenate your skin.
      <span className="block mt-3 opacity-60">
        Combining the finest natural ingredients with advanced science, our collection
        ensures every skin type can achieve a radiant, healthy glow. Embrace your
        beauty with confidence every day. Experience the ultimate in skincare with
        our expertly formulated products, crafted to nourish, protect, and rejuvenate
        your skin.
      </span>
    </p>
  </div>
</div>


      {/* skincare section with animations */}
      <div className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-10 md:gap-24" id='serum'>

        {/* Left Side */}
        <div className="w-full md:w-1/2 px-2" data-aos="fade-right" >
          <div className="mb-4">
            <button className="capitalize p-2 rounded-full border border-[#2D3B36] flex items-center gap-3">
              <span className="bg-[#2D3B36] w-5 h-5 rounded-full flex items-center justify-center"></span>
              why our products
            </button>
          </div>

          <div className="text-[#2D3B36] font-inter">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-10 mb-6 leading-snug">
              YOUR SKIN DESERVES THE BEST CARE.
            </h2>
            <p className="text-sm sm:text-base">
              Discover a curated collection of skincare products designed to rejuvenate,
              protect, and pamper your skin. Explore our rage crafted with love backed
              by science, and inspired by nature.
            </p>
          </div>

          <div className="w-full flex my-10" data-aos="fade-up" data-aos-delay="100">
            <div>
              <span className="text-[#2D3B36] text-3xl sm:text-4xl mr-6">01</span>
            </div>
            <div>
              <h3 className="text-[#2D3B36] text-xl sm:text-2xl mb-2">bio ingredients</h3>
              <p className="text-[#2D3B36] text-sm sm:text-base">
                Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
              </p>
            </div>
          </div>

          <div className="w-full flex my-10" data-aos="fade-up" data-aos-delay="200">
            <div>
              <span className="text-[#2D3B36] text-3xl sm:text-4xl mr-6">02</span>
            </div>
            <div>
              <h3 className="text-[#2D3B36] text-xl sm:text-2xl mb-2">Everything Natural</h3>
              <p className="text-[#2D3B36] text-sm sm:text-base">
                Pure ingredients for pure skin. The Perfect solution for your skin care needs.
              </p>
            </div>
          </div>

          <div className="w-full flex my-10" data-aos="fade-up" data-aos-delay="300">
            <div>
              <span className="text-[#2D3B36] text-3xl sm:text-4xl mr-6">03</span>
            </div>
            <div>
              <h3 className="text-[#2D3B36] text-xl sm:text-2xl mb-2">All Handmade</h3>
              <p className="text-[#2D3B36] text-sm sm:text-base">
                Made with love and care. Just for you. Give your skin the tender loving care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 px-2 relative" data-aos="fade-left">
          <img className="w-full h-auto object-cover" src={require('./img/person.png')} alt="" />

          <div className="absolute bottom-14 left-12 transform -translate-x-1/2 md:left-52 md:translate-x-0" data-aos="fade-up" data-aos-delay="400">
            <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3">
              <span className="w-12 h-12 bg-[#2D3B36] rounded-full"></span>
              <div className="flex flex-col text-left leading-tight">
                <span>best skin care product</span>
                <span>award winning</span>
              </div>
            </button>
          </div>

          <div className="flex justify-between mt-4 px-2" data-aos="fade-up" data-aos-delay="500">
            <h2 className="uppercase text-[#2D3B36] font-inter text-sm sm:text-base">since 2001</h2>
            <span className="uppercase text-[#2D3B36] font-inter text-sm sm:text-base">learn more</span>
          </div>
        </div>
      </div>

      {/* product showcase with animations */}
      <div className="max-w-[1200px] mx-auto px-4 py-10" id='sunscreen'>
        <div className="row w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0" data-aos="fade-up">
          <div className="">
            <button className="capitalize p-2 rounded-full border border-[#2D3B36] flex items-center gap-3">
              <span className="bg-[#2D3B36] w-[20px] h-[20px] rounded-full flex items-center justify-center"></span>
              best selling product
            </button>
          </div>

          <h2 className="text-[#2D3B36] font-inter text-2xl sm:text-3xl text-center md:text-left">
            Skincare That Brings Out<br />
            Your Natural Radiance
          </h2>

          <div className="hidden md:flex gap-5">
            <i className="text-black text-6xl" data-aos="fade-left" data-aos-delay="100"><LiaArrowAltCircleLeft /></i>
            <i className="text-6xl" data-aos="fade-left" data-aos-delay="200"><PiArrowCircleRightFill /></i>
          </div>
        </div>

        <div className="py-10 flex flex-col items-center justify-center md:flex-row md:justify-center gap-6">
          <div className="relative w-[320px] sm:w-[350px] h-[480px] sm:h-[500px]" data-aos="zoom-in">
            <img
              src={require('./img/product1.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          <div className="hidden md:block relative w-[350px] h-[500px]" data-aos="zoom-in" data-aos-delay="100">
            <img src={require('./img/product2.jpg')} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          <div className="hidden md:block relative w-[350px] h-[500px]" data-aos="zoom-in" data-aos-delay="200">
            <img src={require('./img/product3.jpg')} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-6 mt-4" data-aos="fade-up">
          <i className="text-black text-5xl"><LiaArrowAltCircleLeft /></i>
          <i className="text-black text-5xl"><PiArrowCircleRightFill /></i>
        </div>
      </div>

      {/* image picture section with animation */}
      <div className="hidden md:block max-w-[1200px] mx-auto py-20 relative" data-aos="fade-up">
        <div className="relative">
          <img
            className="w-full h-auto rounded-md"
            src={require('./img/lady.png')}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-md"></div>

          <div className="absolute bottom-10 left-96 transform -translate-x-1/2 text-center text-white z-10" data-aos="fade-up" data-aos-delay="200">
            <p className="text-4xl leading-snug font-inter">
              Feel Beautiful Inside and Out<br />
              with Every Product.
            </p>

            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* feel beautiful section with animations */}
      <div className="max-w-[1200px] mx-auto px-4 h-auto py-20" id='bundle'>
        <div className="w-full text-center mb-8" data-aos="fade-up">
          <h2 className="text-[#2D3B36] font-inter text-2xl md:text-3xl leading-snug">
            Feel Beautiful Inside and Out<br />
            with Every Product.
          </h2>

          <div className="mt-6 flex justify-center flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:gap-4 md:flex">
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium" data-aos="fade-up" data-aos-delay="100">
              NEW ARRIVAL
            </button>
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium" data-aos="fade-up" data-aos-delay="200">
              CLEANSING
            </button>
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium" data-aos="fade-up" data-aos-delay="300">
              ACNE FIGHTER
            </button>
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium" data-aos="fade-up" data-aos-delay="400">
              ANTI AGGING
            </button>
          </div>
        </div>

        <div className="py-14 px-4 flex justify-center gap-6 flex-wrap md:flex-nowrap">
          <div className="relative w-[350px] h-[500px]" data-aos="fade-up">
            <img
              src={require('./img/product1.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          <div className="hidden md:block relative w-[350px] h-[500px]" data-aos="fade-up" data-aos-delay="100">
            <img
              src={require('./img/product2.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          <div className="hidden md:block relative w-[350px] h-[500px]" data-aos="fade-up" data-aos-delay="200">
            <img
              src={require('./img/product3.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-4 md:hidden" data-aos="fade-up">
          <i className="text-black text-4xl">
            <LiaArrowAltCircleLeft />
          </i>
          <i className="text-4xl">
            <PiArrowCircleRightFill />
          </i>
        </div>
      </div>

      {/* FAQ section with animations */}
      <div className="max-w-[1200px] mx-auto px-4 h-auto py-20 flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="image-beauty relative hidden md:block" data-aos="fade-right">
          <img className='w-[650px] h-[650px] object-cover' src={require('./img/product3.jpg')} alt="" />

          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 md:left-56 md:translate-x-0" data-aos="fade-up" data-aos-delay="300">
            <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3">
              <i className='p-3 rounded-full text-white bg-[#2D3B36]'><FaHeadphones /></i>
              <div className="flex flex-col text-left leading-tight">
                <span>24/7 We're Here<br />to Help You</span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="button mb-4" data-aos="fade-up">
            <button className="capitalize p-2 rounded-full border border-[#2D3B36] flex items-center gap-3">
              <span className="bg-[#2D3B36] w-[20px] h-[20px] rounded-full flex items-center justify-center"></span>
              Frequently Asked Question
            </button>
          </div>

          <div className="text-answer my-6 text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
            <h2 className='text-2xl md:text-3xl text-[#2D3B36] leading-snug'>
              Answers to Your<br />
              Skincare Questions, All<br />
              in One Place.
            </h2>
          </div>

          <div className="flex flex-col gap-5 mt-4 w-full max-w-[450px]">
            <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded" data-aos="fade-up" data-aos-delay="200">
              <p className="text-base text-[#2D3B36] font-medium capitalize">Are your products safe for sensitive skin?</p>
              <span className="text-2xl text-[#2D3B36] font-bold">+</span>
            </div>
            <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded" data-aos="fade-up" data-aos-delay="300">
              <p className="text-base text-[#2D3B36] font-medium capitalize">Are your products cruelty-free?</p>
              <span className="text-2xl text-[#2D3B36] font-bold">-</span>
            </div>
            <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded" data-aos="fade-up" data-aos-delay="400">
              <p className="text-base text-[#2D3B36] font-medium capitalize">What's your return policy?</p>
              <span className="text-2xl text-[#2D3B36] font-bold">+</span>
            </div>
            <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded" data-aos="fade-up" data-aos-delay="500">
              <p className="text-base text-[#2D3B36] font-medium capitalize">Do you ship internationally?</p>
              <span className="text-2xl text-[#2D3B36] font-bold">+</span>
            </div>
            <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded" data-aos="fade-up" data-aos-delay="600">
              <p className="text-base text-[#2D3B36] font-medium capitalize">How do i choose the right product?</p>
              <span className="text-2xl text-[#2D3B36] font-bold">+</span>
            </div>
          </div>

          <div className="block sm:hidden mt-10 relative" data-aos="fade-up">
            <img className='w-full max-w-[400px] mx-auto h-auto object-cover' src={require('./img/product3.jpg')} alt="" />
            <div className="absolute bottom-6 left-16 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="300">
              <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3">
                <i className='p-3 rounded-full text-white bg-[#2D3B36]'><FaHeadphones /></i>
                <div className="flex flex-col text-left leading-tight text-sm">
                  <span>24/7 We're Here<br />to Help You</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with animations */}
      <div className="w-full h-auto bg-[#2D3B36]" data-aos="fade-up">
        <div className="pt-20 px-6 sm:px-10 w-full flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
          <div className="join w-full md:w-[485px] h-[300px] flex flex-col justify-between">
            <div data-aos="fade-right">
              <h2 className="capitalize text-white text-4xl sm:text-5xl leading-tight">
                Join The Skincare<br />
                Community Now.
              </h2>
            </div>
            <div className="flex justify-between text-white text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>YouTube</span>
            </div>
          </div>

          <div className="join w-full md:w-[485px] h-[300px] flex flex-col justify-between">
            <div data-aos="fade-left">
              <h2 className="capitalize text-white text-2xl sm:text-3xl mb-3">
                get in touch
              </h2>
              <span className="capitalize text-white text-3xl sm:text-4xl">
                contact.skincare.com
              </span>
            </div>
            <div className="flex justify-between text-white text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>YouTube</span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[250px] sm:h-[300px] bg-[#2D3B36] mt-10 sm:mt-0">
          <h1 className="uppercase font-inter font-bold text-[100px] sm:text-[200px] md:text-[250px] leading-none text-white/10 text-center select-none pointer-events-none" data-aos="fade-up">
            Skincare
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;