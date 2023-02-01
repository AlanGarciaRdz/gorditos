
import React, { useState } from 'react'
import 'tw-elements';
import rodo from '../assets/images/rodo.png'
import rodo2 from '../assets/images/rodo2.png'
import gordito from '../assets/images/gordito.png'


import fijo1 from '../assets/images/fijo1.jpeg'
import fijo2 from '../assets/images/fijo2.jpeg'
import fijo3 from '../assets/images/fijo3.jpeg'

import stories from '../assets/images/stories.png'

import Card from './cards';


import storie1 from '../assets/images/stories/storie1.jpeg';
import storie2 from '../assets/images/stories/storie2.jpeg';
import storie3 from '../assets/images/stories/storie3.jpeg';
import storie4 from '../assets/images/stories/storie4.jpeg';
import storie5 from '../assets/images/stories/storie5.jpeg';


import carousel1 from '../assets/images/carousel/1.jpeg'
import carousel2 from '../assets/images/carousel/2.jpeg'
import carousel3 from '../assets/images/carousel/3.jpeg'
import carousel4 from '../assets/images/carousel/4.jpeg'

import Carousel from './Carousel'


import logo from '../assets/images/logo.png';





const Hero = () => {

    const stories =
    {
        1: {
            "currentimage": storie1,
            "storieheader": "Primer Gordito",
            "storiedescription": "1 Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh.",
            "storiecontent": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure"
        },
        2: {
            "currentimage": storie2,
            "storieheader": "Segundo Gordito",
            "storiedescription": "2 Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh.",
            "storiecontent": "2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure"
        },
        3: {
            "currentimage": storie3,
            "storieheader": "tercer Gordito",
            "storiedescription": "3 Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh.",
            "storiecontent": "3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure"
        },
        4: {
            "currentimage": storie4,
            "storieheader": "cuarto Gordito",
            "storiedescription": "4 Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh.",
            "storiecontent": "4 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure"
        },
        5: {
            "currentimage": storie5,
            "storieheader": "quinto Gordito",
            "storiedescription": "5 Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh.",
            "storiecontent": "5 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure"
        }
    }

    let [currentimage, setCurrentImage] = useState(stories[1].currentimage);
    let [storieheader, setStorieHeader] = useState(stories[1].storieheader);
    let [storiedescription, setStorieDescription] = useState(stories[1].storiedescription);
    let [storiecontent, setStorieContent] = useState(stories[1].storiecontent);

    const logoImg = {
        height: `87px`,
        marginTop: `-14px`
    }

    // const rodoImg = {
    //     backgroundImage: `url("${rodo}")`,
    //     backgroundSize: "cover",
    // }

    const Heroimg = {
        // backgroundImage: `url("${HeroImg}")`,
        // backgroundSize: "cover",
        height: '52rem'
    }

    const roadmapspace = {
        // backgroundImage: `url("${HeroImg}")`,
        // backgroundSize: "cover",
        height: '35rem'
    }

    const Gorditoprincipal = {
        marginTop: `-247px`
    }

    const SpecialRound = {
        marginTop: `-50px`,
        marginBottom: '50px'
    }



    const storiesStyle = {
        borderRadius: '3rem',
        marginTop: `-100px`,
        marginBottom: '50px'

    }

    const customborderRound = {
        borderRadius: '3rem',
    }

    const updateStorie = (i) => {


        setCurrentImage(stories[i].currentimage)
        setStorieHeader(stories[i].storieheader)
        setStorieDescription(stories[i].storiedescription)
        setStorieContent(stories[i].storiecontent)

    };


    return (
        <>

            <div className="w-full bg-cover bg-center h-full bg-piramide  bg-fixed bg-no-repeat" style={Heroimg}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className='texto-gorditos text-header text-white justify-center font-bold font-neue w-full h-full uppercase'>Gorditos</h1>

                        <button className="mt-4 px-4 py-2"><img prop="gordito" style={Gorditoprincipal} className="w-full" src={gordito} alt="gordito" /></button>

                        <p className='text-white justify-center font-neue w-full h-full uppercase'>®{new Date().getFullYear()} RODO PADILLA.</p>
                    </div>
                </div>
            </div>

            <div className='flex space-x-4  grid-cols-3 h-full md:bg-blue sm:bg-green  bg-yellow-300 shadow-xl rounded-3xl' style={SpecialRound}>
                <div className='  grid place-items-center h-screen '>
                    <img alt="fijo1" prop="fijo1" src={fijo1} className="rounded-full px-1.5 transition duration-100 hover:scale-105" />
                </div>
                <div className=' grid place-items-center h-screen '>
                    <img alt="fijo2" prop="fijo2" src={fijo2} className="rounded-full px-1.5 transition duration-100 hover:scale-105" />
                </div>
                <div className=' grid place-items-center h-screen '>
                    <img alt="fijo3" prop="fijo3" src={fijo3} className="rounded-full px-1.5 transition duration-100 hover:scale-105" />
                </div>
            </div>


            {/* biography */}
            <section id="rodopadillasection">
                <div id="featured-section">

                    <div id="rodo_nombre"
                        className="flex flex-col self-center justify-center bg-no-repeat drop-shadow-none lg:drop-shadow-md">

                        <h1 className="texto-gorditos text-header self-center align-middle  font-bold text-blue-400 leading-none tracking-tighter text-brand-light uppercase" >
                            RODO PADILLA
                        </h1>
                    </div>

                    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                        <div className="flex flex-wrap-reverse items-center mx-auto max-w-7xl">

                            <div className="flex justify-center w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                                <div>
                                    <div className="relative w-full max-w-lg">
                                        <div className="relative">
                                            <img alt="rodo" prop="rodo" src={rodo} className="transition duration-100 hover:scale-105" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                                <h2
                                    className="mb-8  text-lg font-bold tracking-widest text-brand-highlight uppercase text-blue-400"
                                >
                                    {`<< CADA MODELADA, CADA VEZ QUE TOCO EL BARRO, TRATO DE PLASMAR UN SENTIMIENTO, UNA ACTITUD Y UN CARÁCTER. >>`}
                                </h2>

                                <p
                                    className="mb-8 text-2xl lg:text-base leading-relaxed text-left text-blue-400"
                                >
                                    Rodo Padilla es orgullosamente originario de Tlaquepaque, Jalisco, México y de haber trabajado y vivido toda su vida entre cerámica y artesanías en el taller de su padre, se graduó en Ingeniería Industrial de la Universidad de Guadalajara, hizo especializaciones en materiales y diseño cerámico, en Tokio y en Nagoya, Japón, además de cursos de diseño en Buenos Aires, Argentina y en Faenza, Italia.
                                </p>
                                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="carouselExampleCrossfade"
                        className="carousel slide carousel-fade relative px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24"
                        data-bs-ride="carousel"

                    >
                        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4" style={customborderRound}>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active float-left w-full">
                                <img
                                    src={carousel1}
                                    className="block w-full"
                                    alt="1"
                                />
                            </div>
                            <div className="carousel-item float-left w-full">
                                <img
                                    src={carousel2}
                                    className="block w-full"
                                    alt="2"
                                />
                            </div>
                            <div className="carousel-item float-left w-full">
                                <img
                                    src={carousel3}
                                    className="block w-full"
                                    alt="3"
                                />
                            </div>
                            <div className="carousel-item float-left w-full">
                                <img
                                    src={carousel4}
                                    className="block w-full"
                                    alt="4"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* texto biografia */}
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow  lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">

                        <h2
                            className="  text-storieheader font-bold uppercase text-blue-400"
                        >
                            ESTE ES EL TALLER DE RODO PADILLA, UNO DE LOS MÁS RECONOCIDOS ESCULTORES-ARTESANOS EN CERÁMICA DE ALTA TEMPERATURA.
                        </h2>


                    </div>

                    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                        <div className="flex flex-wrap-reverse items-center mx-auto max-w-7xl">



                            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                                <h2
                                    className="mb-8  text-lg font-bold tracking-widest text-brand-highlight uppercase text-blue-400"
                                >
                                    Realiza exposiciones individuales y colectivas desde 1992, en diferentes galerías de México y algunas de los Estados Unidos. Su obra se exhibe permanentemente en dos gale- rías propias en Tlaquepaque. Ha sido reconocido con varios Premios en Diseño cerámico, destacándose los pri- meros lugares de los años 1992, 2000, 2003 y 2007 en el Premio Nacional de la Cerámica.
                                </h2>

                                <p
                                    className="mb-8 text-2xl lg:text-base leading-relaxed text-left text-blue-400"
                                >
                                    Merece mencionarse la realización de varias esculturas en cerámica y en bronce representando los derechos funda- mentales de los niños, en el museo ‘’Trompo Mágico’’ de Guadalajara, Jalisco. Actualmente es el Presidente del Premio Nacional de la Cerámica y fue nombrado embajador de los Juegos Panamericanos Guadalajara 2011. Entre sus últimas exposiciones se destacan la que presentó en 2012 en el Hospicio Cabañas nombrada “De los niños es el reino de los cielos”, y en 2014 en la Cámara de Comercio de Gua- dalajara la exposición “Un corazón de regreso”.
                                </p>
                                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
                            </div>

                            <div className="flex justify-center w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                                <div>
                                    <div className="relative w-full max-w-lg">
                                        <div className="relative">
                                            <img alt="rodo2" prop="rodo2" src={rodo2} className="transition duration-100 hover:scale-105" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </section>


            {/* carousel https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind */}
            <div id="carousel-section flex">
                <div id="rodo_nombre" className="flex flex-row">
                    <div className='basis-1/2 texto-gorditos text-subheader font-bold   grid place-items-center text-red-600'>
                        GORDITOS ©

                    </div>
                    <div className='basis-1/4'> </div>


                </div>
                <div className='flex justify-center items-center gap-2 '>
                    <Carousel />
                </div>

                <div className='basis-1/4 texto-gorditos  grid place-items-center text-red-600'>
                    Lorem ipsum dolor sit amet, consec adipiscing elit, sed diam nonummy
                </div>
            </div>


            {/*  ROADMAP */}
            <div id="featured-section w-full" style={roadmapspace}>
                <div className=' h-full bg-sky-700 shadow-xl rounded-3xl' >
                    <div id="rodo_nombre" className="flex flex-col self-center justify-center bg-no-repeat drop-shadow-none lg:drop-shadow-md">
                        <h1 className="texto-gorditos text-subheader self-center align-middle justify-center font-bold text-yellow-300 leading-none tracking-tighter text-brand-light uppercase">
                            ROADMAP
                        </h1>
                    </div>


                    <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">

                        <div className='text-white'> Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

                        <div className="text-white"> Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                    </div>

                    <div className="flex justify-center w-full max-w-2xl gap-3 mx-auto mt-6">


                        <div className='phase1'>
                            <div className='text-yellow-200 text-lg'>Phase 1</div>
                            <div className='text-white'>Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                        </div>

                        <div className='phase2'>
                            <div className='text-yellow-200 text-lg'>Phase 2</div>
                            <div className='text-white'>Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                        </div>
                        <div className='phase3'>
                            <div className='text-yellow-200 text-lg'>Phase 3</div>
                            <div className='text-white'>Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                        </div>
                    </div>


                </div>

            </div>


            {/*  STORIES */}
            <div id="featured-stories w-full">


                <div className='rounded-lg h-full w-full bg-cover bg-center bg-tulum bg-fixed bg-sky-700 shadow-xl' style={storiesStyle}>
                    <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50" style={customborderRound}>



                        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                            <div className="flex flex-wrap-reverse items-center mx-auto max-w-7xl">

                                <div className="flex justify-center w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                                    <div>
                                        <div className="relative w-full max-w-lg">
                                            <div className="relative">
                                                <img alt="stories" prop="stories" src={currentimage} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                                    <h2
                                        className="mb-8  text-subheader font-bold tracking-widest text-brand-highlight uppercase text-white"
                                    >
                                        STORIES
                                    </h2>

                                    <h2
                                        className="mb-8  text-storieheader font-bold tracking-widest text-brand-highlight uppercase text-yellow-400"
                                    >
                                        {storieheader}
                                    </h2>

                                    <p
                                        className="mb-8 text-2xl lg:text-base leading-relaxed text-left text-yellow-400"
                                    >
                                        {storiedescription}
                                    </p>

                                    <p
                                        className="mb-8 text-2xl lg:text-base leading-relaxed text-left text-white"
                                    >
                                        {storiecontent}
                                    </p>

                                    <div className="grid grid-rows-1 grid-flow-col gap-2">


                                        <img alt="stories" prop="stories" src={storie1} className="px-1.5 transition duration-100 hover:scale-105" onClick={() => updateStorie(1)} />
                                        <img alt="stories" prop="stories" src={storie2} className="px-1.5 transition duration-100 hover:scale-105" onClick={() => updateStorie(2)} />
                                        <img alt="stories" prop="stories" src={storie3} className="px-1.5 transition duration-100 hover:scale-105" onClick={() => updateStorie(3)} />
                                        <img alt="stories" prop="stories" src={storie4} className="px-1.5 transition duration-100 hover:scale-105" onClick={() => updateStorie(4)} />
                                        <img alt="stories" prop="stories" src={storie5} className="px-1.5 transition duration-100 hover:scale-105" onClick={() => updateStorie(5)} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* team */}
            <div id="carousel-section" className='' >
                <div id="rodo_nombre" className="flex flex-row">
                    <div className='basis-1/2 texto-gorditos text-subheader font-bold   grid place-items-center text-red-600'>
                        THE TEAM
                    </div>
                    <div className='basis-1/4'></div>
                    <div className='basis-1/4 texto-gorditos  grid place-items-center text-red-600'>
                        Lorem ipsum dolor sit amet, consec adipiscing elit, sed diam nonummy
                    </div>

                </div>




                <div className='grid grid-cols-3 gap-3 '>
                    {/* <div className='flex space-x-4  grid-cols-3 rounded-lg h-full bg-yellow-300 shadow-xl' style={SpecialRound}> */}
                    <div className=' p-8 '>
                        <Card />
                    </div>
                    <div className=' p-8 '>
                        <Card />
                    </div>
                    <div className=' p-8 '>
                        <Card />
                    </div>
                    <div className=' p-8 '>
                        <Card />
                    </div>
                    <div className=' p-8 '>
                        <Card />
                    </div>
                    <div className=' p-8 '>
                        <Card />
                    </div>
                    {/* </div> */}
                </div>
            </div>


            {/*  FAQ */}
            <div id="featured-section w-full" >
                <div className='h-full bg-yellow-300 shadow-xl rounded-t-3xl' >
                    <div id="rodo_nombre" className="flex flex-col self-center justify-center bg-no-repeat drop-shadow-none lg:drop-shadow-md">
                        <h1 className="texto-gorditos text-subheader self-center align-middle justify-center font-bold text-sky-500 leading-none tracking-tighter text-brand-light uppercase">
                            FAQ
                        </h1>
                    </div>


                    <div className="grid grid-cols-1 gap-1 justify-center w-full max-w-2xl mx-auto mt-6">

                        <div className="accordion" id="accordionExample5">
                            <div className="accordion-item   border-sky-700">
                                <h2 className="accordion-header mb-0" id="headingOne5">
                                    <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-sky-600 text-left rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
                                        aria-controls="collapseOne5">
                                        Lorem ipsum dolor sit amet, consec adipiscing elit?
                                    </button>
                                </h2>
                                <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
                                    <div className="accordion-body py-4 px-5">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default,
                                        until the collapse plugin adds the appropriate classes that we use to style each
                                        element. These classes control the overall appearance, as well as the showing and
                                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                        our default variables. It's also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item   border-sky-700">
                                <h2 className="accordion-header mb-0" id="headingTwo5">
                                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-sky-600 text-left

        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
                                        aria-controls="collapseTwo5">
                                        Lorem ipsum dolor sit amet, consec adipiscing elit?
                                    </button>
                                </h2>
                                <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
                                    <div className="accordion-body py-4 px-5">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                        until the collapse plugin adds the appropriate classes that we use to style each
                                        element. These classes control the overall appearance, as well as the showing and
                                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                        our default variables. It's also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item  border-sky-700">
                                <h2 className="accordion-header mb-0" id="headingThree5">
                                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-sky-600 text-left

         border-sky-700

        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
                                        aria-controls="collapseThree5">
                                        Lorem ipsum dolor sit amet, consec adipiscing elit?
                                    </button>
                                </h2>
                                <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5">
                                    <div className="accordion-body py-4 px-5">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                        until the collapse plugin adds the appropriate classes that we use to style each
                                        element. These classes control the overall appearance, as well as the showing and
                                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                        our default variables. It's also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="footer" className=" flex flex-row justify-between z-10 text-white bg-transparent">

                        <div className="p-4">
                            <div className="font-extrabold tracking-widest text-xl"><img alt="logoimg1" prop="logoim1g" style={logoImg} src={logo} /></div>
                        </div>

                        <div className="p-4 hidden md:flex flex-row justify-between font-bold">
                            <a id="hide-after-click" href="#about" className="mx-4 text-lg ">Gorditos</a>
                            <a href="#rodo" className="mx-4 text-lg ">Rodo Padilla</a>
                            <a href="#roadmap" className="mx-4 text-lg ">Roadmap</a>
                            <a href="#roadmap" className="mx-4 text-lg ">Stories</a>
                            <a href="#team" className="mx-4 text-lg ">Team</a>
                            <a href="#faq" className="mx-4 text-lg ">FAQ</a>
                            <a href="#compra" className="mx-4 text-lg ">Compra tu gordito</a>
                        </div>

                    </div>

                </div>




            </div>
        </>
    )
}


export default Hero;





