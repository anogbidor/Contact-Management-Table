import { useState, useEffect } from 'react'
import { fetchMockData } from './mockData/dataBase'
import Table from './components/Table'

function App() {
  const [data, setData] = useState([]) // State to store the fetched data
  const [error, setError] = useState(null) // State to track any errors during fetching
  const [currentPage, setCurrentPage] = useState(1) // Track the current page for pagination
  const [searchQuery, setSearchQuery] = useState('') // Track the search query entered by the user
  const [sortOrder, setSortOrder] = useState('asc') // Track the current sort order ('asc' or 'desc')
  const [sortField, setSortField] = useState('') // Track the field that is being sorted
  const [selectedIds, setSelectedIds] = useState([]) // Track selected checkboxes (IDs of selected rows)
  const itemsPerPage = 10 // Number of items to display per page

  // Fetch data from the backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMockData() // Call the mock API to fetch data
        setData(result) // Set the fetched data in state
      } catch (err) {
        setError('Failed to fetch data. Please try again.') // Set error state if the request fails
        console.error('Error fetching data:', err) // Log the error
      }
    }

    fetchData()
  }, [])

  // Sorting Handler: Sort data based on the selected field
  const handleSort = (field) => {
    const newSortOrder =
      sortField === field && sortOrder === 'asc' ? 'desc' : 'asc' // Toggle sort order
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return newSortOrder === 'asc' ? -1 : 1 // Ascending/Descending sort based on order
      if (a[field] > b[field]) return newSortOrder === 'asc' ? 1 : -1
      return 0
    })
    setSortField(field) // Set the currently sorted field
    setSortOrder(newSortOrder) // Set the new sort order
    setData(sortedData) // Update the sorted data
  }

  // Deletion Handler: Remove an item from the data and unselect it if selected
  const handleDelete = (id) => {
    const filteredData = data.filter((person) => person.id !== id) // Remove the item from the data
    setData(filteredData) // Update the data state
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id)) // Remove the deleted item from selected checkboxes
  }

  // Pagination Handler: Move to the previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1) // Decrement the current page if not on the first page
    }
  }

  // Pagination Handler: Move to the next page
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1) // Increment the current page if not on the last page
    }
  }

  // Search Handler: Update search query
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase()) // Convert the search query to lowercase for case-insensitive search
  }

  // Checkbox Handler: Handle selection and deselection of individual checkboxes
  const handleCheckboxChange = (id) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id] // Add or remove the checkbox ID from selected items
    )
  }

  // Select All Handler: Select or deselect all checkboxes
  const handleSelectAll = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([]) // Deselect all if everything is selected
    } else {
      setSelectedIds(data.map((person) => person.id)) // Select all by adding all IDs to the selected list
    }
  }

  // Check if all items are selected
  const allSelected = selectedIds.length === data.length

  // Filter data based on the search query
  const filteredData = data.filter(
    (person) => person.name.toLowerCase().includes(searchQuery) // Filter by name
  )

  // Paginate the filtered data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage // Only display items for the current page
  )

  // Spinner component to show loading state
  const Spinner = () => (
    <div
      className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-gray-900 rounded-full'
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )

  return (
    <div>
      {error ? (
        <p>{error}</p> // Display error if fetching data fails
      ) : data.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-screen bg-purple-100'>
          <Spinner /> {/* Show spinner while data is loading */}
          <p className='mt-4 text-gray-700'>Loading...</p>{' '}
          {/* Loading message */}
        </div>
      ) : (
        <Table
          data={paginatedData} // Pass the paginated data to the Table component
          handleSort={handleSort} // Pass the sorting function
          handleDelete={handleDelete} // Pass the delete function
          handleSearch={handleSearch} // Pass the search function
          handleCheckboxChange={handleCheckboxChange} // Pass the checkbox handler
          handleSelectAll={handleSelectAll} // Pass the select-all handler
          selectedIds={selectedIds} // Pass the selected checkboxes
          allSelected={allSelected} // Pass whether all items are selected
          currentPage={currentPage} // Pass the current page number
          handlePrevious={handlePrevious} // Pass the previous page handler
          handleNext={handleNext} // Pass the next page handler
          sortField={sortField} // Pass the current sort field
          sortOrder={sortOrder} // Pass the current sort order
        />
      )}
    </div>
  )
}

export default App
