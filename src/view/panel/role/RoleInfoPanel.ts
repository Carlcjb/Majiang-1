class RoleInfoPanel extends BasePanel {

    //玩家头像
    private head: HeadIconView;
    private lab_name: eui.Label;
    private lab_rate: eui.Label;
    private lab_id: eui.Label;
    private lab_ip: eui.Label;

    public constructor() {
        super();

        this.skinName = "RoleInfoPanelSkin";
    }

    childrenCreated() {
        super.childrenCreated();

        this.bgView.setType(BgViewType.normal);
    }

    public refreshRole(player: any = null): void {
        if (!player) player = GlobalData.getInstance().player;

        this.lab_name.text = "" + player.nick;
        this.lab_rate.text = "游戏次数：" + player.game_times + "  掉线率：" + player.drop_rate + "%";
        this.lab_id.text = "I D：" + player.uid;
        this.lab_ip.text = "I P：" + player.ip;

        // RES.getResByUrl(player.pic, function (t: egret.Texture) {
        //     if (t) {
        //         this.head.setHeadImg(t);
        //     }
        // }, this, RES.ResourceItem.TYPE_IMAGE);
    }
}