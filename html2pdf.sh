#!/bin/bash

# Path to the input HTML file
HTML_FILE="beautified_resume.html"  # Change this to your HTML file path

# Output PDF file name
PDF_FILE="resume.pdf"   # Change this to your desired PDF file name

# Convert HTML to PDF using wkhtmltopdf
wkhtmltopdf "$HTML_FILE" "$PDF_FILE"

echo "PDF generated: $PDF_FILE"
