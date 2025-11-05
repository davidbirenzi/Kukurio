# Student Translator MVP

A Flask web application that translates student documents from English to Kinyarwanda, French, or Swahili using OpenAI's GPT-4o model.

## Features

- Upload PDF or DOCX documents
- Select target language (Kinyarwanda, French, or Swahili)
- AI-powered translation using GPT-4o
- Download translated documents as DOCX files
- Beautiful, modern UI with responsive design
- Error handling for unsupported files and empty uploads

## Requirements

- Python 3.8 or higher
- OpenAI API key (get one from [OpenAI Platform](https://platform.openai.com/api-keys))

## Installation

1. **Clone or download this repository**

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up environment variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     copy .env.example .env
     ```
   - Edit `.env` and add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_actual_api_key_here
     ```

## Running the Application

1. **Make sure your virtual environment is activated**

2. **Set the OpenAI API key** (if not using .env file):
   - On Windows:
     ```bash
     $env:OPENAI_API_KEY="your_api_key_here"
     ```
   - On macOS/Linux:
     ```bash
     export OPENAI_API_KEY="your_api_key_here"
     ```

3. **Run the Flask application**:
   ```bash
   python app.py
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5000
   ```

## Usage

1. **Upload a document**: Click "Select Document" and choose a PDF or DOCX file (max 16MB)
2. **Select target language**: Choose from Kinyarwanda, French, or Swahili
3. **Translate**: Click "Translate Document" and wait for processing
4. **Download**: Once complete, download your translated document

## Project Structure

```
Student Translator MVP/
├── app.py                 # Flask application main file
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variables template
├── README.md             # This file
├── templates/            # HTML templates
│   ├── index.html        # Main upload form
│   └── success.html      # Success page with download link
├── static/               # Static files (CSS, JS)
│   ├── styles.css        # Styling
│   └── script.js         # JavaScript functionality
├── uploads/              # Temporary upload directory (auto-created)
└── translations/          # Translated documents directory (auto-created)
```

## Notes

- Uploaded files are automatically deleted after processing
- Translated documents are stored in the `translations/` folder
- The application uses GPT-4o model for high-quality translations
- Maximum file size is 16MB
- Supported file formats: PDF and DOCX

## Troubleshooting

- **"OPENAI_API_KEY not set"**: Make sure you've set the environment variable or created a `.env` file
- **"No text could be extracted"**: The document might be empty, corrupted, or contain only images
- **Translation errors**: Check your OpenAI API key and account credits

## License

This project is provided as-is for educational purposes.

