/**
 * 游戏结束
 */
class S13 {
    public parseData(obj: any) {
        if (!obj) return;

        console.log("game over", obj);

        GSController.i.jiesuanData = obj.data;

        var dialog: DissolutionPanel = StackManager.findDialog(DissolutionPanel, "DissolutionPanel");

        if (dialog && LayerManager.gameLayer().panelLayer.contains(dialog)) {
            GSController.i.closeResultView();
            GSController.i.closeGSView();
            GSController.i.showTitleView(GSController.i.jiesuanData);
            game.dissolution = null;
        }
    }
}