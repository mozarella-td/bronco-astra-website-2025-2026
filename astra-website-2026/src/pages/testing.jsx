import "../styles/testing.css";

const testFlights = [
  { id: 1, date: "July 14, 2026", tested: "Autonomous landing system", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/1" },
  { id: 2, date: "June 28, 2026", tested: "High-altitude engine restart", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/2" },
  { id: 3, date: "May 9, 2026", tested: "Flight-control software update", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/3" },
];

export default function Testing() {
  return (
    <main className="test-page">
      <section className="testing-hero">
  <div className="testing-hero__grid" aria-hidden="true" />

  <p className="testing-eyebrow">
    Bronco ASTRA Testing
  </p>

  <h1>
    Test what
    <br />
    <em>we build.</em>
  </h1>

  <p className="testing-hero__copy">
    From initial system checks to full mission simulations, testing allows
    the Bronco ASTRA team to validate our aircraft, identify challenges,
    and continuously improve performance before competition.
  </p>
</section>
      <section className="content">
        <p className="testing-eyebrow">Bronco ASTRA field log</p>
        <h1>Latest Test Flights</h1>
        <p className="testing-intro">Watch the tests that turn engineering work into flight-ready systems.</p>
        <section className="video-grid">
          {testFlights.map((flight) => (
            <article className="flight-card" key={flight.id}>
              <div className="video-wrapper">
                <iframe src={`https://www.youtube.com/embed/${flight.videoId}`} title={`${flight.date} test flight`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="flight-info">
                <p className="flight-date">{flight.date}</p>
                <h2>{flight.tested}</h2>
                <a className="details-link" href={flight.detailsUrl}>View test details <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
