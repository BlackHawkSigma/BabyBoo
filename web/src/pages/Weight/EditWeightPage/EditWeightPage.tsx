import EditWeightCell from 'src/components/Weight/EditWeightCell'

type WeightPageProps = {
  id: number
}

const EditWeightPage = ({ id }: WeightPageProps) => {
  return <EditWeightCell id={id} />
}

export default EditWeightPage
