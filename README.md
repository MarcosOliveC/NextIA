# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

### Running This Project Locally

You can export the code from Firebase Studio and run it on your local machine. Here's how:

**1. Download Your Project Files**

First, you'll need to download all the project files from this Firebase Studio environment to your computer. Look for an option to export or download the entire project directory.

**2. Set Up Environment Variables**

The AI features in this project use Genkit, which connects to the Google AI platform. For it to work, you need to provide an API key.

*   Create a new file named `.env.local` in the root of your project directory (the same directory as `package.json`).
*   Inside this file, add the following line, replacing `YOUR_API_KEY` with your actual Google AI API key:

```
GEMINI_API_KEY=YOUR_API_KEY
```
> You can get a Google AI API key from the [Google AI Studio](https://aistudio.google.com/app/apikey).

**3. Install Dependencies**

Open a terminal or command prompt, navigate to your project's root directory, and run the following command to install all the necessary packages:

```bash
npm install
```

**4. Run the Development Server**

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

This will start the Next.js application, and you should be able to view it by opening `http://localhost:9002` in your web browser.

**5. (Optional) Run the Genkit AI Server**

The AI flows (like generating summaries) run on a separate Genkit server process. To enable these features during local development, open a **new terminal window**, navigate to your project directory, and run:

```bash
npm run genkit:watch
```

This starts the Genkit server and will automatically restart it if you make changes to your AI flows. Now, all features of your application should work locally!
