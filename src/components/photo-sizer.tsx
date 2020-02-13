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
    if (query.includes('grayscale')) {
      setGray(value)
    }
    if (query.includes('blur')){
      setBlur(value)
    }
    if (query === '') {
      setBlur(value)
      setGray(value)
    }
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={() => {
          if (count > 1) {
            change(count-1)
          }
        }}>
          Smaller
        </button>
        <button onClick={() => {
          if (count < 10){
            change(count+1)
          }
        }}>
          Bigger
        </button>
      </div>

      <button onClick={() => {
        !gray && !blur
          ? handleQuerySet('?grayscale', true)
            : !gray && blur
              ? handleQuerySet('?blur&grayscale', true)
                : handleQuerySet('', false)
      }}>Grayscale</button>
      <button onClick={() => {
        !blur && !gray
          ? handleQuerySet('?blur', true)
            : !blur && gray
              ? handleQuerySet('?grayscale&blur', true)
                : handleQuerySet('', false)
      }}>Blur</button>
      <h3>
        {count === 1 ? 'One' : count === 10 ? 'Ten' : count}
        {
          gray && blur
            ? ': [Grayscaled, Blurred]'
              : gray && !blur
                ? ': [Grayscaled]'
                  : !gray && blur
                    ? ': [Blurred]'
                      : ''
        }
      </h3>
      <img src={image} />
    </React.Fragment>
  )
}
