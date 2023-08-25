import { AuthorizationForm } from '../AuthorizationForm/AuthorizationForm';

function Register({submitHandler}) {
  return (
    <AuthorizationForm
      name="register"
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      submitHandler={submitHandler}
    />
  )
}

export { Register };
