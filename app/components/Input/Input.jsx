export default function Input({
  register,
  errors,
  name,
  classInput,
  classErrors,
  validation,
  ...rest
}) {
  return (
    <>
      <input
        className={classInput}
        name={name}
        placeholder="Введите название фильма"
        {...register(name, validation)}
        {...rest}
      />
      <span className={classErrors}>{errors && errors.message}</span>
    </>
  );
}
