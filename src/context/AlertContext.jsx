import { createContext, useReducer } from 'react';
// import Alert from 'react-bootstrap/Alert';
import Alert from 'components/ui/Alert';
import Button from 'components/ui/Button';

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
          variant={alert.variant}
          dismissible
          style={{position: 'fixed', left: '16px', bottom: '0'}}
        >
          <Alert.Body>
            <Alert.Header>
              <Alert.Title variant={alert.variant}>{alert.title}</Alert.Title>
              <div>
                <Button.Icon onClick={() => alertDispatch({type: 'close'})}>close</Button.Icon>
              </div>
            </Alert.Header>
            <Alert.Text>{alert.message}</Alert.Text>
          </Alert.Body>
        </Alert>
      }
    </AlertContext.Provider>
  );
}

export { AlertProvider };

export default AlertContext;