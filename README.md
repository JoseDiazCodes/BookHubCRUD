# Personal Book Library Application

## Overview

This application is a personal book library that allows users to track and manage their reading list. It features a clean and intuitive interface for adding, marking, and removing books from the reading list.

## Features

- **Track Reading Progress**: Mark books as 'Completed' or 'In Progress'.
- **Manage Book List**: Add new books and delete them from the list.
- **Interactive UI**: Simple and user-friendly interface to manage your reading journey.
- **Persistent Data Storage**: Utilizes MongoDB for storing book information.

## Technologies

- Frontend: HTML, CSS (with FontAwesome for icons)
- Backend: Node.js, Express
- Database: MongoDB
- Additional Libraries: Body-parser for handling POST requests

## Installation

1. Clone the repository.
2. Install necessary dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   node server.js
   ```
4. Access the app at `http://localhost:3000`.

## Usage

1. **View Book List**: All books are listed with their titles, authors, and descriptions.
2. **Add a Book**: Use the form at the bottom to add a new book to your library.
3. **Update Reading Status**: Click on the check icon to mark a book as completed or the hourglass icon to mark it as in progress.
4. **Delete a Book**: Use the trash can icon to remove a book from the list.

## Contributing

Contributions to this project are welcome:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Create a new Pull Request.

## License
