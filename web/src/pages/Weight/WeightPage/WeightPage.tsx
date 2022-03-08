import WeightCell from 'src/components/Weight/WeightCell'

type WeightPageProps = {
  id: number
}

const WeightPage = ({ id }: WeightPageProps) => {
  return <WeightCell id={id} />
}

export default WeightPage
