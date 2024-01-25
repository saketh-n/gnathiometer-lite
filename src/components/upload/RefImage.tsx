type RefImageProps = {
  img: string;
};

/**
 *
 * @param {string} img The path to the reference image
 * @returns {React.JSX.Element} styled version of the reference image
 */
export const RefImage = ({ img }: RefImageProps): React.JSX.Element => {
  return (
    <div className="w-1/4 bg-gray-300 p-4 border-gray-300 border-4 rounded-md mx-4 hidden lg:block">
      <h1 className="text-center text-xl font-semibold">Reference</h1>
      <img src={img} alt="Reference" />
    </div>
  );
};
