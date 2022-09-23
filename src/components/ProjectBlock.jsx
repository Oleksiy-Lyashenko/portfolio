export default function ProjectBlock({ project }) {
  const {id, img, tags, title, describe, demo, code} = project

  return (
    <div className="page-block project__block" key={id}>
      <div className="project__container-img">
        <img src={img} alt="" className="project__img" />
      </div>

      <div className="project__tag">
        {tags.map((tag, i) => (
          <span className="project__tag__text" key={i}>
            {tag}
          </span>
        ))}
      </div>

      <h3 className="project__title">{title}</h3>

      <p className="project__describe">{describe}</p>

      <a href={demo} className="project__button" target="_blank" rel="noreferrer">
        Demo
      </a>
      <a
        href={code}
        className="project__button project__button--white"
        target="_blank"
        rel="noreferrer">
        Code
      </a>
    </div>
  );
}
