import { PlusOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@app/hooks/redux/useAppDispatch";
import {
  addNameShop,
  getAddress,
  getNameShop,
  getUser,
} from "@app/redux/users/user-slice";
import {
  Button,
  Col,
  Form,
  Input,
  Row
} from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddAddress from "../add-address";

const SettingInfoShop = ({ onSave }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const address = useSelector(getAddress);
  const name_shop = useSelector(getNameShop);
  const userInfo = useSelector(getUser);
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      email_shop: userInfo.email,
    });
  }, [userInfo]);

  useEffect(() => {
    if (address.phone) {
      form.setFieldsValue({
        email_shop: userInfo.email,
        address_shop: "1",
      });
    }
  }, [address]);

  useEffect(() => {
    if (address.phone) {
      form.setFieldsValue({
        email_shop: userInfo.email,
        address_shop: "1",
        name_shop: name_shop,
      });
    }
  }, [name_shop]);
  const onFinish = (values: any) => {
    dispatch(addNameShop(values.name_shop));
    const data = {
      name: values.name_shop,
      id_user: userInfo.id,
      address: address,
    };
    onSave(data);
  };
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col span={24}>
          <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
            <div className="d-flex mt-4 justify-content-center">
              <Col span={12}>
                <Form.Item
                  label="Tên shop"
                  name="name_shop"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên shop" },
                  ]}
                >
                  <Input placeholder="Tên shop" />
                </Form.Item>

                <Form.Item
                  label="Địa chỉ lấy hàng"
                  name="address_shop"
                  className="address_shop"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập địa chỉ lấy hàng",
                    },
                  ]}
                >
                  {address?.phone ? (
                    <div className="text-start">
                      <div
                        style={{
                          borderLeft: "4px solid #ee4d2d",
                        }}
                        className="ptb-10 flex justify-content-between cursor-pointer mb-5"
                      >
                        <div className="pl-20 pt-10">
                          <p className="mb-0">
                            {address.name_receiver}{" "}
                            <span>{`(+84) ${address.phone}`}</span>
                          </p>
                          <p
                            className="fontsz-14 over-flow"
                            style={{ color: "#929292" }}
                          >
                            {address.address}
                          </p>
                        </div>
                      </div>
                      <Button
                        className="mb-0"
                        style={{ cursor: "pointer", color: "#1890FF" }}
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Chỉnh sửa
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      <div style={{ alignItems: "center", color: "#1890FF" }}>
                        <PlusOutlined className="fontsz-13 mr-5" /> Thêm
                      </div>
                    </Button>
                  )}
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email_shop"
                  rules={[{ required: true, message: "Vui lòng nhập email" }]}
                >
                  <Input placeholder="Email" disabled />
                </Form.Item>
              </Col>
            </div>
            <Col span={18}>
              <Form.Item className="d-flex justify-content-end align-items-end">
                <Button type="primary" htmlType="submit">
                  Tiếp tục
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Col>
        <AddAddress open={open} setOpen={setOpen} />
      </Row>
    </>
  );
};

export default SettingInfoShop;
