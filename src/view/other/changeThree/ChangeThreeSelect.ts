/**
 * ChangeThreeSelect
 * @Author Ace.c
 * @Create 2016-12-01 11:28
 */
class ChangeThreeSelect extends BaseSprite {

    private btn_confirm: eui.Button;
    private lab_time: eui.BitmapLabel;

    private time: number;

    public constructor() {
        super();
        this.skinName = "ChangeThreeSelectSkin";
    }

    public childrenCreated() {
        super.childrenCreated();

        this.anchorOffsetX = this.width >> 1;
        this.anchorOffsetY = this.height >> 1;

        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
    }

    private timeHandler() {
        if (!this.initComplete)return;

        if (this.time > 0) {
            this.time--;
            this.lab_time.text = "" + this.time;
        }
    }

    private clickHandler(e: egret.TouchEvent) {
        switch (e.currentTarget) {
            case this.btn_confirm:
                if (game.changeThreeVo.cards.length < 3) {
                    return;
                }

                this.hide();
                console.log(game.changeThreeVo.cards);
                break;
        }
    }

    public show() {
        super.show();

        this.x = acekit.width >> 1;
        this.y = acekit.height - 220;
        acekit.addChild(this);

        this.time = GameConst.ChangeThreeTime;
        this.lab_time.text = "" + this.time;
        TimerManager.i.addEventListener(TimerManager.Second, this.timeHandler, this);
    }

    public hide() {
        super.hide();

        acekit.removeChild(this);

        TimerManager.i.delEventListener(TimerManager.Second, this.timeHandler, this);
    }
}