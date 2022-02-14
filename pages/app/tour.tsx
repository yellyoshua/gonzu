export default function TourApp() {
  return (
    <div>
      <iframe
        className="h-screen"
        width="100%"
        allowFullScreen
        style={{ borderStyle: "none" }}
        src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg"
      ></iframe>
    </div>
  );
}
