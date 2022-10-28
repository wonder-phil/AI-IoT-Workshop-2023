
AFRAME.registerComponent('simple-comp', {
  schema: {},
  init: function () {},
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

AFRAME.registerComponent('other-comp', {
  schema: {
    color: {default: '#FFF'},
    size: {type: 'int', default: 5},
	message: {type: 'string',default: "Good day!" }
  },
  init: function () {
    console.log(this.data.message);
  },
  multiple: true
});