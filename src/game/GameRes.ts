/**
 * Created by Administrator on 2016/10/29.
 */
class GameRes{

    static uiSheet:SpriteSheet;

    static cardSheet:SpriteSheet;

    static getUI(name:string){

        GameRes.uiSheet || (GameRes.uiSheet = RES.getRes("gameui_json"));

        return GameRes.uiSheet.getTexture(name) ;

    }

    static getCard(name:string){

        GameRes.cardSheet || (GameRes.cardSheet = RES.getRes("card"));

        return GameRes.cardSheet.getTexture(name) ;

    }

    static createCenterButton(ancX:number,ancY:number,x:number,y:number,res:string,text:string = ""){

        var con:egret.DisplayObjectContainer = new egret.DisplayObjectContainer;
        con.anchorOffsetX = ancX;
        con.anchorOffsetY= ancY;
        var button:mui.EButton = new mui.EButton(res,text);
        button.x = x;
        button.y = y;
        con.addChild(button);
        return con;
    }

}