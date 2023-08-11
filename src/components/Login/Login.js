import { AuthorizationForm } from '../AuthorizationForm/AuthorizationForm';

function Login({submitHandler}) {
  return (
    <AuthorizationForm
      name="login"
      title="Рады видеть!"
      button="Войти"
      isLoginSuggestion={false}
      submitHandler={submitHandler}
    />
  )
}


export { Login };
