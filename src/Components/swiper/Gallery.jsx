import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./styles.css"

import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import axios from "axios";
import { url } from "../../service/url";

function Gallery({ position, id }) {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([])
  const getOneProducts = async () => {
    try {
      const { data } = await axios.get(
        `${url}/b_sayt/api/product_deteile_views/${id}/`
      );
      setProducts(data);
      const arr = [];
      data[0]?.product?.map((c) => {
        let ar = { original:url+ c.img, thumbnail: url+c.img };
        arr.push(ar);
      });
      setImages(arr)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(images);
  useEffect(() => {
    getOneProducts();
  }, [id]);


  return (
    <div className="h-[400px] w-[90%] object-cover">
      <ImageGallery
        items={images}
        thumbnailPosition={position}
        showNav={true}
        showFullscreenButton={true}
        autoPlay={false}
        showBullets={true}
        additionalClass="w-full object-cover Islide"
      />
    </div>
  );
}

export default Gallery
