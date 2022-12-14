import React from "react";
import { useRouter } from "next/router";
import { Routes } from "../../routes/Routes";
import {
  container,
  swiperSlide,
  swiper,
  info,
  krzywy,
  price,
  rightCorner,
  black,
  noneStyle,
} from "./ProductInfo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useProduct } from "../../hooks/useProduct";
export const ProductInfo = () => {
  const router = useRouter();
  const productId = Number(router.query["productId"]);
  const { data: product } = useProduct({ id: productId });
  return (
    <div>
      <a href={Routes.HOME} className={noneStyle}>
        {" "}
        <h1>Product app</h1>
      </a>
      <div className={container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={true}
          modules={[Pagination, Autoplay, Navigation]}
          className={swiper}
        >
          {product?.images?.map((img) => (
            <SwiperSlide key={img} className={swiperSlide}>
              <img src={img} alt="dupa" width={400} height={300}></img>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={info}>
          <h2>{product?.title} </h2>
          <p className={krzywy}>{product?.description}</p>
          <div>
            Brand: <a className={black}>{product?.brand}</a>
            <br />
            Category: <a className={black}>{product?.category}</a>
            <br />
            rating: <a className={black}>{product?.rating}</a>
            <div className={price}>{product?.price} USD</div>
            <br />
            <div className={rightCorner}>
              In stock: &nbsp; <div className={black}>{product?.stock}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
