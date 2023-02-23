import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Form className="d-flex">
      {device.brands.map((brand) => {
        return (
          <Card
            style={{ cursor: "pointer" }}
            border={brand.id === device.selectedBrand.id ? "danger" : "light"}
            onClick={() => device.setSelectedBrand(brand)}
            key={brand.id}
            className="p-3"
          >
            {brand.name}
          </Card>
        );
      })}
    </Form>
  );
});

export default BrandBar;
