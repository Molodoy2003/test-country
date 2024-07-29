import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CountryDetail = () => {
  const { name } = useParams()
  const [country, setCountry] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        setCountry(response.data[0])
      })
      .catch(error => {
        setError('Error fetching country details')
      })
  }, [name])

  if (error) {
    return <div className='alert alert-danger'>{error}</div>
  }

  if (!country) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-4'>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className='img-fluid'
      />
      <div className='mt-3'>
        <Link to='/' className='btn btn-primary'>
          Back to List
        </Link>
      </div>
    </div>
  )
}

export default CountryDetail
