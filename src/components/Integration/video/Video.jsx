import { useEffect } from "react";

export default function Video() {
  useEffect(() => {
    // Replace the current URL with the YouTube video link when the component mounts
    window.location.replace("https://www.youtube.com/watch?v=Vr5yI9xJWOM");
  }, []);

  return <div>Video</div>;
}
