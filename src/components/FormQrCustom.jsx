import { useState, useEffect } from "react";
import InputURL from "./components/InputURL";
import InputPicker from "./components/InputPicker";
import InputImage from "./components/InputImage";

function FormQrCustom({
  qrRef,
  url,
  qrColor,
  qrBgColor,
  noImg,
  setUrl,
  setQrColor,
  setQrBgColor,
  setCustomImg,
  setNoImg,
  handleQrReset,
}) {
  const httpRgx = /^https?:\/\//;

  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (downloaded) {
      const msg = setTimeout(() => setDownloaded(false), 3500);
      return () => clearTimeout(msg);
    }
  }, [downloaded]);

  const handleQrCustom = (color) => setQrColor(color.hex),
    handleQrBgCustom = (color) => setQrBgColor(color.hex);

  const downloadQrCode = (e) => {
    e.preventDefault();

    const qrCanvas = qrRef.current.querySelector("canvas"),
      qrImage = qrCanvas.toDataURL("image/png"),
      qrAnchor = document.createElement("a"),
      fileName = url.replace(httpRgx, "").trim();
    qrAnchor.href = qrImage;
    qrAnchor.download = fileName + "-qr-code.png";
    document.body.appendChild(qrAnchor);
    qrAnchor.click();
    document.body.removeChild(qrAnchor);

    handleQrReset();
    setDownloaded(true);
  };

  return (
    <div className="wrapper">
      <div className="form-box">
        <form onSubmit={downloadQrCode}>
          <div className="form-box"></div>
          <div className="title">Generate QR Code</div>
          <InputURL url={url} setUrl={setUrl} httpRgx={httpRgx} />
          <InputPicker
            label={"Qr color"}
            id={"qrColor"}
            customColor={qrColor}
            handleQrCustom={handleQrCustom}
          />
          <InputPicker
            label={"background"}
            id={"qrBgColor"}
            customColor={qrBgColor}
            handleQrCustom={handleQrBgCustom}
          />
          <InputImage
            noImg={noImg}
            setNoImg={setNoImg}
            setCustomImg={setCustomImg}
          />
          <button type="submit" className="button">
            <span>Download QR Code</span>
          </button>
          {downloaded && (
            <div className="success-msg">
              <div className="message">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <p>Qr Code downloaded.</p>
              </div>
              <span className="close" onClick={() => setDownloaded(false)}>
                <ion-icon name="close-outline"></ion-icon>
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormQrCustom;
