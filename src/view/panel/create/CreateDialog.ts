class CreateDialog extends BasePanel {

    private btn_xueliu: mui.EButton;
    private btn_xuezhan: mui.EButton;

    private scroller: eui.Scroller;
    private viewGroup: eui.Group;

    private btn_selectAll: mui.EButton;
    private btn_start: mui.EButton;

    private xueliuView: CreateXueliuView;

    private selectAll: boolean;

    private ruleVo: GameRuleVo;

    public constructor() {
        super();

        this.skinName = "CreatePanelSkin";
    }

    createChildren() {
        super.createChildren();

        this.title.source = "create_btn";

        this.horizontalCenter = 0;
        this.verticalCenter = 0;

        this.btn_selectAll = new mui.EButton("create_btn_img");
        this.btn_selectAll.textImg.source = "create_xz1";
        this.btn_selectAll.x = 550;
        this.btn_selectAll.y = 278;
        this.btn_selectAll.visible = false;
        this.addChild(this.btn_selectAll);

        this.ruleVo = game.ruleVo;

        this.xueliuView = new CreateXueliuView();

        this.initPanel();

        this.btn_xueliu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        this.btn_xuezhan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);

        this.btn_selectAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
    }

    private clickHandler(e: egret.TouchEvent) {
        switch (e.currentTarget) {
            case this.btn_xueliu:
                this.ruleVo.law = GamePlayType.xueliuchenghe;
                break;
            case this.btn_xuezhan:
                this.ruleVo.law = GamePlayType.xuezhandaodi;
                break;
            case this.btn_selectAll:
                this.selectAll = !this.selectAll;
                break;
            case this.btn_start:
                this.startGame();
                break;
        }

        this.updateView();
    }

    private initPanel() {
        this.selectAll = false;
        this.btn_selectAll.textImg.source = "create_xz" + (this.selectAll ? 1 : 0);

        this.scroller.viewport.scrollV = 0;
        this.scroller.validateNow();

        this.updateView();
    }

    private updateView() {

        this.viewGroup.removeChildren();

        var arr: any[] = [this.btn_xueliu, this.btn_xuezhan];
        for (var i: number = 0; i < arr.length; i++) {
            arr[i].enabled = true;
        }

        switch (this.ruleVo.law) {
            case GamePlayType.xueliuchenghe:
                this.btn_xueliu.enabled = false;
                this.viewGroup.addChild(this.xueliuView);
                this.xueliuView.update();
                break;
            case GamePlayType.xuezhandaodi:
                this.btn_xuezhan.enabled = false;
                this.viewGroup.addChild(this.xueliuView);
                this.xueliuView.update();
                break;
            case GamePlayType.sanren_2:
                break;
            case GamePlayType.sanren_3:
                break;
            case GamePlayType.siren_2:
                break;
        }
    }

    private startGame(): void {
        GlobalData.getInstance().roomRound = this.ruleVo.ju;

        //创建房间
        SocketManager.getInstance().getGameConn().send(2, {
            "args": {
                "type": game.gameType,
                "round": this.ruleVo.ju,
                "rules": this.ruleVo.rules,
                "pass": "0"
            }
        });
    }
}