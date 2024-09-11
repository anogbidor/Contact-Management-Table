import Pagination from './Pagination' // Import Pagination component for controlling table page navigation
import TableHeader from './TableHeader' // Import TableHeader component to manage sorting and select-all functionality
import SearchBar from './SearchBar' // Import SearchBar component for filtering table rows based on user input
import TableRow from './TableRow' // Import TableRow component to render individual table rows

function Table({
  data, // The data to be displayed in the table
  handleSort, // Function to handle sorting the table by column
  handleDelete, // Function to handle deleting a row
  handleSearch, // Function to handle search input
  handleCheckboxChange, // Function to handle checkbox state for individual rows
  handleSelectAll, // Function to handle "Select All" checkbox
  selectedIds, // Array of selected row IDs (for checkboxes)
  allSelected, // Boolean to check if all rows are selected
  currentPage, // Current page number for pagination
  handlePrevious, // Function to go to the previous page
  handleNext, // Function to go to the next page
}) {
  return (
    <div className='flex justify-center py-6 bg-purple-100'>
      {/* Container that centers the table on the page and adds padding and background color */}

      <div className='max-w-3xl w-full p-2 bg-white shadow-lg rounded-lg'>
        {/* Main table container with a defined maximum width, white background, shadow, and rounded corners */}

        <div className='-m-1.5 overflow-x-auto'>
          {/* Container to enable horizontal scrolling on smaller screens */}

          <div className='p-1.5 min-w-full inline-block align-middle'>
            {/* Inner container that ensures the table takes up the full width and aligns vertically in the middle */}

            <div className='border rounded-lg divide-y divide-gray-200'>
              {/* Main table structure with a border, rounded corners, and dividers between table rows */}

              {/* Search Bar */}
              <SearchBar handleSearch={handleSearch} />
              {/* Displays the search bar at the top, which accepts user input for filtering the table */}

              {/* Table */}
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200'>
                  {/* Defines the table structure with dividers between rows and ensures it takes up the full width */}

                  {/* Table Header */}
                  <TableHeader
                    handleSort={handleSort} // Passes the sorting function to the header
                    handleSelectAll={handleSelectAll} // Passes the "Select All" function to the header checkbox
                    allSelected={allSelected} // Indicates if all rows are selected for the checkbox state
                  />

                  {/* Table Body */}
                  <tbody className='divide-y divide-gray-200'>
                    {/* Maps over the data array and renders a TableRow for each person */}
                    {data.map((person) => (
                      <TableRow
                        key={person.id} // Unique key for each row (required for React rendering)
                        person={person} // Data for the current person/row
                        handleDelete={handleDelete} // Function to delete the row
                        handleCheckboxChange={handleCheckboxChange} // Function to handle checkbox changes for the row
                        isSelected={selectedIds.includes(person.id)} // Checks if the current row is selected based on selectedIds array
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage} // Current page number for the pagination component
                handlePrevious={handlePrevious} // Function to go to the previous page
                handleNext={handleNext} // Function to go to the next page
              />
              {/* Pagination component placed at the bottom of the table to navigate through the pages */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
