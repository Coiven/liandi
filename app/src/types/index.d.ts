interface Window {
    liandi: {
        liandi: ILiandi
    };
}

declare interface IFile {
    path: string;
    name: string;
    isdir: boolean;
}

declare interface IBlock {
    url: string;
    path: string;
    id: string;
    type?: string;
    content: string;
}

declare interface IBacklinks {
    url: string;
    path: string;
    blocks: IBlock[];
}

declare interface IDir {
    auth: string;
    password: string;
    path: string;
    url: string;
    user: string;
}

declare interface IEditor {
    inputElement: HTMLInputElement;
    editorElement: HTMLElement;
    saved: boolean;
    active: boolean;
    vditor?: any;
}

declare interface IMenuData {
    target?: HTMLElement
    path?: string
    dir?: IDir
}

declare interface IMD {
    autoSpace: boolean;
    chinesePunct: boolean;
    fixTermTypo: boolean;
    inlineMathAllowDigitAfterOpenMarker: boolean;
    mathEngine: 'KaTeX' | 'MathJax';
    hideToolbar: boolean;
    toc: boolean;
    footnotes: boolean;
    outline: boolean;
    paragraphBeginningSpace: boolean;
}

declare interface IImage {
    autoFetch: boolean;
}

declare interface ILiandi {
    config?: {
        lang: keyof II18n
        theme: 'light' | 'dark',
        markdown: IMD,
        image: IImage,
    };
    componentCSS: string;
    ws?: {
        webSocket: WebSocket,
        send: (cmd: string, param: any, process?: boolean) => void
    };
    navigation?: {
        element: HTMLElement
        onLs: (liandi: ILiandi, data: { files: IFile[], url: string, path: string }) => void
        onMount: (liandi: ILiandi, data: { dir: IDir }) => void
        onRename: (liandi: ILiandi, data: { newPath: string, oldPath: string, newName: string }) => void
        show: () => void;
        hide: () => void;
    };
    backlinks?: {
        element: HTMLElement
        onBacklinks: (backlinks: IBacklinks[]) => void
    };
    editors?: {
        focus: () => void;
        save: (liandi: ILiandi) => void;
        close: (liandi: ILiandi) => void;
        reloadEditor: (liandi: ILiandi) => void;
        open: (liandi: ILiandi, editorData?: { content: string, name: string }) => void;
        showSearchBlock: (liandi: ILiandi, data: { k: string, blocks: IBlock[] }) => void;
    };
    menus?: {
        itemData: IMenuData
    };
    current?: {
        dir?: IDir
        path?: string
    };
    find?: {
        open: (key?: string, index?: number) => void
    };
}

interface II18n {
    en_US: IObject;
    zh_CN: IObject;
    ja_JP?: IObject;
    ko_KR?: IObject;
}
