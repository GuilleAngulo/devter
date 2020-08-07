import Avatar from "components/Avatar";

export default function Message({ id, avatar, username, message }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 2px solid #eaf7ff;
          display: flex;
          padding: 10px 15px;
        }

        div {
          margin-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
      `}</style>
    </>
  );
}
