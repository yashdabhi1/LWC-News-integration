import { LightningElement } from 'lwc';
import getWorldTradeNews from '@salesforce/apex/NewsApiIntegration.getWorldTradeNews';

export default class WorldTradeNews extends LightningElement {
    news = [];
    paginatedNews = [];
    error;
    category = 'business';
    country = 'us';
    isLoading = false;
    pageSize = 5;
    page = 1;
    totalPages = 1;
    totalRecords = 0;

    pageSizeOptions = [
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '15', value: 15 },
        { label: '20', value: 20 }
    ];

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
        this.isLoading = true;
        this.error = null;
        this.news = [];
        this.paginatedNews = [];

        getWorldTradeNews({ category: this.category, country: this.country, pageSize: 20 })
            .then(data => {
                if (data && data.length > 0) {
                    this.news = data;
                    this.totalRecords = data.length;
                    this.page = 1;
                    this.updatePaginatedNews();
                } else {
                    this.error = 'No news articles available for the selected filters.';
                }
            })
            .catch(error => {
                // Defensive error handling
                let message = 'Unable to fetch news. Please try again later.';
                if (error && error.body && error.body.message) {
                    message = error.body.message;
                } else if (error && error.message) {
                    message = error.message;
                }
                this.error = message;
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    updatePaginatedNews() {
        const startIndex = (this.page - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.paginatedNews = this.news.slice(startIndex, endIndex);
        this.totalPages = Math.max(Math.ceil(this.news.length / this.pageSize), 1);
    }

    handlePrevious() {
        if (this.page > 1) {
            this.page--;
            this.updatePaginatedNews();
        }
    }

    handleNext() {
        if (this.page < this.totalPages) {
            this.page++;
            this.updatePaginatedNews();
        }
    }

    handlePageSizeChange(event) {
        this.pageSize = parseInt(event.target.value, 10);
        this.page = 1;
        this.updatePaginatedNews();
    }

    handleCategoryChange(event) {
        this.category = event.target.value;
        this.fetchNews();
    }

    handleCountryChange(event) {
        this.country = event.target.value;
        this.fetchNews();
    }

    get disablePrevious() {
        return this.page === 1;
    }

    get disableNext() {
        return this.page === this.totalPages;
    }
}
