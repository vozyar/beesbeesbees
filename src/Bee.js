var Bee = function() {

  Grub.call(this);

  this.age = 5;
  this.job = 'Keep on growing';
  this.color = 'yellow';
  this.job = 'keep on growing'
  };

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;