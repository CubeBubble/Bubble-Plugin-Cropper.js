function(instance, properties, context) {
    
  instance.data.options = {
      aspectRatio: properties.aspectRatio ? properties.aspectRatio : null,
      viewMode: properties.viewMode,
      dragMode: properties.dragMode,
      movable: properties.movable,
      zoomable: properties.zoomable,
      background: properties.background,
    }
    
}