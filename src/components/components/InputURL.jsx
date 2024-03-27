import React from "react";

function InputURL({ url, setUrl, httpRgx }) {
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleClearUrl = () => {
    setUrl("");
  };

  const handleValidateUrl = () => {
    if (url && !httpRgx.test(url)) {
      setUrl("http://" + url);
    }
  };

  return (
    <div className="input-url">
      <span className="icon">
        <ion-icon name="qr-code"></ion-icon>
      </span>
      <input
        id="url"
        name="url"
        type="text"
        value={url}
        onChange={handleUrl}
        onBlur={handleValidateUrl}
        required
      />
      <label htmlFor="">Enter URL</label>

      {url && (
        <button className="clear-input-url" onClick={handleClearUrl}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      )}
    </div>
  );
}

export default InputURL;
