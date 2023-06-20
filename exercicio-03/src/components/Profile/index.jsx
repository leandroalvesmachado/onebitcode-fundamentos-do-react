import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <p>
          <button>Componente com children</button>
        </p>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <LinkButton href={props.github} target="_blank">GitHub</LinkButton>
          <LinkButton href={props.linkedin} target="_blank">Linkedin</LinkButton>
          <LinkButton href={props.twitter} target="_blank">Twitter</LinkButton>
        </div>
      </ProfileSection>
    </div>
  )
}