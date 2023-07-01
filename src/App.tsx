import { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
      author: 'Thomas Edison',
    },
  ]);
  const [rendomQuote, setRandomQuote] = useState<Quote>({} as Quote);
  const [colors, setColors] = useState<string>('121212');

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setRandomQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);

  const handleClick = () => {
    setColors(Math.floor(Math.random() * 16777215).toString(16));
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <>
      <div
        id="wrapper"
        style={{
          backgroundColor: `#${colors}`,
          minHeight: '100vh',
        }}
      >
        <div id="quote-box">
          <div className="quote-text" style={{ color: `#${colors}` }}>
            <i className="fa fa-quote-left"> </i>
            {'  '}
            <span id="text">{rendomQuote.text}</span>
          </div>
          <div className="quote-author" style={{ color: `#${colors}` }}>
            <span id="author">
              {'-'} {rendomQuote.author}
            </span>
          </div>
          <div className="buttons">
            <a
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22You%20can%20never%20cross%20the%20ocean%20until%20you%20have%20the%20courage%20to%20lose%20sight%20of%20the%20shore.%22%20Christopher%20Columbus"
              style={{
                backgroundColor: `#${colors}`,
              }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Christopher%20Columbus&amp;content=You%20can%20never%20cross%20the%20ocean%20until%20you%20have%20the%20courage%20to%20lose%20sight%20of%20the%20shore.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
              style={{
                backgroundColor: `#${colors}`,
              }}
            >
              <i className="fa fa-tumblr"></i>
            </a>
            <button
              id="new-quote"
              onClick={handleClick}
              style={{
                backgroundColor: `#${colors}`,
              }}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className="footer">
          by{' '}
          <a href="https://github.com/MJdiop" target="_blank">
            MJdiop
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
