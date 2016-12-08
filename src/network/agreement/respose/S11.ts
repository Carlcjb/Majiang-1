/**
 * 同步牌的信息
 */


/**
 * 同步牌的信息
 */
class S11 {
    public parseData(obj: any) {
        if (!obj) return;

        console.log("同步牌的信息", obj);

        var action = +obj.data.action;

        if (action > 0) {

            switch (action) {

                case 100:
                    //初始牌
                    GSDataProxy.i.S2C_OwnCardInfo(obj);
                    break;
                case 200:
                    //抓牌
                    GameDispatcher.ins.dispatchEvent(EventType.Trigger_Play_Tips);
                    GameDispatcher.ins.dispatchEvent(EventType.Trigger_Prompt, false);
                    GSDataProxy.i.S2C_OwnCatch(obj.data.pai[0], obj.data.dui_num, obj.data.hasOwnProperty("fen"));
                    break;
                case 300:
                    GSDataProxy.i.S2C_Bao(obj.data);
                    break;
                default:
                    //同步自己的功能牌
                    GSDataProxy.i.S2C_FuncResult(obj.data.action, obj.data.pai, obj.data.turn, obj.data.cur);
                    GameDispatcher.ins.dispatchEvent(EventType.Trigger_Play_Point);
                    GameDispatcher.ins.dispatchEvent(EventType.Trigger_Play_Tips);
                    break;
            }
        }
    }
}