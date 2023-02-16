import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInput,
  IntervalItem,
  IntervalsContainer,
} from './styles'

/* import { api } from '../../lib/axios' */

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox>
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text> Segunda-Feira</Text>
            </IntervalDay>
            <IntervalInput>
              <TextInput size="sm" type="time" step={60}></TextInput>
              <TextInput size="sm" type="time" step={60}></TextInput>
            </IntervalInput>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text> Terça-Feira</Text>
            </IntervalDay>
            <IntervalInput>
              <TextInput size="sm" type="time" step={60}></TextInput>
              <TextInput size="sm" type="time" step={60}></TextInput>
            </IntervalInput>
          </IntervalItem>
        </IntervalsContainer>
        <Button type="submit">
            Próximo passo
            <ArrowRight/>
        </Button>
      </IntervalBox>
    </Container>
  )
}
