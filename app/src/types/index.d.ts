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

declare interface ILiandi {
    ws?: {
        webSocket: WebSocket
    };
    navigation?: {
        element: HTMLElement
        listElement: HTMLElement
        onMount: (liandi: ILiandi, url: string) => void
    };
    files?: {
        listElement: HTMLElement
        element: HTMLElement
        onLs: (liandi: ILiandi, data: { files: IFile[], url: string }) => void
    };
    editors?: {
        url?: string
        path?: string
        remove: (liandi: ILiandi) => void
        onGet: (liandi: ILiandi, file: {name: string, content: string}) => void
    };
}

interface IEvent extends Event {
    target: HTMLElement & EventTarget;
}
