import { data } from './data';
import { Article } from './Article';

export const renderArticles = () => {
  const strategiesWrapper = getStrategiesWrapper();
  const articles = generateArticles(data); // get array of instances of class new Article

  articles.forEach((article) => {
    strategiesWrapper.append(article.generateArticleHTML());
  });
};

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategies__container');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach((item) => {
    articles.push(new Article(item));
  });

  return articles;
};
