function(instance, context) {
    
    const image = document.createElement('img')
    image.style.display = 'block'
    image.style.maxWidth = '100%'
    image.crossOrigin = 'anonymous'
    instance.data.image = image
    instance.canvas.appendChild(image)
    instance.data.isInitialized = false

}