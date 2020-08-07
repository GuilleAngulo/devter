export default function Avatar({ alt, src, text }) {
  return (
    <>
      <div>
        <img src={src} alt={alt} title={alt} />
        {text && <strong>{text}</strong>}
      </div>
      <style jsx>{`
        div {
          align-items: center;
          display: flex;
        }

        img {
          border-radius: 9999px;
          height: 49px;
          width: 49px;
        }

        img + strong {
          margin-left: 8px;
        }
      `}</style>
    </>
  );
}
