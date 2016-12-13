/**
 * EffectManager
 * @Author Ace.c
 * @Create 2016-12-05 16:00
 */
class EffectManager extends BaseManager {

    private changeThreeView: ChangeThreeView;
    private changeThreeAnimation: ChangeThreeAnimation;
    private queView: QueView;
    private xiayuView: XiayuView;
    private guafengView: GuafengView;
    private gangshangkaihuaView: GangshangkaihuaView;
    private hujiaozhuanyiView: HujiaozhuanyiView;
    private yipaoduoxiangView: YipaoduoxiangView;
    private scoreView: ScoreView;

    public constructor() {
        super();
    }


    init() {
        super.init();

        this.changeThreeView = new ChangeThreeView();
        this.changeThreeAnimation = new ChangeThreeAnimation();
        this.queView = new QueView();
        this.xiayuView = new XiayuView();
        this.guafengView = new GuafengView();
        this.hujiaozhuanyiView = new HujiaozhuanyiView();
        this.gangshangkaihuaView = new GangshangkaihuaView();
        this.yipaoduoxiangView = new YipaoduoxiangView();
        this.scoreView = new ScoreView();

        this.gameManager.addEventListener(EffectEventType.CleanAll, this.onCleanAll, this);
        this.gameManager.addEventListener(EffectEventType.ChangeThree, this.onChangeThree, this);
        this.gameManager.addEventListener(EffectEventType.ChangeThreeComplete, this.onChangeThreeComplete, this);
        this.gameManager.addEventListener(EffectEventType.Que, this.onQue, this);
        this.gameManager.addEventListener(EffectEventType.CardRaise, this.onCardRaise, this);
        this.gameManager.addEventListener(EffectEventType.CardThrow, this.onCardThrow, this);
        this.gameManager.addEventListener(EffectEventType.CardThrowTips, this.onCardThrowTips, this);
        this.gameManager.addEventListener(EffectEventType.Xiayu, this.onRaining, this);
        this.gameManager.addEventListener(EffectEventType.Guafeng, this.onWindy, this);
        this.gameManager.addEventListener(EffectEventType.Hujiaozhuanyi, this.onHujiaozhuanyi, this);
        this.gameManager.addEventListener(EffectEventType.Gangshangkaihua, this.onGangshangkaihua, this);
        this.gameManager.addEventListener(EffectEventType.Yipaoduoxiang, this.onYipaoduoxiang, this);
        this.gameManager.addEventListener(EffectEventType.ScoreTips, this.onScoreTips, this);

    }

    private onScoreTips(scores: any) {
        this.scoreView.play(scores);
    }

    private onGangshangkaihua(dir: DirType) {
        this.gangshangkaihuaView.play(dir);
    }

    private onYipaoduoxiang(dirs: DirType[]) {
        this.yipaoduoxiangView.play(dirs);
    }

    private onHujiaozhuanyi(dirs: DirType[]) {
        this.hujiaozhuanyiView.play(dirs);
    }

    private onRaining(dir: DirType) {
        this.xiayuView.play(dir);
    }

    private onWindy(dir: DirType) {
        this.guafengView.play(dir);
    }

    private onCleanAll() {
        this.changeThreeView.hide();
        this.changeThreeAnimation.hide();

        this.queView.hide();

        GSController.i.gsView.updateState();
    }

    private onChangeThree() {
        GSController.i.gsView.updateState();

        this.changeThreeView.show();
        this.onCardRaise(CardRaiseMode.changeThree);
    }

    private onChangeThreeComplete(type: ChangeThreeType) {
        this.changeThreeAnimation.setType(type);
        this.changeThreeAnimation.show();
    }

    private onCardRaise(type: CardRaiseMode) {
        if (type != undefined) {
            CardRaiseEffect.play(type);
        }
        else {
            CardRaiseEffect.stop();
        }
    }

    private onQue() {
        if (game.isChangeThreeBoo == false && game.isQueBoo) {
            this.queView.show();
        }
    }

    private onCardThrow(arr: any[]) {
        if (arr && arr.length == 2) {
            ChupaiEffect.play(arr[0], arr[1]);
        }
        else {
            ChupaiEffect.stop(true);
        }
    }

    private onCardThrowTips(arr: any[]) {
        if (arr && arr.length == 2) {
            ChupaiTipsEffect.play(arr[1], (arr[0] == 1 || arr[0] == 3) ? 2 : 0);
        }
        else {
            ChupaiTipsEffect.stop();
        }
    }
}