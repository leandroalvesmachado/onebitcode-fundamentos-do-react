# onebitcode-fundamentos-do-react


# Composição de componentes com “children”

# Props com Rest Param
- Passar props do componente pai para o filho
<ProfileSection
    className={styles.links}
    id="links-section"
    data-test="some value"
    aria-label="social links"
>

<div
      {...props}
      className={styles.wrapper}
    >
      {props.children}
    </div>

<div
      {...props}
      className={`${styles.wrapper} ${props.className}`}
    >
      {props.children}
    </div>
