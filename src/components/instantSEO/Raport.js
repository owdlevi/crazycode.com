import React from 'react'
import axios from 'axios'

const Raport = ({ url }) => {
  const apiURL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`

  const fetchData = async () => {
    const response = await axios.get(apiURL)

    console.log(response.data)
  }

  fetchData()
  return <div>Data...</div>
}

export default Raport
