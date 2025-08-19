LWC News Integration
Overview
LWC News Integration is a Lightning Web Component (LWC) designed to dynamically fetch and display news articles from around the world using the NewsAPI. This component allows users to filter news by country and category, such as finance news from the United States or technology news from India, providing a tailored and seamless news browsing experience.
This project showcases the integration of modern web components with external APIs, demonstrating proficiency in Salesforce LWC development, API integration, and dynamic data handling. It is a valuable addition to any portfolio, highlighting skills in building responsive and user-friendly web applications.
Features

Dynamic News Retrieval: Fetches real-time news articles based on user-selected country and category.
Customizable Filters: Allows users to customize news feeds by specifying countries (e.g., US, IN) and categories (e.g., Finance, Technology, Sports).
Seamless API Integration: Connects with NewsAPI to retrieve up-to-date global news.
Responsive Design: Built with Lightning Web Components to ensure compatibility with Salesforce platforms and a smooth user experience.

Prerequisites
To use this component, you need the following:

A Salesforce environment with Lightning Web Components enabled.
An API key from NewsAPI.
NewsAPI endpoint added to your Salesforce org's Remote Site Settings to allow secure API calls.

Installation

Clone the Repository:
git clone https://github.com/yashdabhi1/LWC-News-integration.git


Obtain an API Key:

Sign up at NewsAPI to get your free API key.
Store the API key securely in your Salesforce environment (e.g., as a custom setting or named credential).


Configure Remote Site Settings:

In your Salesforce org, navigate to Setup > Security > Remote Site Settings.
Add the NewsAPI endpoint (e.g., https://newsapi.org) to allow API access.


Deploy the Component:

Deploy the LWC to your Salesforce org using the Salesforce CLI or a metadata deployment tool.

sfdx force:source:deploy -p force-app/main/default


Integrate into Your Salesforce App:

Add the LWC to a Lightning page or app using the Lightning App Builder.



Usage

Select Country and Category: Use the component's UI to choose a country and news category.
View News: The component will fetch and display relevant news articles based on your selections.
Customize: Modify the component's code to adjust styling, additional filters, or other features as needed.

Project Structure
LWC-News-integration/
├── force-app/
│   ├── main/
│   │   ├── default/
│   │   │   ├── classes/
│   │   │   │   ├── NewsApiIntegration.cls
│   │   │   ├── lwc/
│   │   │   │   ├── newsIntegration/
│   │   │   │   │   ├── newsIntegration.html
│   │   │   │   │   ├── newsIntegration.js
│   │   │   │   │   ├── newsIntegration.css
│   │   │   │   │   ├── newsIntegration.js-meta.xml
├── README.md

Technologies Used

Lightning Web Components (LWC): For building the front-end interface.
NewsAPI: External API for fetching global news.
Salesforce Platform: For hosting and deploying the component.
JavaScript: For handling API calls and dynamic rendering.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate documentation.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, please contact Yash Dabhi or open an issue on this repository.

Built with passion for delivering dynamic, user-focused solutions.
