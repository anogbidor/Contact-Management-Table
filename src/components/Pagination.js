function Pagination({ currentPage, handlePrevious, handleNext }) {
  return (
    <div className='py-1 px-4'>
      {' '}
      {/* Container for pagination with padding */}
      <nav className='flex items-center space-x-1' aria-label='Pagination'>
        {' '}
        {/* Flexbox layout for pagination controls */}
        {/* Previous button to go to the previous page */}
        <button
          type='button'
          className='p-2.5 min-w-[40px] inline-flex justify-center items-center text-sm rounded-full text-gray-800 hover:bg-gray-100' // Styling for the button
          onClick={handlePrevious} // Call handlePrevious when clicked to navigate to the previous page
        >
          « {/* Left arrow symbol for the previous button */}
        </button>
        {/* Current page number display */}
        <span className='px-3'>{currentPage}</span>{' '}
        {/* Show the current page number */}
        {/* Next button to go to the next page */}
        <button
          type='button'
          className='p-2.5 min-w-[40px] inline-flex justify-center items-center text-sm rounded-full text-gray-800 hover:bg-gray-100' // Styling for the button
          onClick={handleNext} // Call handleNext when clicked to navigate to the next page
        >
          » {/* Right arrow symbol for the next button */}
        </button>
      </nav>
    </div>
  )
}

export default Pagination
