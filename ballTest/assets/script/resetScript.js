// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    ball: null,
    startBtn: null
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.node.on('click', this.reset, this)
  },

  start () {
    this.ball = cc.find('Canvas/ball')
    this.startBtn = cc.find('Canvas/start')
  },
  reset () {
    cc.log('重置')
    const script = this.startBtn.getComponent('startScript')
    cc.log('script:', script)
    script.reset()
  }
  // update (dt) {},
});
