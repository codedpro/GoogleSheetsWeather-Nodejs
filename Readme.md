# Google-Sheet-Weather-Nodejs

This Nodejs app provides real-time weather updates for cities listed in a Google Sheet. The script fetches the current temperature for each city from the OpenWeatherMap API and updates the sheet accordingly using google sheet api.

## Features

- **Real-Time Weather Updates**: Automatically fetches and updates the temperature for cities listed in your Google Sheet.
- **Trigger-Based Execution**: it will automaticly check and update sheets every X second
- **Error Handling**: Logs errors if fetching data from the API fails.

## Setup Instructions

### Prerequisites

- A Google account
- Access to Google Sheets
- Service-Account.json
- OpenWeatherMap API key

### Steps

1. **Create a Google Sheet**:
   - Create a new Google Sheet.
   - Name one of the sheets "AppsScript".
   - In the "AppsScript" sheet, add city names in column A.

2. **Get your creditionals from google cloud**:
   - Open the google cloud and get  your Service-Account.json
   - add your google sheets access and enable google sheet api

3. **Run your app**:
   - run it like normal nodejs app



## Contributing

We welcome contributions to improve the Google-Sheet-Extension-Weather project. If you have any suggestions, issues, or feature requests, please open an issue or submit a pull request.

### Steps to Contribute

1. **Fork the Repository**: Click on the 'Fork' button on the repository page.
2. **Create a New Branch**: 
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make Your Changes**: Implement your feature or bug fix.
4. **Commit Your Changes**: 
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the Branch**: 
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Open a Pull Request**: Go to the repository on GitHub and create a pull request.

## Contact

For any inquiries or questions, feel free to contact:

- **Email**: dev.codedpro@gmail.com
- **GitHub**: [codedpro](https://github.com/codedpro)

Thank you for using the Google-Sheet-Extension-Weather! We hope it helps you stay updated with the latest weather information.
