import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import { useState } from "react";

// Se a função não depende de nenhuma props, fica aqui fora
function handleClick(ev) {
  console.log(ev)
}

export default function Profile(props) {
  // [variavel, funcaoModificadora] = useState(valor da variavel)
  const [followText, setFollowText] = useState("Follow")

  // Se a função depender de alguma props ou variavel, fica dentro do. Ex: export default function Profile(props) {
  function changeText(ev) {
    alert('Você agora está seguindo')
    setFollowText("Following")
  }

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
            onClick={changeText}
          >
            {followText}
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