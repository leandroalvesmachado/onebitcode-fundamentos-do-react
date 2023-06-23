# onebitcode-fundamentos-do-react

- React.StrictMode - ajuda no desenvolvimento, ele monta o componente duas vezes para facilitar o debug

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

# O que é e para que serve o “state”
- Serve para realizar as mudanças das variáveis e etc no DOM virtual

# Conhecendo melhor os hooks (ganchos)
- Ex: useState
- Os hooks começam com useNomeDoHook
- Regra 1: Onde usar os hooks
- Só funciona dentro do componente. Ex: Dentro do function App()
- Regra 2: A ordem dos hooks

# Compartilhando estado entre componentes
- npm install prop-types (biblioteca compartilhando estado entre componentes)
