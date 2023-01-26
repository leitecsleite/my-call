import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/previa.png'
import { ClaimUserNameForm } from '../components/claimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text>
          Conecte Seu calendário e permita que as pessoas marquem agendamento no
          seu tempo livre
        </Text>
        <ClaimUserNameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolixando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
