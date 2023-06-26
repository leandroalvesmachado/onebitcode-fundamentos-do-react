# onebitcode-fundamentos-do-react

# Introdução ao Módulo
<ol>
  <li>Como funciona o React</li>
  <li>Para que serve o React</li>
  <li>JSX</li>
  <li>Componentes</li>
  <li>props</li>
  <li>eventos</li>
  <li>estado</li>
  <li>formulários</li>
  <li>renderização condicional e de listas</li>
  <li>HTML e CSS</li>
  <li>Conhecimentos sólidos em JavaScript (todos os 5 módulos de JS concluídos)</li>
  <li>Em especial, domínio de funções, objetos e arrays</li>
  <li>Versão usada: React 18+</li>
  <li>Nova estrutura em (possivelmente) 3 partes</li>
  <li>Parte inicial: foco nos fundamentos</li>
</ol>

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
