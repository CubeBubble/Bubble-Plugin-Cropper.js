function(instance, properties, context) {
  const uploadFile = async function (blob, fileName) {
    let formData = new FormData();
    formData.append("", blob, properties.name);
    const url = properties.websiteHomeUrl + "fileupload";

    var requestOptions = {
      method: "POST",
      body: formData,
    };

    const response = await fetch(url, requestOptions);
    const body = await response.text();
    const fileUrl = body.split('"')[1];
    instance.publishState("file", fileUrl);
    instance.triggerEvent("fileIsUploaded");
  };

  const canvas = instance.data.cropper.getCroppedCanvas();
  canvas.toBlob(
    (blob) => {
      uploadFile(blob, properties.name);
    },
    properties.format,
    properties.quality
  );
}