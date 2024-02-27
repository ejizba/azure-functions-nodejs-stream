# Azure Functions Node.js Stream Sample

The app in this repo streams a large file (96mb by default) named `input.txt` to a file `output.txt` and logs the progress.

## Prerequsites

- Version 4.0.5530 of Azure Functions Core Tools
- Node.js v18+

## Run the app

1. Add a `local.settings.json` file with the following contents:

    ```json
    {
        "IsEncrypted": false,
        "Values": {
            "AzureWebJobsStorage": "",
            "FUNCTIONS_WORKER_RUNTIME": "node",
            "FUNCTIONS_REQUEST_BODY_SIZE_LIMIT": "4294967296"
        }
    }
    ```

2. Run `npm install`.
3. Run `npm start`. This will build the app, create the large input file, and start the app.
4. If you want to simulate streaming a request, run `npm run streamRequest`.
5. If you want to simulate streaming a response, run `npm run streamResponse`.
6. You should see progress in the console as the file is processed. It happens fast for a 96mb file, but as long as you see multiple progress values before 100%, you know your data was streamed.

## App contents

- `src/functions/*`: The actual Azure Functions
- `src/scripts/*`: Scripts used to create the large file and send requests to Azure Functions

## Next steps

1. If you want to make it even more fun, change the value of `fileSize` in `src/constants.ts` to a larger value (the max as defined in `local.settings.json` above is 4 GB).
2. If you haven't already, [read our blog post for this feature](https://aka.ms/AzFuncNodeHttpStreams).
