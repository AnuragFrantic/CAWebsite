// import React, { useEffect, useState } from "react";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../Api/BaseUrl';
import { useEffect, useState } from 'react';

const Practisearea = () => {
    const [selectedItem, setSelectedItem] = useState(null); // Default selected item
    const [data, setData] = useState([]);
    const { url } = useParams()
      // Fetch data from the API
      const handleGet = async () => {
        try {
            const response = await axios.get(`${BaseUrl}expertise`);
            const fetchedData = response.data.data;
            setData(fetchedData); // Set fetched data

            // Set default item to "Arbitration" by finding its _id
            const defaultItem = fetchedData.find(item => item.title === 'Arbitration');
            if (defaultItem) {
                setSelectedItem(defaultItem._id); // Set Arbitration as default
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handleGet();
    }, []);

    // Get the selected item data based on the selectedItem id or URL
    const selectedItemData = data.find(item => item.url === url) || data.find(item => item._id === selectedItem);

    return (
        <section className="service-area-4 pt-150 pb-150 practisearea px-3">
            <div className="container">
                <div className="service-topwrap-3 text-center">
                    <h2 className="subtitle roboto">
                        Our Expertise, Services, and <span className="d-block">Practice Areas.</span>
                    </h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-12">
                        <div className="w-100 leftcol p-5">
                            <ul>
                                {data.map(item => (
                                    <li
                                        key={item._id}
                                        className={`mb-3 p-2 roboto ${selectedItem === item._id ? 'active' : ''}`}
                                        onMouseOver={() => setSelectedItem(item._id)} // Update selected item on click
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        {selectedItemData && ( // Only render if the selected item data is available
                            <div
                                className="w-100 rightcol position-relative img-fluid"
                                style={{
                                    backgroundImage: `url(${BaseUrl}${selectedItemData.image.replace('\\', '/')})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="practisetext position-relative">
                                    <h2 className="practicetitle animate__animated animate__bounce roboto">
                                        {console.log(selectedItemData)}
                                        {selectedItemData.title}
                                    </h2>
                                    <p className="practiseareasubtitle roboto text-white" style={{ textAlign: 'justify' }}>
                                        {selectedItemData.short_description}
                                    </p>
                                   
                                  
                                    <Link to={selectedItemData.url == "arbitration" ? "/arbitration" : selectedItemData.url == "civil-and-commercial-law" ? "/civil" : selectedItemData.url == "consumer-protection-and-real-estate" ?"/consumer" : selectedItemData.url == "quasi-criminal-matters" ?"/criminal" : selectedItemData.url == "insolvency-and-bankruptcy-law" ?"/bankruptacy" : selectedItemData.url == "company-and-corporate-law" ?"/corporate" : selectedItemData.url == "matrimonial-and-succession" ?"/matrimonial" : ""}>
                                        <div className='practisetextcircle mt-2'>
                                            <ArrowRightOutlined />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Practisearea;