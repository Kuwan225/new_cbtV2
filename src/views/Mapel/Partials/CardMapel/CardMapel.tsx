import Card from "antd/lib/card/Card";
import { useRouter } from "next/router";
import React from "react";

const CardMapel = ({ item }: any) => {
  const route = useRouter();

  return (
    <Card
      onClick={() => route.push(`mapel/${item.mapel.namaMapel}`)}
      style={{ cursor: "pointer" }}
    >
      {item.mapel.namaMapel}
    </Card>
  );
};

export default CardMapel;
