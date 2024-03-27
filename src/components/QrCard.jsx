import React from "react";
import QrCode from "qrcode.react";

function QrCard({ qrRef, url, bgColor, qrColor, customImg, noImg }) {
  let imgCustom = undefined;

  noImg
    ? (imgCustom = null)
    : customImg
    ? (imgCustom = customImg)
    : (imgCustom = "./logo.png");
  return (
    <div className="card">
      <div className="form-box">
        <div
          className="qr-box"
          ref={qrRef}
          style={{ backgroundColor: bgColor }}
        >
          <QrCode
            size={250}
            value={url ? url : "https://aileenpf-url.app"}
            bgColor={bgColor}
            fgColor={qrColor}
            level="H"
            includeMargin
            imageSettings={{
              src: imgCustom,
              height: 45,
              width: 45,
              excavate: true,
            }}
          />
        </div>
        <h3 className="qr-text">{url ? url : "Generate QR Code"}</h3>
      </div>
    </div>
  );
}

export default QrCard;
