import { Typewriter } from 'react-simple-typewriter';

const TypingHeading = () => {
  return (
    <div className="text-8xl md:text-7xl font-serif font-bold text-center">
      <Typewriter
        words={['Welcome to Ovabloom']}
        typeSpeed={70}
        cursor
        cursorStyle="_"
      />
    </div>
  );
};

export default TypingHeading;
