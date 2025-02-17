import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Description = () => {
    return (
        <div style={{ marginTop: "5%" }}>
            {/* description */}
            <div style={{ display: "flex", justifyContent: "" }}>
                <div>
                    <img src="https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,w_706/v1707465656/MODEL/ECOM/M1A/M1A-756-MU981-48/M1A-756-MU981-48_3"
                        alt="" height={900} />
                </div>

                <div>
                    <div style={{ padding: "0px 0px 0px 5%" }}>
                        <div style={{ textAlign: "center" }}>
                            <h1>Navy Cotton-Modal Stripe Lounge T-Shirt</h1>
                            <p style={{ fontSize: "25px" }}>Navy</p>
                        </div>

                        <div style={{ display: "flex", fontSize: "25px" }}>
                            <h5>50% off</h5>
                            <h5 style={{ paddingLeft: '3%', }}>$75.00</h5>
                        </div>

                        <hr />

                        <div>
                            <p>Made from a cotton and modal-blend jersey, this navy crow <br />neck T-shirt
                                features a tonal stripe pattern with  centerl...</p>

                            <a href="" className='des'>Read more</a>
                        </div>

                        <div style={{paddingTop:"5%",display:"flex",justifyContent:"space-around"}}>
                            <p><BsBookmark />&nbsp;&nbsp;&nbsp;&nbsp;     Add Wishlist</p>
                            <p><IoSearch />&nbsp;&nbsp;&nbsp;&nbsp;    Find in Store</p>
                        </div>

                        <div>
                            <p>Size</p>
                            <p>Add to Bag</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* FOOTER */}
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
                    <p>Pual Smith. All right reserved</p>
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

export default Description
