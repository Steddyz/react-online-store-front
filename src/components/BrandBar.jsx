import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          className="p-2 mt-4 m-1"
          style={{ cursor: "pointer", width: "100px" }}
          key={brand.id}
          border={brand.id === device.selectedBrand.id ? "black" : "light"}
          onClick={() => device.getSelectedBrand(brand)}
        >
          {brand.brand}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
