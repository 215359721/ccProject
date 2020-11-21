// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 0.1,
    maxX: 0,
    maxY: 0,
    ballNode: null,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {

    this.node.on('click', this.buttonClick, this)
  },

  start () {
    ballNode = cc.find('Canvas/ball')
  },
  buttonClick () {
    this.init()
  },

  // update (dt) {
  // },
  init () {
    maxX = this.rnd(-480, 480)
    maxY = this.rnd(-320, 320)
    cc.log('init-X:' + maxX + '|Y:' + maxY)
    this.moved()
  },
  moved () {
    const that = this
    cc.tween(ballNode)
      .to(1, { position: cc.v2(maxX, maxY) })
      .call(() => {
        this.init()
      })
      .start()

  },
  reset () {
    cc.log('reset')
    ballNode.x = 0
    ballNode.y = 0
  },
  rnd (n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  }
});
