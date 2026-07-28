import "../styles/testing.css";
import { useState } from "react";
const testFlights = [
  {
    id: 1,
    date: "March 30, 2026",
    tested: "First Test Flight with Sentinel",
    videoId: "4_eZP47MgGU",
    detailsUrl: "/test-flights/1",
    details:
      "This was Bronco ASTRA's first test flight with the Sentinel Hexacopter. It was conducted in an open soccer field and nobody was holding the YAGI. The flight's operating range was 50-90 Amps with peak only being reached during yaw maneuvers. It was concluded that the Amp sensor may be off about +1 to +1.5 amps [as per video]. Operating volts reached a low of 22.9V and the weakest signal strength was 72%. ",
  },
  {
    id: 2,
    date: "March 31, 2026",
    tested: "Comp Entry",
    videoId: "Y97niCa6mX0",
    detailsUrl: "/test-flights/2",
    details:
      "This was Bronco ASTRA's flight readiness test for the 2026 SUAS Competition. The flight was a success and therefore deemed sufficient to submit for competition entry.",
  },
  {
    id: 3,
    date: "April 11, 2026",
    tested: "Limit Test",
    videoId: "bkZWvAHjOlw",
    detailsUrl: "/test-flights/3",
    details:
      "This test was conducted to determine the absolute limits of Sentinel. It was a successful mission where Sentinel flew at 5m/s from homebase out into the open field. From there Sentinel ramped up in speed to 8m/s down a straightaway and back to 5m/s to spline back to the start of the straightaway. Sentinel then reached 10m/s down the straight away reaching a max angle of attack of -10 degrees and a max amp of about 80amps while doing the spline maneuever.",
  },
  {
    id: 4,
    date: "April 18 2026",
    tested: "No YAW",
    videoId: "KandDP741TA",
    detailsUrl: "/test-flights/4",
    details:
      "Originally we wanted to test both a Payload drop and an Object Recognition test along with a No_YAW mission, but both were abandoned due to some technical difficulties. Overall for the No_YAW test, it was a success and Sentinel was tested in a Loiter test with different flight modes.",
  },
  {
    id: 5,
    date: "April 22, 2026",
    tested: "AUTO Mission with No YAW and in Stabilized Mode",
    videoId: "D5BXfRfgxVQ",
    detailsUrl: "/test-flights/5",
    details:
      "The objective of this test was to evaluate Sentinel's ability to successfully complete an autonomous mission while operating without YAW control and with the flight controller in Stabilized Mode. The team conducted a full AUTO mission to evaluate flight stability, navigation, and overall mission performance under the modified control configuration. The aircraft was monitored throughout the mission to ensure that it maintained a stable flight path and responded correctly to mission commands. The test was successful. Sentinel completed the planned AUTO mission while operating without YAW control and in Stabilized Mode. The aircraft maintained stable flight throughout the test and successfully followed the programmed mission sequence.",
  },
  {
    id: 6,
    date: "April 25, 2026",
    tested: "Payload and Object Recognition Test",
    videoId: "Zvh3D5nzs9Q",
    detailsUrl: "/test-flights/6",
    details:
      "The objective of this test was to evaluate Sentinel's object recognition and payload delivery systems. The object recognition portion focused on capturing images and validating the mapping algorithm, while the payload portion tested Sentinel's ability to successfully release the payload at the intended location. The object recognition portion of the test focused on collecting aerial imagery from Sentinel and evaluating the mapping algorithm's ability to process and utilize the captured images. The payload delivery system was also tested during the flight, with Sentinel successfully completing the payload drop sequence. The payload drop was successful, and Sentinel released the payload as intended. However, the parachute did not deploy after the payload was released. The object recognition portion of the test successfully captured the required imagery, providing valuable data for evaluating and refining the mapping algorithm.",
  },
  {
    id: 7,
    date: "May 2, 2026",
    tested: "Object Recognition's Longest Test Flight",
    videoId: "LxZK_AB357A",
    detailsUrl: "/test-flights/7",
    details:
      "The objective of this test was to conduct Sentinel's longest object recognition mission to date while evaluating the aircraft's ability to capture a large volume of aerial imagery for the mapping and object recognition systems. The payload delivery system was also tested during the flight. Sentinel completed an extended flight focused primarily on the object recognition mission. Throughout the flight, the aircraft successfully captured 396 photographs for use by the team's mapping and object recognition algorithms. A payload drop was also attempted as part of the test. The object recognition mission was successful, with Sentinel successfully capturing 396 photos during the flight. The large collection of aerial imagery provided valuable data for evaluating the team's mapping and object recognition systems. However, the payload drop test was unsuccessful and the payload was not successfully delivered.",
  },
  {
    id: 8,
    date: "May 31, 2026",
    tested: "3 Consecutive Payload Test Drops",
    videoId: "i8nukZLhrPs",
    detailsUrl: "/test-flights/8",
    details:
      "The objective of this test was to evaluate Sentinel's payload delivery system through three consecutive payload drops. The test focused on validating reliable payload release and parachute deployment across multiple drops during the same flight operation. Sentinel conducted three consecutive payload drop attempts to evaluate the consistency and reliability of the payload delivery system. During the first drop, the parachute became tangled and did not deploy correctly. The team continued with the remaining two drop attempts, which were completed successfully. The first payload drop was unsuccessful due to the parachute becoming tangled during deployment. The second and third payload drops were both successful, with the parachutes deploying correctly and the payloads being delivered as intended. Overall, two out of three payload drops were completed successfully.",
  },
  {
    id: 9,
    date: "June 6, 2026",
    tested: "Speed and Endurance Test",
    videoId: "GbK7msVenys",
    detailsUrl: "/test-flights/9",
    details:
      "The objective of this test was to evaluate Sentinel's flight performance at different speeds and verify that the aircraft's low-battery failsafe system would correctly initiate a Return-to-Launch (RTL) procedure when triggered. Sentinel was flown at a series of target speeds of 8, 10, 12, and 14 kph to evaluate the aircraft's speed capabilities and flight performance. The team was able to successfully test the aircraft at 8, 10, and 12 kph. However, Sentinel was unable to reach the 14 kph target due to the limited angle of the aircraft's tilt, which restricted its maximum forward speed. The team also intentionally triggered the low-battery failsafe to verify that Sentinel would automatically initiate an RTL procedure. The speed testing was successful at 8, 10, and 12 kph. Sentinel was unable to reach the 14 kph target due to the aircraft's limited tilt angle. The low-battery failsafe test was also successful, with Sentinel correctly initiating the Return-to-Launch procedure when the failsafe was triggered.",
  },
];

export default function Testing() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <main className="test-page">
      <section className="testing-hero">
        <div className="testing-hero__grid" aria-hidden="true" />

        <p className="testing-eyebrow">Bronco ASTRA Testing</p>

        <h1>
          Test what
          <br />
          <em>We build.</em>
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
        <p className="testing-intro">
          Watch the tests that turn engineering work into flight-ready systems.
        </p>
        <section className="video-grid">
          {testFlights.map((flight) => (
            <article className="flight-card" key={flight.id}>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${flight.videoId}`}
                  title={`${flight.date} test flight`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flight-info">
                <p className="flight-date">{flight.date}</p>
                <h2>{flight.tested}</h2>

                <button
                  className="details-link"
                  onClick={() => setSelectedFlight(flight)}
                >
                  View Test Details <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>

      {selectedFlight && (
        <div
          className="flight-modal-backdrop"
          onClick={() => setSelectedFlight(null)}
        >
          <section
            className="flight-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="flight-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedFlight(null)}
              aria-label="Close test details"
            >
              ×
            </button>

            <p className="flight-date">{selectedFlight.date}</p>
            <h2 id="flight-modal-title">{selectedFlight.tested}</h2>
            <p>{selectedFlight.details}</p>
          </section>
        </div>
      )}
      <section className="testing-callout">
        <p className="testing-eyebrow">Test. Learn. Improve.</p>

        <h2>Every flight is an opportunity to build something better.</h2>

        <p>
          From simulations and bench tests to real-world flight operations, our
          testing process helps us validate our designs and continuously improve
          our aircraft.
        </p>

        <div className="testing-callout__line" aria-hidden="true" />
      </section>
    </main>
  );
}
