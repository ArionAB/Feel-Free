import footer from "../images/footer.jpg";
import footer2 from "../images/footer2.jpg";

console.log(footer);

export const PhotoLoop = () => {
  const photos = [
    {
      id: 1,
      src: { footer },
    },
    {
      id: 2,
      src: { footer2 },
    },
  ];
  return (
    <div>
      {photos.map((photo) => {
        return <img key={photo.id} src={photo} alt="can't show img" />;
      })}
    </div>
  );
};
// <a>
// /* <img
// // src={require(`../images/potato0${i + 1}.jpeg`).default}
// // src={`potato0${i + 1}`}
// // src={`potato0${i + 1}`}
// // src={`photo0${i + 1}`}
// src={photo01}
// // src={(photo01, photo02)}
// // src={photo0}
// alt="sound"
// ></img> */
// </a>
