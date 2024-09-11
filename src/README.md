# Contact Management Table


### Explanation of the Sections:

- **Prerequisites**: Lists the software you need installed before running the project.
- **Getting Started**: Provides steps to clone the repository, install dependencies, and run the project locally.
- **File Structure**: Offers a quick overview of the file structure for easy navigation.
- **Approach**: Explains the thought process behind the frontend architecture, state management, and styling with TailwindCSS.
- **Challenges Faced**: Highlights difficulties encountered and how they were solved, giving insight into the development process.
- **Future Improvements**: Lists potential enhancements that could be made to the app.



## Project Overview

This is a simple contact management system built using **React**. It includes features such as:
- Pagination
- Sorting by name, email, and company
- Searching contacts
- Selecting multiple contacts using checkboxes
- Deleting a contact
- Styling with **TailwindCSS**

The app is designed to manage contacts dynamically by interacting with the user interface, where users can search for contacts, sort columns, and paginate through the data.

## Features
- **Search**: Search for a contact by name, email, or company.
- **Sorting**: Sort the contact list by clicking on the table headers.
- **Pagination**: Navigate between pages of contacts.
- **Select/Unselect Contacts**: Use checkboxes to select individual contacts or all at once.
- **Delete Contacts**: Remove contacts from the list with a delete button.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** (for package management)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/contact-management-table.git
cd contact-management-table

# Using npm
npm install

# OR using yarn
yarn install

# Using npm
npm start

# OR using yarn
yarn start


├── public
├── src
│   ├── components
│   │   ├── Pagination.js
│   │   ├── SearchBar.js
│   │   ├── Table.js
│   │   ├── TableHeader.js
│   │   └── TableRow.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md

Approach

Frontend

	1.	React Components: Each part of the UI (search bar, table, pagination, etc.) is broken into small reusable components to ensure the code is modular and easy to maintain. The components communicate with each other through props.
	2.	State Management: State is used to manage the list of contacts, the current page, and search and sorting functionality. The parent component (Table) handles the main logic, and child components trigger actions through event handlers passed via props.
	3.	Sorting: The sorting functionality was implemented by passing the sortField and sortOrder to the TableHeader component. The getSortIcon function is used to show the appropriate sorting icon.
	4.	Pagination: Pagination was handled by slicing the contact data and updating the current page using the Pagination component.


 Styling

	#	TailwindCSS: Used for rapid styling, including utility classes for margins, paddings, text size, and more. This made it easy to design a clean and responsive UI.

Challenges Faced

	1.	State Management: Managing the selected checkboxes and ensuring the correct state was passed to child components (like whether a row was selected or not) was challenging at first. The solution involved maintaining the selected IDs in an array and using includes() to check if an ID was selected.
	2.	Sorting Icons: Implementing the sorting icons (▲ and ▼) based on the current sort field and order required a small utility function (getSortIcon) to show the correct icon.
	3.	Handling Large Data: Though this app only manages a limited number of contacts, pagination and search logic had to be implemented carefully to avoid performance issues in larger datasets.
	4.	TailwindCSS: Tailwind’s utility classes made styling faster, but managing responsiveness and ensuring cross-browser consistency required testing and adjustments.

Future Improvements

	*	Add API integration: Currently, data is hardcoded. This can be expanded to fetch contacts from an external API.
 *	Bulk Actions: Enable bulk delete or edit operations for selected contacts.
	*	Loading Spinner: Add a loading spinner when fetching data or navigating between pages.
	*	Additional Sorting Fields: Allow sorting by more fields (e.g., phone number, address).
