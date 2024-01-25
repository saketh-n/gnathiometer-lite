type GuidelinesProps = {
  title: string;
  instructions: string[];
};

/**
 *
 * @param {string} title Text that titles Guidelines section
 * @param {string[]} instructions Series of guidelines on a proper image
 * @returns {React.JSX.Element} Component displaying series of guidelines for a proper image to
 * upload
 */
export const Guidelines = ({
  title,
  instructions,
}: GuidelinesProps): React.JSX.Element => {
  const bulletPoints: React.JSX.Element[] = instructions.map(
    (instruction, index) => <li key={index}>{instruction}</li>
  );

  return (
    <div className="w-1/2 lg:w-1/4 p-4 border-gray-300 bg-gray-300 border-4 rounded-md mx-4">
      <h1 className="text-xl font-semibold text-center">{title}</h1>
      <ul className="list-disc pl-5">{bulletPoints}</ul>
    </div>
  );
};
