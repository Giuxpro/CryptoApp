import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer,ToastPosition } from 'react-toastify';
import { AppReactToastifyProps } from '../interfaces/appReactToastify.interfaces'


export const AppReactToastify: React.FC<AppReactToastifyProps> = (props) => {
  const { boxProps, direction = 'ltr', ...rest } = props

  const positionMap: { [key: string]: ToastPosition }= {
    'top-right': 'top-left',
    'top-left': 'top-right',
    'bottom-left': 'bottom-right',
    'bottom-right': 'bottom-left',
    'top-center': 'top-center',
    'bottom-center': 'bottom-center'
  }

  const position = direction === 'rtl' ? positionMap['top-right'] : 'top-right'; // Ajusta la posición por defecto aquí
  console.log("position: ", position)
  return (
    <div className="relative">
      <ToastContainer
        rtl={direction === 'rtl'}
        position={position}
        className="toast-container"
        toastClassName="toast-toast"
        bodyClassName="toast-body"
        {...rest}
      />
    </div>
  );
}


