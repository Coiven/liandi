import {remote} from "electron";
import {i18n} from "../i18n";
import {Constants} from "../constants";

export const initNavigationMenu = (liandi: ILiandi) => {
    const menu = new remote.Menu()
    menu.append(new remote.MenuItem({
        label: i18n[Constants.LANG].remove,
        click: () => {
            const itemData = liandi.menus.itemData
            liandi.ws.webSocket.send(JSON.stringify({
                cmd: 'unmount',
                param: {
                    url:itemData.url
                }
            }));
            liandi.menus.itemData.target.remove();
            const filesFileItemElement = liandi.files.listElement.firstElementChild;
            if (filesFileItemElement && filesFileItemElement.tagName === 'FILE-ITEM'
                && filesFileItemElement.getAttribute('url') === itemData.url) {
                liandi.files.listElement.innerHTML = '';
                liandi.files.element.firstElementChild.innerHTML = '';
                liandi.editors.remove(liandi);
            }
        }
    }));
    return menu
}