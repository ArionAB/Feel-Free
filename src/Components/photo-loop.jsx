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
