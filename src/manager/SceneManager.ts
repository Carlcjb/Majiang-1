/**
 * 场景管理
 */
module SceneManager {
    export var dict = {};

    export function update(sceneName: string): any {
        if (this.dict[sceneName]) this.dict[sceneName].update();
    }

    export function open(sceneClass: any, sceneName: string) {
        LayerManager.gameLayer().sceneLayer.removeChildren();

        if (this.dict[sceneName] == null) {
            this.dict[sceneName] = new sceneClass();

            LayerManager.gameLayer().sceneLayer.addChild(this.dict[sceneName]);
        }
        else {
            if (!LayerManager.gameLayer().sceneLayer.contains(this.dict[sceneName])) {
                LayerManager.gameLayer().sceneLayer.addChild(this.dict[sceneName]);
            }
            else {
                this.dict[sceneName].update();
            }
        }
    }

    export function close(sceneName: string, destroy: boolean = false) {
        if (!this.dict[sceneName]) return;

        if (LayerManager.gameLayer().sceneLayer.contains(this.dict[sceneName])) {
            LayerManager.gameLayer().sceneLayer.removeChild(this.dict[sceneName]);
        }

        if (destroy) delete this.dict[sceneName];
    }

    export function find(sceneName: string): any {
        if (sceneName && this.dict[sceneName]) {
            return this.dict[sceneName];
        }

        return null;
    }
}