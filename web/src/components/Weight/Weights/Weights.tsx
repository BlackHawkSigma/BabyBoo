import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { differenceInHours, parseISO } from 'date-fns'

import { QUERY } from 'src/components/Weight/WeightsCell'
import type { CellSuccessProps } from '@redwoodjs/web'
import type { FindWeights } from 'types/graphql'

const DELETE_WEIGHT_MUTATION = gql`
  mutation DeleteWeightMutation($id: Int!) {
    deleteWeight(id: $id) {
      id
    }
  }
`

const numberFormatter = new Intl.NumberFormat('de-DE', {
  style: 'unit',
  unit: 'gram',
})

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleDateString('de-DE')}
      </time>
    )
  )
}

const WeightsList = ({ weights }: CellSuccessProps<FindWeights>) => {
  const [deleteWeight] = useMutation(DELETE_WEIGHT_MUTATION, {
    onCompleted: () => {
      toast.success('Weight deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete weight ' + id + '?')) {
      deleteWeight({ variables: { id } })
    }
  }

  ChartJS.register(LinearScale, PointElement, LineElement)

  const data = weights.map(({ recordedAt, value }, _index, all) => {
    const firstDate = all[0].recordedAt
    return {
      x: differenceInHours(parseISO(recordedAt), parseISO(firstDate)) / 24,
      y: value,
    }
  })

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <div>
        <Scatter
          options={{ locale: 'de-DE' }}
          data={{ datasets: [{ data }] }}
        />
      </div>
      <table className="rw-table">
        <thead>
          <tr>
            <th>Gewicht</th>
            <th>Datum</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {weights.map((weight) => (
            <tr key={weight.id}>
              <td>{numberFormatter.format(weight.value)}</td>
              <td>{timeTag(weight.recordedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.editWeight({ id: weight.id })}
                    title={'Edit weight ' + weight.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete weight ' + weight.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(weight.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WeightsList
