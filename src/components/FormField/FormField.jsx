import './FormField.css'

/*
 * Campo de formulario con etiqueta, usado en login y registro.
 * CheckboxField es la variante del casillero de términos.
 */
export default function FormField({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
  minLength,
  required = true,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        minLength={minLength}
        required={required}
      />
    </div>
  )
}

export function CheckboxField({
  id,
  name,
  label,
  checked,
  onChange,
  required = true,
}) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
