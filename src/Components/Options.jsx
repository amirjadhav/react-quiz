const Options = ({ isSelected, getOption, option, optionText }) => {
  return (
    <a
      className={`${
        isSelected == option ? "bg-yellow" : ""
      } flex border-peach border-2 items-center pl-4 ml-4 h-16 w-4/5 hover:bg-yellow hover:text-white  text-xl cursor-pointer font-medium`}
      onClick={() => {
        getOption(option);
      }}
    >
      {option}. &nbsp; &nbsp;{optionText}
    </a>
  );
};
export default Options;
