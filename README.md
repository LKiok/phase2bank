# Transaction App

This is a simple React application that allows users to add transactions and search for transactions based on their descriptions. The app fetches transaction data from a local JSON server and displays it in a tabular format. Users can add new transactions and search for specific transactions using the search bar.

## Features

- Add new transactions: Users can input the date, description, category, and amount of a transaction and click the "Add Transaction" button to add it to the list.

- Search transactions: Users can search for transactions based on their descriptions. The search is case-insensitive, meaning it will match transactions regardless of letter casing.

## Setup

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the local JSON server by running `npm run server`. The server will run at `http://localhost:8000`.
4. Start the React application by running `npm start`. The app will open in your default web browser at `http://localhost:3000`.

## Dependencies

- React: A JavaScript library for building user interfaces.
- JSON Server: A fake REST API server used to provide transaction data.

## Project Structure

The project is structured as follows:

- `src/App.js`: The main component that renders the TransactionForm and SearchBar components.
- `src/TransactionForm.js`: Component responsible for adding new transactions to the list.
- `src/SearchBar.js`: Component responsible for filtering and displaying transactions based on search terms.
- `src/TransactionTable.js`: Component responsible for displaying the list of transactions in a tabular format.

## Running the Tests

Currently, there are no automated tests included in the project. To add tests, you can use testing libraries like Jest and React Testing Library.

## Contributing

This project is open to contributions. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Letia Kiok
