function SearchBar({ handleSearch }) {
  return (
    <div className='py-3 px-4'>
   
    
      <div className='relative max-w-xs'>
       
    
        <label className='sr-only'>Search</label>{' '}
        
        <input
          type='text' 
          id='hs-table-with-pagination-search' 
          className='bg-blue-50 py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-100 focus:ring-blue-100 disabled:opacity-50 disabled:pointer-events-none'
         
          placeholder='Search for a contact' 
          onChange={(e) => handleSearch(e.target.value)} 
        />
        
        <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3'>
          <svg
            className='size-4 text-gray-400' 
            xmlns='http://www.w3.org/2000/svg'
            width='24' 
            height='24' 
            viewBox='0 0 24 24' 
            fill='none' 
            stroke='currentColor' 
            strokeWidth='2' 
            strokeLinecap='round' 
            strokeLinejoin='round' 
          >
           
            <circle cx='11' cy='11' r='8' />
         
            <path d='m21 21-4.3-4.3' />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
