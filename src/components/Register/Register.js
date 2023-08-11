import { AuthorizationForm } from '../AuthorizationForm/AuthorizationForm';

function Register({submitHandler}) {
  return (
    <AuthorizationForm
      name="register"
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      isLoginSuggestion={true}
      submitHandler={submitHandler}
    />
  )
}

export { Register };
