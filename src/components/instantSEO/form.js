/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import isURL from 'validator/lib/isURL'
import Raport from './Raport'

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showLoading, setShowLoading] = useState(false)

  const handleKeyPress = event => {
    if (event.which === 13) {
      isURL(searchTerm) ? connectToApi(searchTerm) : console.log('not valid url')
    }
  }

  const connectToApi = searchTerm => {
    setShowLoading(true)
  }

  return (
    <div>
      {!showLoading ? (
        <div
          sx={{
            mx: 'auto',
            width: '300px'
          }}>
          <input
            type="text"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            onKeyPress={event => handleKeyPress(event)}
            sx={{
              padding: [2],
              border: '1px solid #e6e6e6',
              borderRadius: '5px',
              width: '300px'
            }}
          />
        </div>
      ) : (
        <Raport url={searchTerm} />
      )}
    </div>
  )
}

export default SearchForm
