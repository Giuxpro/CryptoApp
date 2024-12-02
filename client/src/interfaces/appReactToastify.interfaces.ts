export interface AppReactToastifyProps {
    boxProps?: React.HTMLProps<HTMLDivElement>
    direction?: 'ltr' | 'rtl'
    autoClose?: number
    hideProgressBar?: boolean
    newestOnTop?: boolean
    closeOnClick?: boolean
}