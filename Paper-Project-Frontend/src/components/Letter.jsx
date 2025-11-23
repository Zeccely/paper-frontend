import LetterPicture from "./LetterPicture";
import LetterInformation from "./LetterInformation";
import LetterManagement from "./LetterManagement";

const Letter = () => {
  return (
    <div className="letter-center-inner">

      <div className="letter-image">
        <LetterPicture />
      </div>

      <div className="letter-extra">
        <LetterInformation />
      </div>

      <div className="letter-disc">
        <LetterManagement />
      </div>
    </div>
  );
}

export default Letter;