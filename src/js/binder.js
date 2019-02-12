const binder = function() {

};

/* Source is the DOM object which will be changed by the user */
binder.prototype.setSource = function(source, eventType) {
  this.sourceElement = document.querySelector(source);
  this.eventType = eventType;
};

/* Binded are the DOM objects which will change programmatically */
binder.prototype.setBinded = function(bindedItemArr) {
  this.bindedItemArr = bindedItemArr;
};

/* Bind sources to binded */
binder.prototype.Bind = function() {
  this.sourceElement.addEventListener(this.eventType, () => {
    if(this.bindedItemArr.length == 0) {
      console.log('Invalid number of binded items');
    } else {
      this.bindedItemArr.forEach((element) => {
        // Deal with classes
        if(element.includes('.') == true) {
          const bindedItems = document.querySelectorAll(element);
          bindedItems.forEach((classElement) => {
            classElement.innerHTML = this.sourceElement.value;
          });
        } else {
          // Deal with anything other than classes
          const bindedItem = document.querySelector(element);
          bindedItem.innerHTML = this.sourceElement.value;
        }
      });
    }
  });
};

module.exports = new binder();
