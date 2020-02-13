import * as React from 'react'

export const PhotoSizer: React.FC<{}> = () => {

  const [count, change] = React.useState(1)
  const [image, update] = React.useState('')
  const [gray, setGray] = React.useState(false)
  const [blur, setBlur] = React.useState(false)
  const [queryString, setQuery] = React.useState('')

  React.useEffect(() => {
    update('https://picsum.photos/' + count.toString() + '00' + queryString)
  }, [count, queryString])

  const handleQuerySet = (query:string, value: boolean) => {
    setQuery(query)
    if (query === '?grayscale') {
      setGray(value)
    }
    else if (query === '?blur'){
      setBlur(value)
    }
    else {
      setBlur(value)
      setGray(value)
    }
  }

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
      <button onClick={() => {
        !gray ?
          handleQuerySet('?grayscale', true)
        : handleQuerySet('', false)
      }}>Grayscale</button>
      <button onClick={() => {
        !blur ?
          handleQuerySet('?blur', true)
        : handleQuerySet('', false)
      }}>Blur</button>
      <h3>
        {count === 1 ? 'One' : count === 10 ? 'Ten' : count}
      </h3>
      <img src={image} />
    </React.Fragment>
  )
}
