import { IIcons } from "./interfaces/icons";
import { INotification } from "./interfaces/notification";
import { IOptions } from "./interfaces/options";

export type Position = ['top' | 'bottom' | 'middle', 'right' | 'left' | 'center'];
export type Animate = 'fade' | 'fromTop' | 'fromRight' | 'fromBottom' | 'fromLeft' | 'rotate' | 'scale';

export const DEFAULT_ICONS: IIcons = {
    success: `
        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny44NjcgNDc3Ljg2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3Ljg2NyA0NzcuODY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIzOC45MzMsMEMxMDYuOTc0LDAsMCwxMDYuOTc0LDAsMjM4LjkzM3MxMDYuOTc0LDIzOC45MzMsMjM4LjkzMywyMzguOTMzczIzOC45MzMtMTA2Ljk3NCwyMzguOTMzLTIzOC45MzMgICAgQzQ3Ny43MjYsMTA3LjAzMywzNzAuODM0LDAuMTQxLDIzOC45MzMsMHogTTIzOC45MzMsNDQzLjczM2MtMTEzLjEwOCwwLTIwNC44LTkxLjY5Mi0yMDQuOC0yMDQuOHM5MS42OTItMjA0LjgsMjA0LjgtMjA0LjggICAgczIwNC44LDkxLjY5MiwyMDQuOCwyMDQuOEM0NDMuNjExLDM1MS45OTEsMzUxLjk5MSw0NDMuNjExLDIzOC45MzMsNDQzLjczM3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzAuMDQ2LDE0MS41MzRjLTYuNjE0LTYuMzg4LTE3LjA5OS02LjM4OC0yMy43MTIsMHYwTDE4Ny43MzMsMzAwLjEzNGwtNTYuMjAxLTU2LjIwMSAgICBjLTYuNTQ4LTYuNzgtMTcuMzUzLTYuOTY3LTI0LjEzMi0wLjQxOWMtNi43OCw2LjU0OC02Ljk2NywxNy4zNTMtMC40MTksMjQuMTMyYzAuMTM3LDAuMTQyLDAuMjc3LDAuMjgyLDAuNDE5LDAuNDE5ICAgIGw2OC4yNjcsNjguMjY3YzYuNjY0LDYuNjYzLDE3LjQ2OCw2LjY2MywyNC4xMzIsMGwxNzAuNjY3LTE3MC42NjdDMzc3LjAxNCwxNTguODg2LDM3Ni44MjYsMTQ4LjA4MiwzNzAuMDQ2LDE0MS41MzR6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
      `,
    error: `
        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KICA8Zz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNjQuNSwxMjIuNmMzMiwwLDU4LjEtMjYsNTguMS01OC4xUzk2LjUsNi40LDY0LjUsNi40UzYuNCwzMi41LDYuNCw2NC41UzMyLjUsMTIyLjYsNjQuNSwxMjIuNnogTTY0LjUsMTQuNiAgICBjMjcuNSwwLDQ5LjksMjIuNCw0OS45LDQ5LjlTOTIsMTE0LjQsNjQuNSwxMTQuNFMxNC42LDkyLDE0LjYsNjQuNVMzNywxNC42LDY0LjUsMTQuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgICAgPHBhdGggZD0ibTQyLjcsODUuN2MwLjgsMC44IDEuOCwxLjIgMi45LDEuMnMyLjEtMC40IDIuOS0xLjJsMTYtMTYgMTYsMTZjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtMTYtMTYgMTYtMTZjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC0xNiwxNi0xNi0xNmMtMS42LTEuNi00LjItMS42LTUuOCwwLTEuNiwxLjYtMS42LDQuMiAwLDUuOGwxNiwxNi0xNiwxNmMtMS42LDEuNi0xLjYsNC4yLTEuNDIxMDllLTE0LDUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=" />
      `,
    warn: `
        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40NjMgNDg2LjQ2MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg2LjQ2MyA0ODYuNDYzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0My4yMjUsMzMzLjM4MmMtMTMuNiwwLTI1LDExLjQtMjUsMjVzMTEuNCwyNSwyNSwyNWMxMy4xLDAsMjUtMTEuNCwyNC40LTI0LjQgICAgQzI2OC4yMjUsMzQ0LjY4MiwyNTYuOTI1LDMzMy4zODIsMjQzLjIyNSwzMzMuMzgyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik00NzQuNjI1LDQyMS45ODJjMTUuNy0yNy4xLDE1LjgtNTkuNCwwLjItODYuNGwtMTU2LjYtMjcxLjJjLTE1LjUtMjcuMy00My41LTQzLjUtNzQuOS00My41cy01OS40LDE2LjMtNzQuOSw0My40ICAgIGwtMTU2LjgsMjcxLjVjLTE1LjYsMjcuMy0xNS41LDU5LjgsMC4zLDg2LjljMTUuNiwyNi44LDQzLjUsNDIuOSw3NC43LDQyLjloMzEyLjggICAgQzQzMC43MjUsNDY1LjU4Miw0NTguODI1LDQ0OS4yODIsNDc0LjYyNSw0MjEuOTgyeiBNNDQwLjYyNSw0MDIuMzgyYy04LjcsMTUtMjQuMSwyMy45LTQxLjMsMjMuOWgtMzEyLjggICAgYy0xNywwLTMyLjMtOC43LTQwLjgtMjMuNGMtOC42LTE0LjktOC43LTMyLjctMC4xLTQ3LjdsMTU2LjgtMjcxLjRjOC41LTE0LjksMjMuNy0yMy43LDQwLjktMjMuN2MxNy4xLDAsMzIuNCw4LjksNDAuOSwyMy44ICAgIGwxNTYuNywyNzEuNEM0NDkuMzI1LDM2OS44ODIsNDQ5LjIyNSwzODcuNDgyLDQ0MC42MjUsNDAyLjM4MnoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMjM3LjAyNSwxNTcuODgyYy0xMS45LDMuNC0xOS4zLDE0LjItMTkuMywyNy4zYzAuNiw3LjksMS4xLDE1LjksMS43LDIzLjhjMS43LDMwLjEsMy40LDU5LjYsNS4xLDg5LjcgICAgYzAuNiwxMC4yLDguNSwxNy42LDE4LjcsMTcuNmMxMC4yLDAsMTguMi03LjksMTguNy0xOC4yYzAtNi4yLDAtMTEuOSwwLjYtMTguMmMxLjEtMTkuMywyLjMtMzguNiwzLjQtNTcuOSAgICBjMC42LTEyLjUsMS43LTI1LDIuMy0zNy41YzAtNC41LTAuNi04LjUtMi4zLTEyLjVDMjYwLjgyNSwxNjAuNzgyLDI0OC45MjUsMTU1LjA4MiwyMzcuMDI1LDE1Ny44ODJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
      `,
    alert: `
        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwOC41MiA1MDguNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwOC41MiA1MDguNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBkPSJNMjU0LjI2LDBDMTEzLjg0NSwwLDAsMTEzLjg0NSwwLDI1NC4yNnMxMTMuODQ1LDI1NC4yNiwyNTQuMjYsMjU0LjI2ICAgICAgczI1NC4yNi0xMTMuODQ1LDI1NC4yNi0yNTQuMjZTMzk0LjY3NSwwLDI1NC4yNiwweiBNMjU0LjI2LDQ3Ni43MzdjLTEyMi42OCwwLTIyMi40NzctOTkuODI5LTIyMi40NzctMjIyLjQ3NyAgICAgIGMwLTEyMi42OCw5OS43OTctMjIyLjQ3NywyMjIuNDc3LTIyMi40NzdjMTIyLjY0OSwwLDIyMi40NzcsOTkuNzk3LDIyMi40NzcsMjIyLjQ3NyAgICAgIEM0NzYuNzM3LDM3Ni45MDgsMzc2LjkwOCw0NzYuNzM3LDI1NC4yNiw0NzYuNzM3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQkJPHBhdGggZD0iTTI1NC4yNiw5NS4zNDdjLTE3LjU0NCwwLTMxLjc4MiwxNC4yMzktMzEuNzgyLDMxLjc4MnYxNTguOTEyICAgICAgYzAsMTcuNTQ0LDE0LjIzOSwzMS43ODIsMzEuNzgyLDMxLjc4MnMzMS43ODItMTQuMjM5LDMxLjc4Mi0zMS43ODJWMTI3LjEzQzI4Ni4wNDIsMTA5LjU4NiwyNzEuODA0LDk1LjM0NywyNTQuMjYsOTUuMzQ3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQkJPGNpcmNsZSBjeD0iMjU0LjI2IiBjeT0iMzgwLjg4MSIgcj0iMzEuNzgyIiBmaWxsPSIjRkZGRkZGIi8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
    `,
    info: `
        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMzMCAzMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMzMCAzMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMTY1LDBDNzQuMDE5LDAsMCw3NC4wMiwwLDE2NS4wMDFDMCwyNTUuOTgyLDc0LjAxOSwzMzAsMTY1LDMzMHMxNjUtNzQuMDE4LDE2NS0xNjQuOTk5QzMzMCw3NC4wMiwyNTUuOTgxLDAsMTY1LDB6ICAgIE0xNjUsMzAwYy03NC40NCwwLTEzNS02MC41Ni0xMzUtMTM0Ljk5OUMzMCw5MC41NjIsOTAuNTYsMzAsMTY1LDMwczEzNSw2MC41NjIsMTM1LDEzNS4wMDFDMzAwLDIzOS40NCwyMzkuNDM5LDMwMCwxNjUsMzAweiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTE2NC45OTgsNzBjLTExLjAyNiwwLTE5Ljk5Niw4Ljk3Ni0xOS45OTYsMjAuMDA5YzAsMTEuMDIzLDguOTcsMTkuOTkxLDE5Ljk5NiwxOS45OTEgICBjMTEuMDI2LDAsMTkuOTk2LTguOTY4LDE5Ljk5Ni0xOS45OTFDMTg0Ljk5NCw3OC45NzYsMTc2LjAyNCw3MCwxNjQuOTk4LDcweiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTE2NSwxNDBjLTguMjg0LDAtMTUsNi43MTYtMTUsMTV2OTBjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di05MEMxODAsMTQ2LjcxNiwxNzMuMjg0LDE0MCwxNjUsMTQweiAgICIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
    `
};

export const DEFAULT_OPTIONS: IOptions = {
    timeOut: 0,
    position: ['bottom', 'right'],
    animate: 'fromRight',
    customClass: '',
    clickToClose: true,
    withIcon: true,
    rtl: false
}

export const DEFAULT_NOTIFICATION: INotification = {
    id: '',
    type: '',
    icon: '',
    title: '',
    content: '',
    opts: DEFAULT_OPTIONS
}