## Development setup

### Prerequisites

Node.js and npm (or yarn)

### Installation

Install Node.js and npm (or yarn) if you haven't already.

Install Tailwind CSS via npm:

``` Bash
npm install -D tailwindcss
```

Run the CLI tool to scan your template files for classes and build your CSS:

``` Bash
npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch
```
Your CSS will be built in the output file you specified. Read more on the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation).