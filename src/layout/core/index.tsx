import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface TypeContext {
  dataJurusan: string;
  setDataJurusan: (value: string) => void;
}
export const PublicContext = React.createContext<TypeContext>({
  dataJurusan: "",
  setDataJurusan: (_value: string) => {},
});

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [dataJurusan, setDataJurusan] = useState<string>("");
  const [dataKelas, setDataKelas] = useState("");
  const [dataMapel, setDataMapel] = useState("");

  const [datas, setDatas] = useState([]);
  // console.log(datas);

  useEffect(() => {
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
      .then((res) => {
        setDatas(res.data.data);
      });
  }, []);

  return (
    <PublicContext.Provider
      value={{
        dataJurusan,
        setDataJurusan,
      }}
    >
      <Component {...pageProps} />
    </PublicContext.Provider>
  );
};

export default LayoutDefault;
