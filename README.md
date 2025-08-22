# LWC News Integration

## Overview

LWC News Integration is a Lightning Web Component (LWC) designed to dynamically fetch and display news articles from around the world using the [NewsAPI](https://newsapi.org/). This component allows users to filter news by country and category, such as finance news from the United States or technology news from India, providing a tailored and seamless news browsing experience.

This project showcases the integration of modern web components with external APIs, demonstrating proficiency in Salesforce LWC development, API integration, and dynamic data handling. It is a valuable addition to any portfolio, highlighting skills in building responsive and user-friendly web applications.

## Features

- **Dynamic News Retrieval**: Fetches real-time news articles based on user-selected country and category.
- **Customizable Filters**: Allows users to customize news feeds by specifying countries (e.g., US, IN) and categories (e.g., Finance, Technology, Sports).
- **Seamless API Integration**: Connects with NewsAPI to retrieve up-to-date global news.
- **Responsive Design**: Built with Lightning Web Components to ensure compatibility with Salesforce platforms and a smooth user experience.
- **Robust Error Handling**: Includes enhanced error handling in the Apex controller for precise and informative error messages.
- **Tested Backend**: Includes a comprehensive test class for the Apex controller to ensure reliable API integration.

## Prerequisites

To use this component, you need the following:

- A Salesforce environment with Lightning Web Components enabled.
- An API key from [NewsAPI](https://newsapi.org/).
- NewsAPI endpoint added to your Salesforce org's **Remote Site Settings** to allow secure API calls.
- A custom setting named `NewsAPI__c` with fields `API_KEY__c` and `BASE_URL__c` configured in your Salesforce org.

## Screenshots
<img width="1889" height="728" alt="NI" src="https://github.com/user-attachments/assets/392963dc-03fe-4bcd-bdcc-da880b0bbe91" />


## Usage

- **Select Country and Category**: Use the component's UI to choose a country and news category.
- **View News**: The component will fetch and display relevant news articles based on your selections.
- **Customize**: Modify the component's code to adjust styling, additional filters, or other features as needed.

## Project Structure

```
LWC-News-integration/
├── force-app/
│   ├── main/
│   │   ├── default/
│   │   │   ├── lwc/
│   │   │   │   ├── newsIntegration/
│   │   │   │   │   ├── newsIntegration.html
│   │   │   │   │   ├── newsIntegration.js
│   │   │   │   │   ├── newsIntegration.css
│   │   │   │   │   ├── newsIntegration.js-meta.xml
│   │   │   ├── classes/
│   │   │   │   ├── NewsApiIntegration.cls
│   │   │   │   ├── NewsApiIntegrationTest.cls
├── README.md
```

## Technologies Used

- **Lightning Web Components (LWC)**: For building the front-end interface.
- **Apex**: For handling server-side API calls and data processing.
- **NewsAPI**: External API for fetching global news.
- **Salesforce Platform**: For hosting and deploying the component.
- **JavaScript**: For handling API calls and dynamic rendering.

## Testing

The project includes a test class (`NewsApiIntegrationTest.cls`) to ensure the reliability of the Apex controller (`NewsApiIntegration.cls`). The test class covers:

- Positive test cases for successful API responses.
- Negative test cases for handling API failures (e.g., invalid API key).
- Edge cases for articles without images.
- Improved error handling to capture precise HTTP response details.

To run the tests:
1. Deploy the test class to your Salesforce org.
2. Execute the tests via the Salesforce Developer Console or CLI:
   ```bash
   sfdx force:apex:test:run -n NewsApiIntegrationTest
   ```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [Yash Dabhi](mailto:your-email@example.com) or open an issue on this repository.

---

*Built with passion for delivering dynamic, user-focused solutions.*
