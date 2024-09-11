function SearchBar({ handleSearch }) {
  return (
    <div className='py-3 px-4'>
   
      {/* Container for the search bar with padding */}
      <div className='relative max-w-xs'>
       
        {/* Search bar wrapper with max width */}
        <label className='sr-only'>Search</label>{' '}
        {/* Screen reader only label for accessibility */}
        {/* Search input field */}
        <input
          type='text' // Text input field for the search query
          id='hs-table-with-pagination-search' // ID for the input field
          className='bg-blue-50 py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-100 focus:ring-blue-100 disabled:opacity-50 disabled:pointer-events-none'
          // Styling classes: sets background, padding, width, border, shadow, and focus effects for the input field
          placeholder='Search for a contact' // Placeholder text guiding the user
          onChange={(e) => handleSearch(e.target.value)} // Calls the handleSearch function when input value changes, passing the current input
        />
        {/* Search icon placed inside the input field */}
        <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3'>
          <svg
            className='size-4 text-gray-400' // Icon styling (size and color)
            xmlns='http://www.w3.org/2000/svg'
            width='24' // SVG width
            height='24' // SVG height
            viewBox='0 0 24 24' // Viewbox defines the SVG's aspect ratio and dimensions
            fill='none' // No fill inside the icon
            stroke='currentColor' // Stroke color follows current text color
            strokeWidth='2' // Thickness of the stroke
            strokeLinecap='round' // Rounded ends for lines
            strokeLinejoin='round' // Rounded joints where lines meet
          >
            {/* Circle for the magnifying glass */}
            <circle cx='11' cy='11' r='8' />
            {/* Handle for the magnifying glass */}
            <path d='m21 21-4.3-4.3' />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
