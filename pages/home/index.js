import Layout from "components/AppLayout";
import Message from "components/Message";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
    console.log(timeline);
  }, []);

  return (
    <>
      <Layout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((message) => (
            <Message
              key={message.id}
              username={message.username}
              avatar={message.avatar}
              message={message.message}
              id={message.id}
            />
          ))}
        </section>
        <nav></nav>
      </Layout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-weight: 800;
          font-size: 21px;
        }
        section {
          padding-top: 49px;
        }

        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  );
}
