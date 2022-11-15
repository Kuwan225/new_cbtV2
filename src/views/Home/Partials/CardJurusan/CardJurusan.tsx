import { Row } from "antd";
import Card from "antd/lib/card/Card";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./Card.module.scss";

const CardJurusan = ({ item }: any) => {
  const route = useRouter();
  return (
    <Card
      className={Styles.container}
      onClick={() => {
        route.push(`tingkatan`), localStorage.setItem("jurusan", item.jurusan);
      }}
      style={{
        cursor: "pointer",
        minWidth: "700px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src="/image/rpl.png" alt="img" style={{ marginRight: "30px" }} />
      <span style={{ fontSize: "30px", fontWeight: 700 }}>{item.jurusan}</span>
    </Card>
  );
};

export default CardJurusan;
