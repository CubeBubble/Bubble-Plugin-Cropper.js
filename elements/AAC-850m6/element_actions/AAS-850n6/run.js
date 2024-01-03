function(instance, properties, context) {


  if (!instance.data.isInitialized) {
    instance.data.image.src = properties.imageUrl;
    instance.data.cropper = new Cropper(instance.data.image, instance.data.options);
    instance.data.isInitialized = true;
  }

  if (!instance.data.source) {
    instance.data.source = properties.imageUrl;
  }

  if (instance.data.source !== properties.imageUrl) {
    instance.data.source = properties.imageUrl;
    instance.data.cropper.replace(instance.data.source);
  }


}