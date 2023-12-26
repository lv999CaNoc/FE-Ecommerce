import { getProductAll } from "@app/api/product/get-list-all-product";
import { CrmCMSLayout } from "@app/common/layout";
import { FORMAT_PRICE } from "@app/const/format-price";
import { useSubscription } from "@app/hooks/subscription";
import { Carousel } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const banners = [
  "https://cf.shopee.vn/file/vn-50009109-7ab4d6c4c0ff1557588e724869a78360_xhdpi",
  "https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-35b4ee492dba3f4948166ef3600308bc_xhdpi",
  "https://cf.shopee.vn/file/vn-50009109-4f800023b50d50d93ad5ae388b1b577b_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-e62d77139d11674a311037827147407c_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-5c9839761fcd8d2253f4c711ea1e1bee_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-a5f0c8ed191b89532e5941bc0f54da45_xxhdpi"
]

export const Index = () => {
  const subscription = useSubscription();
  const router = useRouter();
  const [listProduct, setListProduct] = useState<any>([]);
  useEffect(() => {
    const getAllProduct = getProductAll().subscribe(
      (res) => {
        setListProduct(res.data);
      },
      (err) => {}
    );
    subscription.add(getAllProduct);
  }, []);

  const renderedBanners = banners.slice(2).map((banner, index) => (
    <div key={index} style={{ width: 900 }}>
      <img
        src={banner}
        alt={`Banner ${index}`}
        width={900}
        height={235}
      />
    </div>
  ));

  return (
    <div>
      <div
        className="d-flex pl-110 ptb-20 mb-30"
        style={{ background: "white" }}
      >
        <div style={{ width: 900 }}>
          <Carousel autoplay>{renderedBanners}</Carousel>
        </div>
        <div className="ml-10">
          <img className="mb-5" src={banners[0]} height={115} />
          <img src={banners[1]} height={115} />
        </div>
      </div>

      <div className="mlr-110">
        <div
          className="ph-h-60"
          style={{
            backgroundColor: "white",
            borderBottom: "4px solid #ee4d2d",
          }}
        >
          <p className="middle pt-20" style={{ color: "#ee4d2d" }}>
            TẤT CẢ SẢN PHẨM
          </p>
        </div>
        <div className="d-flex mlr-45" style={{ flexWrap: "wrap" }}>
          {listProduct.map((product, index) => {
            return (
              <div
                className="ph-h-282 ph-w-190 mlr-5 pointer product-home mt-20"
                style={{ backgroundColor: "white" }}
                key={index}
                onClick={() => {
                  router.push(`/product/${product.product.id}`);
                }}
              >
                <div
                  className="display-product-home"
                  style={{
                    backgroundImage: `url("${product.images[0].urls[0]}")`,
                  }}
                ></div>
                <p className="p-10 over-flow2">{product.product.title}</p>
                <div
                  className="d-flex plr-10 justify-content-between"
                  style={{ color: "#ee4d2d" }}
                >
                  <div className="d-flex">
                    <span>₫</span>
                    <p>{FORMAT_PRICE(`${product.product.price}`)}</p>
                  </div>
                  <p className="fontsz-12" style={{ color: "rgba(0,0,0,.54)" }}>
                    Đã bán {product.product.sold}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Index.layout = CrmCMSLayout.HEADER_CUSTOMER;
