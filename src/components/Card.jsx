export default function Card({
  variant = 'product',
  title,
  description,
  image,
  alt = '',
  href = '#',
  children,
}) {
  if (variant === 'cta') {
    return (
      <article className="cta-card">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
        {children}
      </article>
    )
  }

  return (
    <article className="product-card">
      <a href={href}>
        {image ? <img src={image} alt={alt} /> : null}
        <div className="product-text">
          <h3>{title}</h3>
          {description ? <p>{description}</p> : null}
        </div>
      </a>
    </article>
  )
}
