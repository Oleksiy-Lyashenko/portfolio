import personImg from './assets/person.jpg';
import gamingImg from './assets/gaming.webp';
import cookingImg from './assets/cooking.webp';
import runningImg from './assets/running.jpeg';

import google from './assets/google-logo.svg';
import netflix from './assets/netflix-logo.svg';

import { FaEnvelope } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';
import { useEffect, useState } from 'react';

import data from './data/data.json';
import ProjectBlock from './ProjectBlock';

function App() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await data;

      setProjects(res);
    };

    fetchData();
  }, []);

  const pressFilter = (e) => {
    setFilter(e.target.name);
    const newArr = data.filter((project) => {
      return project.tech === e.target.name;
    });

    setProjects([...newArr]);
  };

  console.log(projects);

  return (
    <div className="page">
      <div className="wrapper">
        <div className="grid page__content">
          <div className="page-block name">
            <img src={personImg} alt="" className="name__img" />

            <div className="name__info">
              <div className="name__top">
                <div className="name__top-left">
                  <h3 className="page__title name__name">Billy Pearson</h3>

                  <p className="name__text name__text--gray">Front-end developer</p>
                </div>

                <div className="name__top-right">
                  <div className="name__box">
                    <FaEnvelope className="name__icon" size="20px" />
                    <a href="mailto: billy@example.com" className="name__text">
                      billy@example.com
                    </a>
                  </div>

                  <div className="name__box">
                    <MdLocalPhone className="name__icon" size="20px" />
                    <a href="tel: (+603) 546 624 342" className="name__text">
                      (+603) 546 624 342
                    </a>
                  </div>
                </div>
              </div>

              <div className="name__bottom">
                <p className="name__text name__text--gray">
                  Self-motivated developer, who is willing to learn and create outstanding UI
                  applications.
                  <br />
                  <br />
                  Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
                  malesuada molestie.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="page-block skills">
            <h3 className="skills__title">front-end</h3>

            <div className="skills__box">
              <span className="skills__text">React</span>
              <div className="skills__range"></div>
            </div>
            <div className="skills__box">
              <span className="skills__text">Javascript</span>
              <div className="skills__range"></div>
            </div>
            <div className="skills__box">
              <span className="skills__text">CSS</span>
              <div className="skills__range"></div>
            </div>
            <div className="skills__box">
              <span className="skills__text">Vue</span>
              <div className="skills__range"></div>
            </div>
            <div className="skills__box">
              <span className="skills__text">Redux</span>
              <div className="skills__range"></div>
            </div>
            <div className="skills__box">
              <span className="skills__text">React Native</span>
              <div className="skills__range"></div>
            </div>
          </div>

          <div className="page-block blog">
            <h4 className="blog__subtitle">Blog</h4>

            <div className="blog__main">
              <h3 className="page__title blog__title">How to organize your CSS</h3>

              <div className="blog__block-img"></div>
            </div>

            <p className="blog__text">
              In this article I tell the story about Proin eu justo sit amet lacus bibendum
              tincidunt. Vivamus non volutpat nisl, a luctus mi.
              <br />
              <br />
              Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada
              molestie.
            </p>

            <a href="https://devchallenges.io/" className="blog__link">
              dev.to
            </a>
          </div>

          <div className="page-block hobbies">
            <h3 className="page__title hobbies__title">Hobbies</h3>

            <div className="hobbies__block">
              <div className="hobbies__container-img">
                <img src={gamingImg} alt="" className="hobbies__img" />
              </div>
              <h4 className="hobbies__name">Gaming</h4>

              <p className="hobbies__text">Quisque feugiat malesuada molestie.</p>
            </div>

            <div className="hobbies__block">
              <div className="hobbies__container-img">
                <img src={cookingImg} alt="" className="hobbies__img" />
              </div>
              <h4 className="hobbies__name">Cooking</h4>

              <p className="hobbies__text">Quisque feugiat malesuada molestie.</p>
            </div>

            <div className="hobbies__block">
              <div className="hobbies__container-img">
                <img src={runningImg} alt="" className="hobbies__img" />
              </div>
              <h4 className="hobbies__name">Running</h4>

              <p className="hobbies__text">Quisque feugiat malesuada molestie.</p>
            </div>
          </div>

          <div className="page-block experience">
            <h3 className="page__title experience__title">Experience</h3>

            <div className="experience__block">
              <div className="experience__container-logo">
                <img src={google} alt="" className="experience__logo" />
              </div>

              <div className="experince__info">
                <span className="experience__date">Feb 2017 - Current</span>

                <h4 className="experience__position">Front-end developer</h4>

                <p className="experience__describe">
                  Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
                  malesuada molestie.
                </p>
              </div>
            </div>
            <div className="experience__block">
              <div className="experience__container-logo">
                <img src={netflix} alt="" className="experience__logo" />
              </div>

              <div className="experince__info">
                <span className="experience__date">Aug 2016 - Feb 2018</span>

                <h4 className="experience__position">Full-stack developer</h4>

                <p className="experience__describe">
                  Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
                  malesuada molestie.
                </p>
              </div>
            </div>
          </div>

          <div className="page-block views-projects">
            <h3 className="views-projects__title">Projects ({projects.length})</h3>

            <div className="views-projects__block">
              <button
                className={
                  filter === 'react' ? 'views-projects__button--active' : 'views-projects__button'
                }
                name="react"
                onClick={pressFilter}>
                React
              </button>
              <button
                className={
                  filter === 'vue' ? 'views-projects__button--active' : 'views-projects__button'
                }
                name="vue"
                onClick={pressFilter}>
                Vue
              </button>
              <button
                className={
                  filter === 'responsive'
                    ? 'views-projects__button--active'
                    : 'views-projects__button'
                }
                name="responsive"
                onClick={pressFilter}>
                Responsive
              </button>
            </div>
          </div>
        </div>

        {projects.length > 0 ? (
          <div className="project">
            {projects.map((project) => (
              <ProjectBlock project={project} />
            ))}
          </div>
        ) : (
          <div className="page-block project--empty">
            <div className="page__title">
              Not yet
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
