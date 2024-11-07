// json2html.js

export default function json2html(data) {
  // Start the HTML table with a custom attribute
  let html = '<table data-user="saimonajigari@gmail.com">';

  // Create the table header (with fixed columns: Name, Age, Gender)
  html += "<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>";
  html += "<tbody>";

  data.forEach((item) => {
    html += "<tr>";

    
    html += `<td>${item.Name}</td>`;
    html += `<td>${item.Age}</td>`;


    if (item.Gender) {
      html += `<td>${item.Gender}</td>`;
    } else {
      html += "<td></td>";
    }

    html += "</tr>";
  });

  html += "</tbody></table>";

  return html; // Return the generated HTML string
}
