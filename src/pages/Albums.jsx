import React from 'react'
import ListaAlbums from '../components/ListaAlbums'
import SearchBar from '../components/SearchBar'

export default function Albums() {
  return (
    <div>
        <div className='mb-10'>
        <SearchBar/>
        </div>
        <ListaAlbums/>
    </div>
  )
}