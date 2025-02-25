import { LightningElement, track } from 'lwc';
import getWorldTradeNews from '@salesforce/apex/NewsApiIntegration.getWorldTradeNews';

export default class WorldTradeNews extends LightningElement {
    @track news = [];
    @track error;
    @track category = 'business'; 
    @track country = 'us';

    get categoryOptions() {
        return [
            { label: 'Business', value: 'business' },
            { label: 'Politics', value: 'politics' },
            { label: 'Technology', value: 'technology' },
            { label: 'Sports', value: 'sports' },
            { label: 'Health', value: 'health' },
            { label: 'Entertainment', value: 'entertainment' }
        ];
    }

    get countryOptions() {
        return [
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'India', value: 'in' },
            { label: 'United Kingdom', value: 'gb' },
            { label: 'Australia', value: 'au' },
            { label: 'China', value: 'cn' }
        ];  
    }

    connectedCallback() {
        this.fetchNews();
    }

    fetchNews() {
        getWorldTradeNews({ category: this.category, country: this.country })
            .then((data) => {
                this.news = data;
                console.log('data', JSON.stringify(data, null, 2));
            })
            .catch((error) => {
                this.error = error.body.message || 'Error fetching news';
            });
    }

    handleCategoryChange(event) {
        this.category = event.target.value;
        this.fetchNews();
    }

    handleCountryChange(event) {
        this.country = event.target.value;
        this.fetchNews();
    }
}