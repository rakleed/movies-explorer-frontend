import { AuthorizationForm } from '../AuthorizationForm/AuthorizationForm';

function Login({submitHandler}) {
  return (
    <AuthorizationForm
      name="login"
      title="Рады видеть!"
      button="Войти"
      submitHandler={submitHandler}
    />
  )
}

export { Login };
