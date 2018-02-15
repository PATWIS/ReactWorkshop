export const elem = function (book) {
  return (
    <div className="media">
      <div className="media-left">
        <img className="mr-3" src={book.src} alt="image" />
      </div>
      <div className="media-body">
        <h5 className="mt-0">{book.name}</h5>
        {book.desc}
      </div>
    </div>
  )
}
