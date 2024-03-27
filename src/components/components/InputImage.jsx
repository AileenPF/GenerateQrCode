import React from "react";

function InputImage({ noImg, setNoImg, setCustomImg }) {
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setCustomImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="input-image-box">
      <label htmlFor="file">
        <div className="box-image">
          <div className="icon">
            <ion-icon name="document-outline"></ion-icon>
          </div>
          <div className="file-upload-text">
            <span>Click to upload image</span>
          </div>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImage}
            disabled={noImg}
          />
        </div>
      </label>
      <div>
        <input
          id="noImg"
          name="noImg"
          type="checkbox"
          value={noImg}
          checked={noImg}
          onClick={() => setNoImg(!noImg)}
          className="checkbox"
        />
        <label htmlFor="noImg">Without image</label>
      </div>
    </div>
  );
}

export default InputImage;
