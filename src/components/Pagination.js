function Pagination({ currentPage, handlePrevious, handleNext }) {
  return (
    <div className='py-1 px-4'>
      {' '}
    
      <nav className='flex items-center space-x-1' aria-label='Pagination'>
       
        <button
          type='button'
          className='p-2.5 min-w-[40px] inline-flex justify-center items-center text-sm rounded-full text-purple-800 hover:bg-gray-100' 
          onClick={handlePrevious} 
        >
          « 
        </button>
        
        <span className='px-3 text-purple-800' >{currentPage}</span>{' '}
        
      
        <button
          type='button'
          className='p-2.5 min-w-[40px] inline-flex justify-center items-center text-sm rounded-full text-purple-800 hover:bg-gray-100' 
          onClick={handleNext} 
        >
          » 
        </button>
      </nav>
    </div>
  )
}

export default Pagination
