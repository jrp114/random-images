import * as React from 'react'

export const PhotoSizer: React.FC<{}> = () => {

  const [count, change] = React.useState(1)
  const [image, update] = React.useState('')

  React.useEffect(() => {
    update('https://picsum.photos/' + count.toString() + '00')
  }, [count])

  return (
    <React.Fragment>
      <button onClick={() => {
        if (count < 10){
          change(count+1)
        }
      }}>Bigger</button>
      <button onClick={() => {
        if (count > 1) {
          change(count-1)
        }
      }}>Smaller</button>
      <h3>{count === 1 ? 'One' : count === 10 ? 'Ten' : count}</h3>
      <img src={image} />
    </React.Fragment>
  )
}
