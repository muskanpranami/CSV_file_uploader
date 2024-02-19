CSV File Upload

## Overview
This CSV File Uploader and Parser is a simple tool designed to facilitate the uploading and parsing of CSV (Comma Separated Values) files. It provides an easy-to-use interface for users to upload CSV files, which are then processed to extract and display the data in a structured format.

## Features
- Upload CSV Files: Users can easily upload CSV files using the provided interface.
- Parse CSV Data: The tool parses the uploaded CSV file and extracts the data, making it accessible for further analysis.
- Searching: Users can search for data in the table.

## Installation
To install CSV_Upload, please follow these steps:

Clone this repository using the following command:
$ git clone https://github.com/agentgrey/CSV_Upload.git

Install the required dependencies using the following command:
$ npm install 

Start the application using the following command:
$ npm start 

Open the application in your web browser by visiting the following URL:
$ http://localhost:3900

## Usage
- Open the application in your web browser.
- Click on the "Upload" button to select and upload a CSV file.
- Once the file is uploaded, the tool will automatically parse the CSV data and display it in a structured format on the page.
- Explore the parsed data and use it for your analysis or processing.

## API Reference
CSV_Upload provides a simple API for uploading and parsing CSV files. The API supports the following endpoints:

- POST /upload: Uploads a CSV file and parses the data.
- GET /data: Returns the parsed CSV data as JSON.
