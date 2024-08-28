// Task 3
class News {
  constructor(title, text, tags, publishDate) {
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.publishDate = new Date(publishDate);
  }

  print() {
    const now = new Date();
    const diffDays = Math.floor(
      (now - this.publishDate) / (1000 * 60 * 60 * 24)
    );

    let dateStr = "";
    if (diffDays < 1) {
      dateStr = "сьогодні";
    } else if (diffDays < 7) {
      dateStr = `${diffDays} днів тому`;
    } else {
      const day = this.publishDate.getDate().toString().padStart(2, "0");
      const month = (this.publishDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const year = this.publishDate.getFullYear();
      dateStr = `${day}.${month}.${year}`;
    }

    console.log(`Title: ${this.title}`);
    console.log(`Date: ${dateStr}`);
    console.log(`Tags: ${this.tags.join(", ")}`);
    console.log(`Text: ${this.text}`);
  }
}

// Example usage
const newsItems = [
  new News(
    "Breaking News",
    "Something important happened.",
    ["breaking", "important"],
    "2024-08-27"
  ),
  new News("Local News", "Some local news here.", ["local"], "2024-08-20"),
];

newsItems.forEach((news) => news.print());
