const { google } = require("googleapis");
const serviceAccount = require("./service-account.json");
const SPREADSHEET_ID = "1r6HUu3lM4FByTPoe3pFA1JF2ARvT8HyP5R2MGPbUiS8";
const openweathermap = "3349fb06fe46a4ba6eedca59110a6599";
let previousRows = [];

async function updateCityTemperatures() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth });

    const range = "Sheet1!A:B";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range,
    });
    const currentRows = response.data.values;

    if (currentRows.length === 0) {
      console.log("No data found.");
      return;
    }
    if (JSON.stringify(currentRows) === JSON.stringify(previousRows)) {
      console.log("No changes detected.");
      return;
    }

    const updatedRows = await Promise.all(
      currentRows.map(async (row, index) => {
        if (index === 0) {
          return row;
        }

        const city = row[0];
        try {
          const temp = await getCityTemperature(city);
          return [city, temp];
        } catch (error) {
          console.error(`Error fetching temperature for city ${city}:`, error);
          return row;
        }
      })
    );

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "RAW",
      resource: { values: updatedRows },
    });

    console.log("Spreadsheet updated successfully.");
    previousRows = currentRows;
  } catch (error) {
    console.error("Error updating city temperatures:", error);
  }
}

async function getCityTemperature(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data.main.temp.toFixed(1);
    } else {
      throw new Error(
        `Failed to fetch temperature for ${city}: ${data.message}`
      );
    }
  } catch (error) {
    throw new Error(
      `Failed to fetch temperature for ${city}: ${error.message}`
    );
  }
}

setInterval(updateCityTemperatures, 2000);
