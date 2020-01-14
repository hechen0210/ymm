export function setCookie(name: string, value: string, expire: number) {
    _setCookie(name, value, expire)
}

export function getCookie(name: string) {
    return _getCookie(name)
}

function _getCookie(name: string) {
    let start, end
    if (document.cookie.length > 0) {
        start = document.cookie.indexOf(name + '=')
        if (start !== -1) {
            start = start + name.length + 1
            end = document.cookie.indexOf(';', start)
            if (end === -1) {
                end = document.cookie.length
            }
            return unescape(document.cookie.substring(start, end))
        }
    }
    return ''
}

function _setCookie(name: string, value: string, expire: number) {
    let date = new Date()
    date.setDate(date.getDate() + expire)
    document.cookie = name + '=' + escape(value) + '; path=/' +
        (expire ? ';expires=' + date.toUTCString() : '')
}
