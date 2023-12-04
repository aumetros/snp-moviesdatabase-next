import styles from "./Input.module.scss";

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
        className={styles.root}
        name={name}
        {...register(name, validation)}
        {...rest}
      />
      <span className={classErrors}>{errors && errors.message}</span>
    </>
  );
}
