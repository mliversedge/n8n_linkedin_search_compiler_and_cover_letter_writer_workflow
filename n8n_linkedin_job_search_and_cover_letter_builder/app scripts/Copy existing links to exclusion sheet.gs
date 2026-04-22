// Takes the links posted by the agent in the Results sheet and copies them to the Exclusions sheet so exclusions.json can filter them from the same sheet without using 3rd call to google sheets, due to Google rate limiting.
function syncResultsToExclusions() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const results = ss.getSheetByName('Result');
  const exclusions = ss.getSheetByName('Exclusions');
  
  // Get all values from Results column D
  const resultLinks = results.getRange('D2:D').getValues()
    .flat()
    .filter(Boolean);
  
  // Get all existing values in Exclusions column C
  const existing = exclusions.getRange('C2:C').getValues()
    .flat()
    .filter(Boolean);
  
  // Only append links that aren't already in Exclusions
  const toAdd = resultLinks.filter(link => !existing.includes(link));
  
  if (toAdd.length === 0) return;
  
  const nextRow = existing.length + 2; // +2 to account for header row
  exclusions.getRange(nextRow, 3, toAdd.length, 1)
    .setValues(toAdd.map(l => [l]));
}