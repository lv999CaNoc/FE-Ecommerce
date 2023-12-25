import { LIST_TYPE } from "@app/const/common.const";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import AllProduct from "./components/AllProduct";
export const ProductList = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Tất cả`,
      children: <AllProduct type={LIST_TYPE.ALL} />,
    },
    {
      key: "2",
      label: `Đang hoạt động`,
      children: <AllProduct type={LIST_TYPE.ACTIVE} />,
    },
    {
      key: "3",
      label: `Hết hàng`,
      children: <AllProduct type={LIST_TYPE.OUT_OF_STOCK} />,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      className="portal-list-product"
      style={{ padding: 20, height: 672, backgroundColor: "white" }}
      items={items}
    />
  );
};
