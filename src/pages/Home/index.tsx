import React, { useEffect, useRef, useState } from 'react'
import { Form } from '@unform/web'
import { SubmitHandler } from '@unform/core'
import { FcMultipleSmartphones } from 'react-icons/fc'
import * as Yup from 'yup'

import api from '../../api'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MainContainer } from './style'
import Input from '../../components/Form/Input'
import Select from '../../components/Form/Select'

interface FormData {
  origem: string
  destino: string
  minutos: string
  plano: string
}

interface Chamadas {
  id: string
  origem: string
  destino: string
  custo: number
}

interface CalculoCustos {
  comFaleMais: string
  semFaleMais: string
}

const Home: React.FC = () => {
  const [chamadas, setChamadas] = useState<Chamadas[]>([])
  const [custos, setCustos] = useState({} as CalculoCustos)
  const formRef = useRef(null)

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        origem: Yup.string(),
        destino: Yup.string(),
        minutos: Yup.string(),
        plano: Yup.string()
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const resultado = await api.post('/chamadas/calcular', data)
      setCustos(resultado.data)

      reset()
    } catch (err) {
      console.log(err)
    }
  }

  const loadData = async () => {
    const dados = await api.get<Chamadas[]>('/chamadas')
    setChamadas(dados.data)
  }

  useEffect(() => {
    loadData()
  })

  return (
    <>
      <Header />
      <MainContainer>
        <div>
          <div className="title">
            <h1>Com FaleMais você economiza sempre!</h1>
            <h2>Faça uma simulação com os planos FaleMais e contrate agora</h2>
          </div>
          <div>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Select name="origem" placeholder="DDD de origem">
                {chamadas.length > 0 &&
                  chamadas.map(chamada => (
                    <option key={chamada.id}>{chamada.origem}</option>
                  ))}
              </Select>
              <Select name="destino" placeholder="DDD de destino">
                {chamadas.length > 0 &&
                  chamadas.map(chamada => (
                    <option key={chamada.id}>{chamada.destino}</option>
                  ))}
              </Select>
              <Input name="minutos" placeholder="Minutos de ligação" />
              <Select name="plano" placeholder="Plano promocional">
                <option key={1}>FaleMais 30</option>
                <option key={2}>FaleMais 60</option>
                <option key={3}>FaleMais 120</option>
              </Select>
              <button type="submit">Enviar</button>
            </Form>
            <div>
              <h2>
                Valor com FaleMais:
                <span className="com-falemais">
                  {custos.comFaleMais
                    ? Number(custos.comFaleMais).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    })
                    : 'R$ 0,00'}
                </span>
              </h2>
              <h2>
                Valor sem FaleMais:
                <span className="sem-falemais">
                  {custos.semFaleMais
                    ? Number(custos.semFaleMais).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    })
                    : 'R$ 0,00'}
                </span>
              </h2>
              <FcMultipleSmartphones size={300} />
            </div>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home
