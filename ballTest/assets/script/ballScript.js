// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 3,
    maxX: 0,
    maxY: 0
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    // this.node.on('touchstart', this.click, this)
    // this.node.on('touchmove', this.moved, this)
    // this.init()

  },
  start () {

  },
  update (dt) {

  },
  init () {
    maxX = this.rnd(-480, 480)
    maxY = this.rnd(-320, 320)
    cc.log('init-X:' + maxX + '|Y:' + maxY)
    this.moved()
  },
  moved () {
    cc.tween(this.node)
      .to(0.5, { position: cc.v2(maxX, maxY) })
      .call(() => {
        cc.log('缓动执行完毕')
        this.init()
      })
      .start()

  },
  click () {

  },
  rnd (n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  }
});
