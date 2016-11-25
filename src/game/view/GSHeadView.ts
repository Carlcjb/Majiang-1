/**
 * Created by Administrator on 2016/10/29.
 */
//头像显示
class GSHeadView extends egret.Sprite{

    //dirName:string;

    //dir 2:下家 3:对家 4:上家

    constructor(dir:number){

        super();

        this.initView();
    }

    /**
     * 姓名
     */
    nameText:egret.TextField;

    /**
     * ID
     */
    idText:egret.TextField;

    /**
     * 分数
     */
    numText:egret.TextField;

    /**
     * 头像
     */
    headIcon:GSHeadIcon;


    //img:eui.Image;

    initView(){

        this.headIcon = new GSHeadIcon;

        //this.dirBG = new egret.Bitmap(GameRes.getUI("game_head_dirBG"));

        this.nameText = new egret.TextField;

        this.idText = new egret.TextField;

        this.numText = new egret.TextField();
        this.numText.textColor = 0xfffd45;

        this.nameText.size = 20;
        this.idText.size = 20;
        this.numText.size = 24;
        this.nameText.bold = true;
        this.idText.bold = true;
        this.numText.bold = true;

        this.addChild(this.headIcon);

        this.addChild(this.nameText);
        this.addChild(this.idText);

        this.addChild(this.numText);

        this.nameText.width = 150;
        this.nameText.anchorOffsetX = 150 >> 1;
        this.nameText.textAlign = egret.HorizontalAlign.CENTER;

        this.idText.width = 80;
        this.idText.anchorOffsetX = 80 >> 1;
        this.idText.textAlign = egret.HorizontalAlign.CENTER;

        this.numText.width = 80;
        this.numText.anchorOffsetX = 80 >> 1;
        this.numText.textAlign = egret.HorizontalAlign.CENTER;

        this.waitView();
    }
    //设置庄
    visibleZhuang(bool:boolean){

        this.headIcon.visibleZhuang(bool);

    }
    //设置房主
    visibleRoomOwn(bool:boolean){

        this.headIcon.visibleRoomOwn(bool);

    }

    nullPlayer(){

        this.nameText.text = this.idText.text = "";

        this.headIcon.nullIcon();

    }

    player:RoomPlayer;

    //等待的显示
    waitView(){

        this.nameText.x = 0;
        this.nameText.y = 45;

        this.idText.x = 0;
        this.idText.y = 68;

        this.numText.x = 0;
        this.numText.y = 45;
    }


    reset(){

        this.headIcon.reset();

    }

}