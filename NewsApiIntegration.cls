public with sharing class NewsApiIntegration {

    public static NewsAPI__c newsapi;
    static {
        newsapi = NewsAPI__c.getValues('Production');
    }

    public static String API_KEY = newsapi.API_KEY__c; 
    public static String BASE_URL = newsapi.BASE_URL__c;
    
    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getWorldTradeNews(String category, String country) {
        try {
            String endpoint = BASE_URL + '?category=' + category + '&country=' + country + '&pageSize=20&apiKey=' + API_KEY;

            HttpRequest request = new HttpRequest();
            request.setEndpoint(endpoint);
            request.setMethod('GET');

            Http http = new Http();
            HttpResponse response = http.send(request);

            if (response.getStatusCode() == 200) {
                Map<String, Object> jsonResponse = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                List<Object> articles = (List<Object>) jsonResponse.get('articles');

                List<Map<String, String>> newsList = new List<Map<String, String>>();
                Integer count = 0;

                for (Object articleObj : articles) {
                    Map<String, Object> article = (Map<String, Object>) articleObj;

                    if (article.containsKey('urlToImage') && article.get('urlToImage') != null && count < 10) {
                        Map<String, Object> source = (Map<String, Object>) article.get('source');

                        newsList.add(new Map<String, String>{
                            'title' => (String) article.get('title'),
                            'description' => (String) article.get('description'),
                            'url' => (String) article.get('url'),
                            'imageUrl' => (String) article.get('urlToImage'),
                            'sourceName' => (String) source.get('name') 
                        });
                        count++;
                    }
                }

                return newsList;
            } else {
                throw new CalloutException('Failed to fetch news: ' + response.getStatus());
            }
        } catch (Exception e) {
            throw new CalloutException('Error fetching news: ' + e.getMessage());
        }
    }
}