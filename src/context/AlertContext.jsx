import { createContext, useReducer } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertContext = createContext();

const initialAlert = {
  open: false,
  variant: undefined,
  title: 'Info',
  message: ''
};

const AlertProvider = ({children}) => {
  const [alert, alertDispatch] = useReducer(alertReducer, initialAlert);

  function alertReducer(state, action) {
    switch (action.type) {
      case 'open':
        return {
          open: true,
          variant: action.variant || state.variant,
          title: action.title || state.title,
          message: action.message || state.message
        }
      case 'close':
        return {
          open: false,
          variant: undefined,
          title: 'Info',
          message: ''
        }
    
      default:
        throw new Error('Alert provider not handle.');
    }
  }

  return (
    <AlertContext.Provider
      value={{
        openAlert: alertDispatch
      }}
    >
      {children}
      {alert.open &&
        <Alert 
          onClose={() => alertDispatch({type: 'close'})} 
          variant={alert.variant}
          dismissible
          style={{position: 'fixed', left: '16px', bottom: '16px'}}
        >
          <Alert.Heading>
            <strong className='me-auto'>{alert.title}</strong>
          </Alert.Heading>
          <p>{alert.message}</p>
        </Alert>
      }
    </AlertContext.Provider>
  );
}

export { AlertProvider };

export default AlertContext;