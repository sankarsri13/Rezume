// const puppeteer = require("puppeteer");
// const fs = require("fs");
// async function pdfgenerate(custom_html) {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(custom_html);
//     await page.emulateMedia("screen");
//     await page.pdf({
//       path: "myresume.pdf",
//       format: "A4"
//     });
//     await browser.close();
//     process.exit();
//   } catch (e) {
//     console.log(e);
//   }
// }
function display() {
  custom_html = "";
  custom_html +=
    "<style>*{font-family:Arial}p{font-weight:300}" +
    "table{font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(2),tr:nth-child(4){background-color: #dddddd;}</style>";
  custom_html += '<h2 style="font-style:bold;">Personal Details<hr><h2>';
  let name = document.getElementById("name").value;
  custom_html += "<h4>Name:  " + name + "</h4>";
  let email = document.getElementById("email").value;
  custom_html += "<h4>Email:  " + email + "</h4>";
  let dob = document.getElementById("dob").value;
  custom_html += "<h4>DOB:  " + dob + "</h4>";
  let mob = document.getElementById("mob").value;
  custom_html += "<h4>Contact Number:  " + mob + "</h4>";
  //Educational qualifications:
  custom_html +=
    '<h2 style="font-style:bold;">Educational Qualification<hr><h2>';
  custom_html +=
    "<table style='width=75%'><tr><th>Institution</th><th>Branch</th><th>Percentage</th></tr>";
  let school = document.getElementById("school").value;
  custom_html += "<tr><td>" + school + "</td>";
  let branch1 = document.getElementById("school_spec").value;
  custom_html += "<td>" + branch1 + "</td>";
  let percentage1 = document.getElementById("percentage1").value;
  custom_html += "<td>" + percentage1 + "</td></tr>";
  custom_html += "<tr></tr>";
  let university = document.getElementById("university").value;
  custom_html += "<tr><td>" + university + "</td>";
  let branch2 = document.getElementById("clg_spec").value;
  custom_html += "<td>" + branch2 + "</td>";
  let percentage2 = document.getElementById("percentage2").value;
  custom_html += "<td>" + percentage2 + "</td></tr></table>";
  //Experiece
  custom_html += '<h2 style="font-style:bold;">Experience<hr><h2>';
  custom_html +=
    "<table style='width=75%'><tr><th>Company</th><th>Role</th><th>Duration(in Years)</th></tr>";
  let comp1 = document.getElementById("comp1").value;
  custom_html += "<tr><td>" + comp1 + "</td>";
  let role1 = document.getElementById("rol1").value;
  custom_html += "<td>" + role1 + "</td>";
  let year1 = document.getElementById("year1").value;
  custom_html += "<td>" + year1 + "</td></tr>";
  custom_html += "<tr></tr>";
  let comp2 = document.getElementById("comp2").value;
  custom_html += "<tr><td>" + comp2 + "</td>";
  let role2 = document.getElementById("rol2").value;
  custom_html += "<td>" + role2 + "</td>";
  let year2 = document.getElementById("year2").value;
  custom_html += "<td>" + year2 + "</td></tr></table>";
  //Technical skills:
  custom_html += '<h2 style="font-style:bold;">Technical Skills<hr><h2>';
  custom_html +=
    '<h4 style="font-style:bold;text-decoration:underline;">&nbsp;Programming Languages<h4>';
  let pro_l = document.getElementById("pro_lang").value;
  res_l = pro_l.split(",");
  custom_html += "<ul>";
  for (var i in res_l) {
    custom_html += "<li><p>" + res_l[i] + "</p></li>";
  }
  custom_html += "</ul>";
  custom_html +=
    '<h4 style="font-style:bold;text-decoration:underline;">&nbsp;Softwares Known<h4>';
  let soft = document.getElementById("soft").value;
  res_s = soft.split(",");
  custom_html += "<ul>";
  for (var i in res_s) {
    custom_html += "<li><p>" + res_s[i] + "</p></li>";
  }
  custom_html += "</ul>";
  //   document.write(custom_html);
  var printWindow = window.open("", "", "height=400,width=800");
  printWindow.document.write(custom_html);
  printWindow.document.close();
  printWindow.print();
}
// custom_html = "<h1>Hello</h1>";
// pdfgenerate(custom_html);
