// Task 4
class NewsFeed {
  constructor() {
    this.newsArray = [];
  }

  get count() {
    return this.newsArray.length;
  }

  addNews(news) {
    this.newsArray.push(news);
  }

  removeNews(index) {
    this.newsArray.splice(index, 1);
  }

  displayAllNews() {
    this.newsArray.forEach((news) => news.print());
  }

  sortNewsByDate() {
    this.newsArray.sort((a, b) => b.publishDate - a.publishDate);
  }

  searchNewsByTag(tag) {
    return this.newsArray.filter((news) => news.tags.includes(tag));
  }
}

// Example usage
const newsFeed = new NewsFeed();
newsFeed.addNews(
  new News("Event", "An event happened.", ["event"], "2024-08-26")
);
newsFeed.addNews(
  new News("Update", "An update was made.", ["update"], "2024-08-22")
);

console.log(`Total news count: ${newsFeed.count}`);
newsFeed.displayAllNews();
newsFeed.sortNewsByDate();
console.log("After sorting:");
newsFeed.displayAllNews();

console.log('Searching for "event":');
const eventNews = newsFeed.searchNewsByTag("event");
eventNews.forEach((news) => news.print());
