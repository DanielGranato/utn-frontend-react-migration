import './StackForm.css'

/*
 * Formulario vertical de un solo campo y un botón.
 * Lo usan el DNI del inicio y el newsletter.
 */
export default function StackForm({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  onSubmit,
  placeholder,
  autoComplete,
  inputMode,
  buttonText,
  required = true,
}) {
  return (
    <form className="stack-form" onSubmit={onSubmit}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <button type="submit">{buttonText}</button>
    </form>
  )
}
