const book = {
  title: "Placed as frontend dev",
  author: "Charan",
  pages: 50,
};

const getBookDetails = ({ pages }) => {
  return pages >= 100;
};

console.log(getBookDetails(book));
