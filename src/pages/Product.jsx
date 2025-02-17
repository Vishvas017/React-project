import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Product = () => {

    const [data, setdata] = useState([]);

    const getDataFromServer = () => {
        axios
            .get("http://localhost:3000/product")
            .then((res) => {
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, []);


    return (
        <div>
            <div>
                <p>Home / You're browsing Mens Sale T-Shirt & Polo Shirts, for Sale, in Men's Sale, in Men's Sale Clothing.</p>
                <br />
                <h1 style={{ fontSize: "42px", fontFamily: "monospace" }}>Sale: Mens T-Shirts & <br /> Polo Shirts</h1>
                <div>
                    <p>27 products</p>
                </div>
                <p>Shop Pual Smith's sale T-shirt and polo shirts. Here you'll find printed, plain and striped men's
                    <br />T-shirts & polo shirts in a variety of materials including classic cotton-jersey.
                </p>
                <hr style={{ border: "1.5px solid black" }} />

                <p style={{ fontSize: "20px" }}>Sort By: <b>Recommended</b></p>
            </div>

            <div>
                {data.map((el) => {
                    <div key={el.id}>
                        <p>{el.id}</p>
                        <img src={el.urls} alt="" />
                        <h3>{el.title}</h3>
                        <h3>{el.price}</h3>
                        <h3>{el.discount_percentage}</h3>
                    </div>
                })}
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

export default Product
