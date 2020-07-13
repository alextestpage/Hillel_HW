 function Gallery(containerEl, photos) {
     this.containerEl = containerEl;

     this.currentPhoto = -1;

     this.generateHtml(photos);
     this.showNextPhoto();
     setInterval(this.showNextPhoto.bind(this), 2000);

     console.log('gallery started', this.containerEl);
 }

 Gallery.prototype.generateHtml = function (photos) {
     const lis = photos.map(
         (photo, index) => `<li class="gallery-photo"><img src="${photo}?${index}" /></li>`
     );

     this.rootElement = document.createElement('ul');
     this.rootElement.insertAdjacentHTML(
         'beforeEnd',
         `${lis.join('')}`
     );
     this.containerEl.append(this.rootElement);
     this.rootElement.addEventListener('click', this.onrootElementClick.bind(this))

 };

 Gallery.prototype.onrootElementClick = function (e) {
     this.showNextPhoto();
 };

 Gallery.prototype.showNextPhoto = function () {
     if (this.rootElement.children[this.currentPhoto]) {
         this.rootElement.children[this.currentPhoto].classList.remove('visible');
     }
     this.currentPhoto++;

     if (this.currentPhoto === this.rootElement.children.length) {
         this.currentPhoto = 0;
     }

     this.rootElement.children[this.currentPhoto].classList.add('visible');
 };