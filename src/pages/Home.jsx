import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
// import 'bootstrap/dist/css/bootstrap.min.css';       

const Home = () => {
    return (
        <div>
            {/* 50% off */}
            <div className='off row'>
                <div className='now'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_3072/v1732619173/AW24/SALE/MAIN%20SALE/BANNER/NEW/AW24_Paul_Smith_Sale_2560x6008_0017_AW24_Paul_Smith_Sale_2560x60019"
                        alt="" />
                </div>
                <div className='sale  position-static'>
                    <div className='text'>
                    <br/><br/><br/>
                        <h1 style={{ fontSize: "70px", margin:"7% 0% 0% 0%" }}>Sale: Further Reductions </h1>
                        <p style={{ fontSize: "20px" }}>Now 60% Off Selected Lines</p>

                    </div>
                    <div className='shop'>
                        <h3>SHOP MENS</h3> &nbsp; &nbsp;
                        <FaArrowCircleRight style={{ fontSize: "50px" }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h3>SHOP WOMENS</h3>  &nbsp; &nbsp;
                        <FaArrowCircleRight style={{ fontSize: "50px" }} />
                    </div>
                </div>
            </div>

            {/* mens and womens */}
            <div className='cloth row ' style={{ height :"1080px" }}>
                <div className='men ' >
                    <img style={{ height :"1080px" }} src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_2880/v1733230425/SS25/DIGITAL/16X9/Untitled-1_0008_16X99" alt="" />
                </div>
                <div className='btn'>
                    <a href="" className='male' >Mens &nbsp;<GoArrowUpRight /></a>
                    <a href="" className='women' >Womens <GoArrowUpRight /></a>
                </div>
            </div>

            vintage
            <div className='slide' >
                <div className='shoes'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1715857819/AW24/DIGITAL/4X5/AW24_PAUL_SMITH_DIGITAL_4x57"
                        alt="" />

                </div>
                <div className=''>
                    <div>
                        <h1 style={{ fontSize: "45px", textAlign: "center" }}>The Shirt Edit</h1>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                        </p>
                    </div>

                    <div>
                          {data.map((d)=>(
                            <div>
                                <div style={{display:"flex",justifyContent: "space-even", textAlign: "center"}}>
                                    <img src={d.image} alt="" style={{height:"300px",width:"230px"}}/>
                                </div>

                                <div>
                                    <p>{d.review}</p>
                                    <p>{d.price}</p>
                                </div>
                            </div>
                          ))}  
                    </div>
                </div>
                <div>

                </div>
            </div>

            {/* slider */}
            <div style={{ marginTop: "7%" }}>
                <div className='btns'>
                    <button className='mens'>Mens</button>
                    <button className='womens'>Womens</button>
                </div>
            </div>

            {/* Discover */}
            <div className='row' style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center", marginTop: "7%" }}>
                <div className='store'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1677599605/Shops/Floral%20St/New_Floral_Street-4x5"
                        alt="" height={300} width={200} />

                    <h2>Store Locator</h2>
                    <p>Find your naarest Pual Smith store and expore <br />our range of clothing, shoes, and accessories.</p>
                    <a href="">Discover More</a>
                </div>
                <div className='store'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1719408344/Discover/Collections/Cycling/Paul_Smith_Cycling_collection_235-Edit-Edit-min"
                        alt="" height={300} width={200} />

                    <h2>Coming Soon:Pual Smith Cycling</h2>
                    <p>Stay tuned for our latest collection of cycling <br />clothing and accessories, including jerseys, bib <br />shorts, hats, gloves and socks.</p>
                    <a href="">Discover More</a>
                </div>
                <div>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1718099084/AW24/DIGITAL%20TIER%202/4X5/AW24_PAUL_SMITH_STILL_LIFE_TIER2_4x516"
                        alt="" height={300} width={200} />

                    <h2>Do You Went TO Keep In Touch?</h2>
                    <p>Subscribe to our newsletter and receive 10% off <br /> your first order.</p>
                    <a href="" style={{ color: "black" }}>Discover More</a>
                </div>
            </div>

            {/* Footer */}
            <div style={{ backgroundColor: "black", height: "1000px", width: "100%", marginTop: "10%", color: "white" }}>
                <div style={{ display: "flex", padding: "8% 10%" }}>
                    <div style={{ marginRight: "6%" }}>
                        <h3>ABOUT PAUL SMITH</h3>
                        <p>OUR STORES</p>
                        <p>OUR HISTORY</p>
                        <p>CAREERS</p>
                        <p>SUSTAINABILITY</p>
                        <p>ACCESSIBILITY</p>
                    </div>

                    <div style={{ marginRight: "6%" }}>
                        <h3>HELP</h3>
                        <p>FAQS</p>
                        <p>TRACK ORDER</p>
                        <p>SHIPPING</p>
                        <p>RETUNS</p>
                        <p>PAYMENT METHODS</p>
                        <p>KLARNA</p>
                        <p>PRICE MATCH</p>
                        <p>SHOP SERVICE</p>
                    </div>

                    <div style={{ marginRight: "6%" }}>
                        <h3>CONTACT US</h3>
                        <p>CONTACT FORM</p>
                        <p>+44(O)115 968 5821</p>
                        <p>06:00-14:0(EST) MONDAY- <br />FRIDAY EXCEPT PUBLIC <br />HOLIDAYS IN THE USA.</p>
                    </div>
                </div>

                <div style={{ display: "flex", padding: " 0px 8%", justifyContent: "space-between" }}>
                    <div>
                        <p className='newletter'>Enter your email to subscribe to our newletter <FaArrowCircleRight /></p>
                    </div>

                    <div>
                        <p>X</p>
                        <p>FACEBOOK</p>
                        <p>INSTAGRAM</p>
                        <p>YOUTUBE</p>
                        <p>PINTEREST</p>
                        <p>LINKEDIN</p>
                    </div>
                </div>

                <div style={{ textAlign: "end", padding: "0px 8% 8% 0px", color: "gray", backgroundColor: "black" }}> {/* <div style={{ padding: "0px 0px 8% 0%", backgroundColor: "black" }}> */}
                    <p>Paul Smith. All right reserved</p>
                    <p>Terms & Conditions</p>
                    <p>Gift Card Terms & Conditions</p>
                    <p>Data & Private Policy</p>
                    <p>Cookie Policy</p>
                    <p>Modeen Slavery Statement</p>
                    <p>Cookie Perferences</p>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1712223082/STILL/M1R/M1R-905U-N02442-92/M1R-905U-N02442-92_20",
        review:"Dusty Pink 'Sketchbook' Print Cotton Shirt",
        price:"$395.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1719397914/STILL/M1R/M1R-123ZE-N02484-07/M1R-123ZE-N02484-07_10",
        review:"Slim-Fit Ecru Washed Poplin Shirt With Embroidery Detail",
        price:"$355.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1716460410/STILL/M2R/M2R-695U-N22102-49/M2R-695U-N22102-49_10",
        review:"Dark Navy 'Woodgrain' Lyocell-Cotton Shirt",
        price:"$175.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1716460410/STILL/M2R/M2R-695U-N22102-49/M2R-695U-N22102-49_10",
        review:"Sage Green Stripe Stand-Collar Shirt",
        price:"$375.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1716460410/STILL/M2R/M2R-695U-N22102-49/M2R-695U-N22102-49_10",
        review:"Slim-Fit Light Blue Liner Shirt",
        price:"$325.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1719397918/STILL/M1R/M1R-901U-N02518-41/M1R-901U-N02518-41_10",
        review:"Slim-Fit White 'Signature Stripe' Cotton Shirt",
        price:"$365.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1719397918/STILL/M1R/M1R-901U-N02518-41/M1R-901U-N02518-41_10",
        review:"Dark Green Garment Dyed Shirt",
        price:"$195.00"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1719397918/STILL/M1R/M1R-901U-N02518-41/M1R-901U-N02518-41_10",
        review:"Slim-Fit 'Signature Stripe' Cotton Shirt",
        price:"$365.00"
    },    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1719397918/STILL/M1R/M1R-901U-N02518-41/M1R-901U-N02518-41_10",
        review:"Blue 'Signature' Print Cotton Shirt",
        price:"$425.0"
    },
    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1712223069/STILL/M1R/M1R-905U-N02417-49/M1R-905U-N02417-49_10",
        review:"Navy Cotton Flannel Short Sleeve Shirt",
        price:"$355.00"
    },    {
        image:"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1719397918/STILL/M1R/M1R-901U-N02518-41/M1R-901U-N02518-41_10",
        review:"Blue 'Leaf Print' Lyocell Shirt",
        price:"$425.00"
    },
]

export default Home
