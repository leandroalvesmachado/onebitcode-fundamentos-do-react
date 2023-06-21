import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

// Se a função não depende de nenhuma props, fica aqui fora
// Se a função depender de alguma props, fica dentro do componente. Ex: export default function Profile(props) {
function handleClick(ev) {
  console.log(ev)
  alert('Você agora está seguindo')
}

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <p>
          {/* eventos do js no react */}
          {/* <button onClick={() => alert('Você agora esta seguindo')}>Follow</button> */}
          <button
            className={styles.followButton}
            onClick={handleClick}
          >
            Follow
          </button>
        </p>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.github} target="_blank">GitHub</LinkButton>
        <LinkButton href={props.linkedin} target="_blank">Linkedin</LinkButton>
        <LinkButton href={props.twitter} target="_blank">Twitter</LinkButton>
      </ProfileSection>
    </div>
  )
}