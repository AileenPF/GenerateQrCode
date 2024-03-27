import { useRef, useState } from "react";
import FormQrCustom from "./components/FormQrCustom";
import QrCard from "./components/QrCard";
import Theme from "./components/Theme";

function App() {
  const qrRef = useRef();

  const [url, setUrl] = useState(""),
    [qrColor, setQrColor] = useState("#ffffff"),
    [qrBgColor, setQrBgColor] = useState("#494949"),
    [customImg, setCustomImg] = useState(""),
    [noImg, setNoImg] = useState(false);

  const handleQrReset = () => {
    setUrl("");
    setQrColor("#ffffff");
    setQrBgColor("#494949");
    setCustomImg("");
    setNoImg(false);
  };

  return (
    <>
      <Theme />
      <div className="container">
        <FormQrCustom
          qrRef={qrRef}
          url={url}
          qrColor={qrColor}
          qrBgColor={qrBgColor}
          noImg={noImg}
          setUrl={setUrl}
          setQrColor={setQrColor}
          setQrBgColor={setQrBgColor}
          setCustomImg={setCustomImg}
          setNoImg={setNoImg}
          handleQrReset={handleQrReset}
        />

        <QrCard
          qrRef={qrRef}
          url={url}
          qrColor={qrColor}
          bgColor={qrBgColor}
          customImg={customImg}
          noImg={noImg}
        />
      </div>
    </>
  );
}

export default App;
