function CarouselElement({ title, img, text, src, use }) {
  return (
    <a
      href={src}
      target="_blank"
      className="flex  flex-col gap-2  px-6 "
      rel="noreferrer"
    >
      <div className="flex gap-2 flex-col">
        <p className="pereliv text-center">{title}</p>
        <img src={img} alt={title} className=" sm:h-40 md:h-52 lg:h-60" />
        <p>{text}</p>
      </div>
      <div className="flex gap-4  flex-wrap text-[9px]">
        {use?.map((e, id) => (
          <p
            key={id}
            className="bg-white dark:bg-slate-600 rounded-full px-2 py-1"
          >
            {e}
          </p>
        ))}
      </div>
    </a>
  );
}

export default CarouselElement;
