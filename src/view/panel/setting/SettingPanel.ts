class SettingPanel extends BasePanel {

    private slider_music: eui.HSlider;
    private btn_music: eui.CheckBox;
    private slider_sound: eui.HSlider;
    private btn_sound: eui.CheckBox;
    private btn_style: eui.CheckBox;
    private btn_color: eui.CheckBox;
    private lab_version: eui.Label;

    public constructor() {
        super();

        this.skinName = "SettingPanelSkin";
    }

    childrenCreated() {
        super.childrenCreated();

        this.bgView.setTitle("setting_txt");

        this.slider_music.addEventListener(egret.Event.CHANGE, this.setMusic, this);
        this.slider_sound.addEventListener(egret.Event.CHANGE, this.setSound, this);

        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        this.btn_style.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        this.btn_color.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
    }

    private clickHandler(e: egret.TouchEvent) {
        switch (e.currentTarget) {
            case this.btn_music:
                this.changeMusic();
                break;
            case this.btn_sound:
                this.changeSound();
                break;
            case this.btn_style:
                this.changeStyle();
                break;
            case this.btn_color:
                this.changeColor();
                break;
        }
    }

    private changeColor(): void {
        gameLocal.setData(gameLocal.color, this.btn_color.selected ? 0 : 1);

        game.paiColor = +gameLocal.getData(gameLocal.color);

        FashionTools.setGameStyle(game.paiColor);
    }

    private changeStyle(): void {
        gameLocal.setData(gameLocal.style, this.btn_style.selected ? 0 : 1);

        game.paiStyle = +gameLocal.getData(gameLocal.style);

        FashionTools.setViewType(game.paiStyle);
    }

    private changeMusic(): void {
        gameLocal.setData(gameLocal.music, this.btn_music.selected ? 0 : 1);
        this.btn_music.selected ? GameMusic.CloseAllSound() : GameMusic.PlaySound("music_scene");
    }

    private changeSound(): void {
        gameLocal.setData(gameLocal.sound, this.btn_sound.selected ? 0 : 1);
        this.btn_music.selected && GameSound.CloseAllSound();
    }

    private setMusic(): void {
        GameMusic.setSoundVolume(this.slider_music.value);
        gameLocal.setData(gameLocal.musicVolume, this.slider_music.value);
    }

    private setSound(): void {
        GameSound.setSoundVolume(this.slider_sound.value);
        gameLocal.setData(gameLocal.soundVolume, this.slider_sound.value);
    }

    public show(): void {
        super.show();

        this.btn_music.selected = +gameLocal.getData(gameLocal.music) == 1 ? false : true;
        this.btn_sound.selected = +gameLocal.getData(gameLocal.sound) == 1 ? false : true;

        this.btn_style.selected = +gameLocal.getData(gameLocal.style) == 1 ? false : true;
        this.btn_color.selected = +gameLocal.getData(gameLocal.color) == 1 ? false : true;

        this.slider_music.value = +gameLocal.getData(gameLocal.musicVolume);
        this.slider_sound.value = +gameLocal.getData(gameLocal.soundVolume);

        this.lab_version.text = "当前版本号：" + game.version + "    最新版本号：" + game.player.version;
    }
}